import React from 'react'
import PropTypes from 'prop-types'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import PreviewBtns from '../../partials/previewBtns.jsx'
import AvatarUploader from '../../partials/avatarUploader.jsx'
import ProfileEditForm from './editForm.jsx'
import '../../styles/editPreview.scss'

function EditPreview({ onSave, onCancel }) {
  const avatarUploaderProps = {
    isEdit: true,
    onSave,
  }
  
  const profileEditForm = {
    onSubmit: () => {},
  }
  
  const previewBtns = {
    isEdit: true,
    onSave,
    onCancel,
  }

  return (
    <div className="preview-edit">
      <Row>
        <Col xs={24} sm={6}>
          <AvatarUploader {...avatarUploaderProps} />
        </Col>
        <Col xs={24} sm={18}>
          <Row gutter={24} className="preview-edit-info">
            <Col>
              <ProfileEditForm {...profileEditForm} />
            </Col>
            <Col>
              <PreviewBtns {...previewBtns} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

EditPreview.defaultProps = {}

EditPreview.propTypes = {
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
}

export default EditPreview
