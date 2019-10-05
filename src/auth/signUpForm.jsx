import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect, Field, ErrorMessage } from 'formik'
import Button from 'antd/es/button'
import Typography from 'antd/es/typography'
import Select from 'antd/es/select'
import Input from 'antd/es/input'
import { triggerFormLevelValidation } from '../utils/formik.js'
import FieldLabel from '../partials/fieldLabel.jsx'
import CustomInputComponent from '../partials/formik/customInputComponent.jsx'
import '../styles/signUpForm.scss'

const { Paragraph } = Typography
const { Option } = Select

function SignUpForm({ history, formik }) {
  const signUp = () => {
    triggerFormLevelValidation(formik, async () => {
      history.push('/upload/medical-license')
    })
  }

  const prefixSelector = (
    <Field
      name="phonePrefix"
      render={({ field, form }) => (
        <Select
          {...field}
          style={{ width: 80 }}
          onChange={(value) => {
            form.setFieldValue('phonePrefix', value)
          }}
        >
          <Option value="234">+234</Option>
          <Option value="971">+971</Option>
          <Option value="65">+65</Option>
          <Option value="1">+1</Option>
          <Option value="91">+91</Option>
          <Option value="880">+880</Option>
          <Option value="93">+93</Option>
        </Select>
      )}
    />
  )

  return (
    <div className="sign-up-form">
      <FieldLabel label="Full Name">
        <Field
          name="name"
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
          name="phone"
          render={({ field }) => (
            <React.Fragment>
              <Input
                style={{ width: '100%' }}
                addonBefore={prefixSelector}
                {...field}
              />
              <ErrorMessage {...field} />
            </React.Fragment>
          )}
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
