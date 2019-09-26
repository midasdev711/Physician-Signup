import React from 'react'
// import PropTypes from 'prop-types'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import Typography from 'antd/es/typography'
import Button from 'antd/es/button'
import '../../styles/profilePreviewEducation.scss'

const { Title } = Typography

function ProfilePreviewEducation() {
  return (
    <div className="profile-preview-education">
      <Row gutter={48} type="flex" justify="space-between">
        <Col style={{ flex: 1 }}>
          <div>
            <Title level={4} className="profile-preview-education-title">
              Education
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
    </div>
  )
}

ProfilePreviewEducation.defaultProps = {}

ProfilePreviewEducation.propTypes = {}

export default ProfilePreviewEducation
