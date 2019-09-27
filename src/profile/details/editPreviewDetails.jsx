import React from 'react'
import PropTypes from 'prop-types'
import PreviewHeader from '../../partials/previewHeader.jsx'
import EditDetailsForm from './editDetailsForm.jsx'
import '../../styles/editPreviewDetails.scss'

function EditPreviewDetails({ onSave, onCancel }) {
  const previewHeader = {
    title: 'Additional Details',
    isEdit: true,
    onSave,
    onCancel,
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
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
}

export default EditPreviewDetails
