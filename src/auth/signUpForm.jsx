import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect, Field } from 'formik'
import Button from 'antd/es/button'
import Typography from 'antd/es/typography'
import FieldLabel from '../partials/fieldLabel.jsx'
import CustomInputComponent from '../partials/formik/customInputComponent.jsx'
import '../styles/signUpForm.scss'

const { Paragraph } = Typography

function SignUpForm({ history, formik }) {

  function signUp() {
    formik.validateForm().then((errors) => {
      const errorKeys = Object.keys(errors)

      if (errorKeys.length > 0) {
        const touched = errorKeys.reduce((acc, key) => {
          acc[key] = !!errors[key]
          return acc
        }, {})
        formik.setTouched(touched)
      } else {
        history.push('/upload/medical-license')
      }
    })
  }

  return (
    <div className="sign-up-form">
      <FieldLabel label="Full Name">
        <Field
          name="fullName"
          component={CustomInputComponent}
        />
      </FieldLabel>
      <FieldLabel label="Email Address" maxWidth={293}>
        <Field
          name="email"
          component={CustomInputComponent}
        />
      </FieldLabel>
      <FieldLabel label="Phone Number">
        <Field
          type="number"
          name="phone"
          component={CustomInputComponent}
        />
      </FieldLabel>
      <FieldLabel label="Password">
        <Field
          type="password"
          name="password"
          component={CustomInputComponent}
        />
      </FieldLabel>
      <div className="sign-up-form-submit-btn">
        <Button type="primary" onClick={signUp}>
          Claim My Account
        </Button>
      </div>
      <div className="sign-up-form-terms-conditions">
        <Paragraph>
          By clicking "Claim My Account", I agree to the 
          <a href="https://alemhealth.com/termsofservice"> Terms {'&'} Conditions</a> of signing up.
        </Paragraph>
      </div>
    </div>
  )
}

SignUpForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  formik: PropTypes.object,
}

export default connect(withRouter(SignUpForm))
