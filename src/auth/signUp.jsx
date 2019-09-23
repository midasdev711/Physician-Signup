import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import SignUpInfo from './signUpInfo.jsx'
import SignUpForm from './signUpForm.jsx'
import { StepContext } from '../context/step.js'
import '../styles/signUp.scss'

function SignUp({ history }) {
  const setStep = useContext(StepContext)

  function signUp(values) {
    console.log('signUp() values', values)
    history.push('/upload/medical-license')
    setStep(1);
  }

  const signUpFormProps = {
    onSubmit: signUp,
  }

  return (
    <div className="sign-up">
      <Row gutter={103}>
        <Col xs={24} sm={24} md={12}>
          <SignUpInfo />
        </Col>
        <Col xs={24} sm={24} md={12}>
          <SignUpForm {...signUpFormProps} />
        </Col>
      </Row>
    </div>
  )
}

SignUp.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}

export default withRouter(SignUp)
