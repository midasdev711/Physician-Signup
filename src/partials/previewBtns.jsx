import React from 'react'
import PropTypes from 'prop-types'
import Button from 'antd/es/button'
import '../styles/previewBtns.scss'

function PreviewBtns({ isEdit, onEdit, onSave, onCancel }) {
  return (
    <div className="preview-btns">
      {
        !isEdit ? (
          <div className="preview-edit-btn">
            <Button icon="form" onClick={onEdit}>
              Edit
            </Button>
          </div>
        ) : (
          <div className="preview-save-btn">
            <Button icon="form" onClick={onSave}>
              Save
            </Button>
          </div>
        )
      }
    </div>
  )
}

PreviewBtns.defaultProps = {
  isEdit: false,
}

PreviewBtns.propTypes = {
  isEdit: PropTypes.bool,
  onEdit: PropTypes.func,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
}

export default PreviewBtns
