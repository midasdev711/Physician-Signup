import React from 'react'
import PropTypes from 'prop-types'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import PreviewHeader from '../../partials/previewHeader.jsx'
import '../../styles/previewDetails.scss'

function PreviewDetails({ onEdit }) {
  const previewHeader = {
    title: 'Additional Details',
    isEdit: false,
    onEdit,
  }

  return (
    <div className="preview-details">
      <PreviewHeader {...previewHeader} />
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
