import React from 'react'
import PropTypes from 'prop-types'
import Button from 'antd/es/button'
import PreviewHeader from '../../partials/previewHeader.jsx'
import EducationList from './educationList.jsx'
import '../../styles/editPreviewEducation.scss'

function EditPreviewEducation({ onSave, onCancel }) {
  const previewHeader = {
    title: 'Education',
    isEdit: true,
    onSave,
    onCancel,
  }
  
  const educationListProps = {
    isEdit: true,
  }

  return (
    <div className="preview-edit-education">
      <PreviewHeader {...previewHeader} />
      <div>
        <EducationList {...educationListProps} />
      </div>
      <div style={{ margin: '24px 0', border: '0.5px solid #D8D8D8', maxWidth: '400px' }} />
      <div>
        <Button>
          ...
        </Button>
        <Button icon="plus" className="preview-edit-education-add-btn">
          Add
        </Button>
      </div>
    </div>
  )
}

EditPreviewEducation.defaultProps = {}

EditPreviewEducation.propTypes = {
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
}

export default EditPreviewEducation
