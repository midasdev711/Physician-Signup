import React from 'react'
import PropTypes from 'prop-types'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import Typography from 'antd/es/typography'
import Button from 'antd/es/button'
import '../../styles/previewDetails.scss'

const { Title } = Typography

function PreviewDetails({ onEdit }) {
  return (
    <div className="preview-details">
      <Row gutter={24} type="flex" justify="space-between">
        <Col style={{ flex: 1 }}>
          <div style={{ borderBottom: '1px solid #D8D8D8' }}>
            <Title level={4} className="preview-details-title">
              Additional Details
            </Title>
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
      <div className="preview-details-email">
        <div className="preview-details-label">
          Email Address
        </div>
        <div className="preview-details-value">
          ivan.pavlov@gmail.com
        </div>
      </div>
      <Row>
        <Col xs={24} sm={12}>
          <div className="preview-details-city">
            <div className="preview-details-label">
              City/State
            </div>
            <div className="preview-details-value">
              Bangalore
            </div>
          </div>
        </Col>
        <Col xs={24} sm={12}>
          <div className="preview-details-gender">
            <div className="preview-details-label">
              Gender
            </div>
            <div className="preview-details-value">
              Male
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

PreviewDetails.defaultProps = {}

PreviewDetails.propTypes = {
  onEdit: PropTypes.func,
}

export default PreviewDetails
