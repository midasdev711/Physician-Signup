import React from 'react'
import PropTypes from 'prop-types'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
// import Icon from 'antd/es/icon'
import Typography from 'antd/es/typography'
import Button from 'antd/es/button'
import AvatarUploader from '../../partials/avatarUploader.jsx'
import '../../styles/preview.scss'

const { Title } = Typography

function Preview({ onEdit }) {
  const avatarUploaderProps = {
  }

  return (
    <div className="preview">
      <Row>
        <Col xs={24} sm={6}>
          <AvatarUploader {...avatarUploaderProps} />
        </Col>
        <Col xs={24} sm={18}>
          <Row type="flex" justify="space-between" className="preview-info">
            <Col>
              <Title level={4} className="preview-info-fullname">
                Ivan Pavlov
              </Title>
              <Title level={4} className="preview-info-phone">
                +123 456 789 1098
              </Title>
              <div className="preview-info-skills">
                <div className="preview-info-skills-item">
                  SPINAL CORD INJURY SPECIALIST
                </div>
                <div className="preview-info-skills-item">
                  OCCUPATIONAL MEDICINE SPECIALIST
                </div>
                <div className="preview-info-skills-item">
                  GENERAL MEDICINE
                </div>
              </div>
            </Col>
            <Col>
              <div className="preview-edit-btn">
                <Button icon="form" onClick={onEdit}>
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

Preview.defaultProps = {}

Preview.propTypes = {
  onEdit: PropTypes.func,
  onCancel: PropTypes.func,
}

export default Preview
