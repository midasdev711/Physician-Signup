import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import { Field, ErrorMessage } from 'formik'
import moment from 'moment'
import DatePicker from 'antd/es/date-picker'
import FieldLabel from '../../partials/fieldLabel.jsx'
import CustomInputComponent from '../../partials/formik/customInputComponent.jsx'

function validate(value) {
  let error
  if (!value) {
    error = 'Required'
  }
  return error
}

const fieldLabelStyle = {
  marginBottom: '24px',
}

function EducationAddForm() {
  const [isOpen, setIsOpen] = useState(false)

  const dateFormat = 'YYYY'

  return (
    <div>
      <FieldLabel label="Qualification" maxWidth={293} rootStyle={fieldLabelStyle}>
        <Field
          name="education.qualification"
          validate={validate}
          component={CustomInputComponent}
        />
      </FieldLabel>
      <FieldLabel label="School Or Training Institution" maxWidth={382} rootStyle={fieldLabelStyle}>
        <Field
          name="education.school"
          validate={validate}
          component={CustomInputComponent}
        />
      </FieldLabel>
      <FieldLabel label="Year Graduated" maxWidth={293} rootStyle={fieldLabelStyle}>
        <Field
          name="education.year"
          validate={validate}
          render={({ field, form }) => {
            const { value } = field
            return (
              <React.Fragment>
                <DatePicker
                  style={{ width: '100%' }}
                  mode="year"
                  open={isOpen}
                  placeholder="Select year"
                  value={value ? moment(value, dateFormat) : null}
                  format={dateFormat}
                  onOpenChange={(status) => {
                    if(status){
                      setIsOpen(true)
                    } else {
                      setIsOpen(false)
                    }
                  }}
                  onPanelChange={(momentDate) => {
                    setIsOpen(false)
                    form.setFieldValue('education.year', `${momentDate.year()}`)
                  }}
                  onChange={(momentDate, dateStr) => {
                    form.setFieldValue('education.year', dateStr)
                  }}
                />
                <ErrorMessage {...field} />
              </React.Fragment>
            )
          }}
        />
      </FieldLabel>
    </div>
  )
}

EducationAddForm.propTypes = {}

export default EducationAddForm
