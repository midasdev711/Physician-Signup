import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'formik'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import PreviewHeader from '../../partials/previewHeader.jsx'
import '../../styles/previewDetails.scss'

function PreviewDetails({ formik: { values }, onEdit }) {
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
          {values.email}
        </div>
      </div>
      <Row>
        <Col xs={24} sm={12}>
          <div className="preview-details-city">
            <div className="preview-details-label">
              City/State
            </div>
            <div className="preview-details-value">
              {values.cityState}
            </div>
          </div>
        </Col>
        <Col xs={24} sm={12}>
          <div className="preview-details-gender">
            <div className="preview-details-label">
              Gender
            </div>
            <div className="preview-details-value">
              {values.gender}
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
  formik: PropTypes.object,
}

export default connect(PreviewDetails)
