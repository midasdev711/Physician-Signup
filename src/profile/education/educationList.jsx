import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FieldArray } from 'formik'
import PreviewEditList from './previewEditList.jsx'
import EducationAddForm from './educationAddForm.jsx'
import AddBtn from './addBtn.jsx'
import '../../styles/educationList.scss'

const styles = {
  divider: {
    margin: '24px 0',
    border: '0.5px solid #D8D8D8',
    maxWidth: '400px',
  },
}

function EducationList({ isEdit }) {
  const [showAddForm, setShowAddForm] = useState(false)

  function onShow() {
    setShowAddForm(true)
  }

  function onClose() {
    setShowAddForm(false)
  }

  return (
    <div className="education-list">
      <FieldArray
        name="educations"
        render={({ form, remove, push }) => {
          const {
            values: { educations, education },
            validateForm,
            setTouched,
            setFieldValue,
            setFieldTouched,
          } = form
          
          function resetAndClose() {
            if (showAddForm) {
              setFieldValue('education', {
                qualification: '',
                school: '',
                graduatedAt: '',
              }, false)
              setFieldTouched('education', {})
              onClose()
            }
          }

          function onAddForm() {
            validateForm().then((errors) => {
              if (Object.keys(errors).length) {
                const errorKeys = Object.keys(errors.education)

                if (errorKeys.length > 0) {
                  const touched = errorKeys.reduce((acc, key) => {
                    acc[key] = !!errors.education[key]
                    return acc
                  }, {})
                  setTouched({ education: touched })
                }
              } else {
                push(education)
                resetAndClose()
              }
            })
          }
          
          const previewEditListProps = {
            isEdit,
            educations,
            onRemove: (i) => remove(i),
            onAdd: onShow,
          }

          return (
            <div>
              {
                !showAddForm ? (
                  <PreviewEditList {...previewEditListProps} />
                ) : (
                  <div>
                    <EducationAddForm />
                    <div>
                      <div style={styles.divider} />
                      <AddBtn
                        onAdd={onAddForm}
                        onBack={resetAndClose}
                      />
                    </div>
                  </div>
                )
              }
              {
                isEdit && educations && educations.length > 0 && (
                  <div>
                    <div style={styles.divider} />
                    <AddBtn
                      onAdd={!showAddForm ? onShow : onAddForm}
                      onBack={resetAndClose}
                    />
                  </div>
                )
              }
            </div>
          )
        }}
      />
    </div>
  )
}

EducationList.defaultProps = {
  isEdit: false,
}

EducationList.propTypes = {
  isEdit: PropTypes.bool,
}

export default EducationList
