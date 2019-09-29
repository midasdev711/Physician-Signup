import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'formik'
import PreviewHeader from '../../partials/previewHeader.jsx'
import EducationList from './educationList.jsx'
import '../../styles/editPreviewEducation.scss'

function EditPreviewEducation({ formik, onCancel }) {
  const previewHeader = {
    title: 'Education',
    isEdit: true,
    onSave: () => {
      onCancel()
    },
    onCancel: () => {
      formik.resetForm()
      onCancel()
    },
  }
  
  const educationListProps = {
    isEdit: true,
  }

  return (
    <div className="preview-edit-education">
      <PreviewHeader {...previewHeader} />
      <EducationList {...educationListProps} />
    </div>
  )
}

EditPreviewEducation.defaultProps = {}

EditPreviewEducation.propTypes = {
  fromik: PropTypes.object,
  onCancel: PropTypes.func,
}

export default connect(EditPreviewEducation)
