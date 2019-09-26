import React from 'react'
import PropTypes from 'prop-types'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
// import Typography from 'antd/es/typography'
import Button from 'antd/es/button'
import AvatarUploader from '../../partials/avatarUploader.jsx'
import ProfileEditForm from './profileEditForm.jsx'
import '../../styles/profileEditPreview.scss'

// const { Title } = Typography

function ProfileEditPreview({ onSave }) {
  const avatarUploaderProps = {
    isEdit: true,
    onSave,
  }
  
  const profileEditForm = {
    onSubmit: () => {},
  }

  return (
    <div className="profile-preview-edit">
      <Row>
        <Col xs={24} sm={6}>
          <AvatarUploader {...avatarUploaderProps} />
        </Col>
        <Col xs={24} sm={18}>
          <Row gutter={24} className="profile-preview-edit-info">
            <Col>
              <ProfileEditForm {...profileEditForm} />
            </Col>
            <Col>
              <div className="profile-preview-edit-btn">
                <Button onClick={onSave}>
                  Save
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

ProfileEditPreview.defaultProps = {}

ProfileEditPreview.propTypes = {
  onSave: PropTypes.func,
}

export default ProfileEditPreview
