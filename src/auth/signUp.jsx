import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import StepsWrapper from '../partials/stepsWrapper.jsx'
import SignUpBoxInfo from './signUpBoxInfo.jsx'
import SignUpForm from './signUpForm.jsx'

function SignUp({ history }) {
  function signUp(values) {
    console.log('signUp() values', values)
    history.push('/upload/medical-license')
  }

  const signUpFormProps = {
    onSubmit: signUp,
  }

  return (
    <div className="sign-up">
      <StepsWrapper current={0}>
        <Row>
          <Col xs={24} sm={24} md={12}>
            <SignUpBoxInfo />
          </Col>
          <Col xs={24} sm={24} md={12}>
            <SignUpForm {...signUpFormProps} />
          </Col>
        </Row>
      </StepsWrapper>
    </div>
  )
}

SignUp.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}

export default withRouter(SignUp)
