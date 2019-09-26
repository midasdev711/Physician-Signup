import React from 'react'
// import PropTypes from 'prop-types'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import Typography from 'antd/es/typography'
import Button from 'antd/es/button'
import '../../styles/profilePreviewDetails.scss'

const { Title } = Typography

function ProfilePreviewDetails() {
  return (
    <div className="profile-preview-details">
      <Row gutter={48} type="flex" justify="space-between">
        <Col style={{ flex: 1 }}>
          <div style={{ borderBottom: '1px solid #D8D8D8' }}>
            <Title level={4} className="profile-preview-details-title">
              Additional Details
            </Title>
          </div>
        </Col>
        <Col>
          <div className="profile-preview-btn" style={{ paddingRight: '8px' }}>
            <Button icon="form">
              Edit
            </Button>
          </div>
        </Col>
      </Row>
      <div className="profile-preview-details-email">
        <div className="profile-preview-details-label">
          Email Address
        </div>
        <div className="profile-preview-details-value">
          ivan.pavlov@gmail.com
        </div>
      </div>
      <Row>
        <Col xs={24} sm={12}>
          <div className="profile-preview-details-city">
            <div className="profile-preview-details-label">
              City/State
            </div>
            <div className="profile-preview-details-value">
              Bangalore
            </div>
          </div>
        </Col>
        <Col xs={24} sm={12}>
          <div className="profile-preview-details-gender">
            <div className="profile-preview-details-label">
              Gender
            </div>
            <div className="profile-preview-details-value">
              Male
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

ProfilePreviewDetails.defaultProps = {}

ProfilePreviewDetails.propTypes = {}

export default ProfilePreviewDetails
