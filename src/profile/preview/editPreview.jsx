import React from 'react'
import PropTypes from 'prop-types'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
// import Typography from 'antd/es/typography'
import Button from 'antd/es/button'
import AvatarUploader from '../../partials/avatarUploader.jsx'
import ProfileEditForm from './editForm.jsx'
import '../../styles/editPreview.scss'

// const { Title } = Typography

function EditPreview({ onSave, onCancel }) {
  const avatarUploaderProps = {
    isEdit: true,
    onSave,
  }
  
  const profileEditForm = {
    onSubmit: () => {},
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
              <div className="preview-save-btn">
                <Button onClick={onSave}>
                  Save
                </Button>
              </div>
              <div className="preview-cancel-btn">
                <Button onClick={onCancel}>
                  Cancel
                </Button>
              </div>
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
