import React from 'react'
// import PropTypes from 'prop-types'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import StepsWrapper from '../partials/stepsWrapper.jsx'
import SignUpBoxInfo from './signUpBoxInfo.jsx'
import SignUpForm from './signUpForm.jsx'
import '../styles/signUp.scss'

function SignUp() {
  return (
    <div className="sign-up">
      <StepsWrapper current={0}>
        <Row>
          <Col xs={24} sm={24} md={12} className="sign-up-box-info-col">
            <SignUpBoxInfo />
          </Col>
          <Col xs={24} sm={24} md={12} className="sign-up-form-col">
            <SignUpForm />
          </Col>
        </Row>
      </StepsWrapper>
    </div>
  )
}

SignUp.propTypes = {}

export default SignUp
