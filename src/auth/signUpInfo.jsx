import React from 'react'
// import PropTypes from 'prop-types'
import Typography from 'antd/es/typography'
import '../styles/signUpInfo.scss'

const { Title } = Typography

function SignUpInfo() {
  return (
    <div className="sign-up-info">
      <div className="sign-up-info-img-wrapper">
        <div className="sign-up-info-img" />
      </div>
      <Typography>
        <Title level={4} className="sign-up-info-title">
          <strong>
Welcome to AlemHealth for Clinicians </strong><br/><br/>
          <strong>{`<Facility Name>`}</strong> has added you as a referring physician.
          Please claim your account to access the medical records of patients you've referred to them.
        </Title>
      </Typography>
    </div>
  )
}

SignUpInfo.propTypes = {}

export default SignUpInfo
