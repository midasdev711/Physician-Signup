import React from 'react'
// import PropTypes from 'prop-types'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import Icon from 'antd/es/icon'
import Typography from 'antd/es/typography'
import Button from 'antd/es/button'
import '../styles/profilePreview.scss'

const { Title } = Typography

function ProfilePreview() {
  return (
    <div className="profile-preview">
      <Row gutter={24}>
        <Col xs={24} sm={8}>
          <div className="profile-preview-avatar">
            <Icon type="camera" />
            <Title level={4}>
              Add Photo
            </Title>
          </div>
        </Col>
        <Col xs={24} sm={16}>
          <Row type="flex" justify="space-between" className="profile-preview-info">
            <Col>
              <Title level={4} className="profile-preview-info-fullname">
                Ivan Pavlov
              </Title>
              <Title level={4} className="profile-preview-info-phone">
                +123 456 789 1098
              </Title>
              <div className="profile-preview-info-skills">
                <div className="profile-preview-info-skills-item">
                  SPINAL CORD INJURY SPECIALIST
                </div>
                <div className="profile-preview-info-skills-item">
                  OCCUPATIONAL MEDICINE SPECIALIST
                </div>
                <div className="profile-preview-info-skills-item">
                  GENERAL MEDICINE
                </div>
              </div>
            </Col>
            <Col>
              <div className="profile-preview-edit-btn">
                <Button icon="form">
                  Edit
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

ProfilePreview.defaultProps = {}

ProfilePreview.propTypes = {}

export default ProfilePreview
