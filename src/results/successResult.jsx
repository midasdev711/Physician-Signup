import React from 'react'
// import PropTypes from 'prop-types'
// import { withRouter } from 'react-router-dom'
import Typography from 'antd/es/typography'
import Button from 'antd/es/button'
import '../styles/successResult.scss'

const { Title, Paragraph } = Typography

function SuccessResult() {
  return (
    <div className="success-result">
      <div className="success-img-wrapper">
        <div className="success-img" />
      </div>
      <Title level={4} className="success-result-title">
        Account created Successfully!
      </Title>
      <Paragraph className="success-result-description">
        We'll send you an update as soon as you're verified!
      </Paragraph>
      <div className="success-result-btn">
        <Button>
          Sign In to AlemHealth Connect
        </Button>
      </div>
    </div>
  )
}

SuccessResult.propTypes = {
}

export default SuccessResult
