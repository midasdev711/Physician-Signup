import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'formik'
import { triggerFormLevelValidation } from '../../utils/formik.js'
import PreviewHeader from '../../partials/previewHeader.jsx'
import EditDetailsForm from './editDetailsForm.jsx'
import '../../styles/editPreviewDetails.scss'

function EditPreviewDetails({ formik, onCancel }) {
  const [initialValues] = useState({
    email: formik.values.email,
    cityState: formik.values.cityState,
    gender: formik.values.gender,
  })

  const previewHeader = {
    title: 'Additional Details',
    isEdit: true,
    onSave: () => {
      triggerFormLevelValidation(formik, () => {
        onCancel()
      })
    },
    onCancel: () => {
      const {
        values: {
          email, cityState, gender, ...restValues
        },
      } = formik

      formik.resetForm({
        email: initialValues.email,
        cityState: initialValues.cityState,
        gender: initialValues.gender,
        ...restValues,
      })
      onCancel()
    },
  }

  return (
    <div className="preview-edit-details">
      <PreviewHeader {...previewHeader} />
      <EditDetailsForm />
    </div>
  )
}

EditPreviewDetails.defaultProps = {}

EditPreviewDetails.propTypes = {
  formik: PropTypes.object,
  onCancel: PropTypes.func,
}

export default connect(EditPreviewDetails)
