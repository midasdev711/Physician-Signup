import React from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'formik'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import Typography from 'antd/es/typography'
import '../styles/signUpBoxInfo.scss'

const { Title } = Typography

function SignUpBoxInfo({ formik }) {
  return (
    <div className="sign-up-box-info">
      <Row gutter={{ sm: 24 }}>
        <Col xs={24} sm={12} md={24}>
          <div className="sign-up-box-info-img-wrapper">
            <div className="sign-up-box-info-img" />
          </div>
        </Col>
        <Col xs={24} sm={12} md={24}>
          <Typography>
            <Title level={4} className="sign-up-box-info-title">
              <strong>Welcome to AlemHealth </strong><br /><br />
              <strong>{formik.values.facilityName}</strong> has added you to the care team of a patient to view their diagnostic images and reports.
              Please claim your account to access the medical records of patient.
            </Title>
          </Typography>
        </Col>
      </Row>
    </div>
  )
}

SignUpBoxInfo.defaultProps = {}

SignUpBoxInfo.propTypes = {}

export default connect(SignUpBoxInfo)
