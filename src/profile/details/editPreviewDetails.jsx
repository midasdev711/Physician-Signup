import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'formik'
import { triggerFormLevelValidation } from '../../utils/formik.js'
import PreviewHeader from '../../partials/previewHeader.jsx'
import EditDetailsForm from './editDetailsForm.jsx'
import '../../styles/editPreviewDetails.scss'

function EditPreviewDetails({ formik, onCancel }) {
  const previewHeader = {
    title: 'Additional Details',
    isEdit: true,
    onSave: () => {
      triggerFormLevelValidation(formik, () => {
        onCancel()
      })
    },
    onCancel: () => {
      formik.resetForm()
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
