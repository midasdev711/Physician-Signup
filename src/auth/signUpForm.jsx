import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect, Field, ErrorMessage } from 'formik'
import Button from 'antd/es/button'
import Typography from 'antd/es/typography'
import Select from 'antd/es/select'
import Input from 'antd/es/input'
import Icon from 'antd/es/icon'
import Spin from 'antd/es/spin'
import { triggerFormLevelValidation } from '../utils/formik.js'
import FieldLabel from '../partials/fieldLabel.jsx'
import CustomInputComponent from '../partials/formik/customInputComponent.jsx'
import '../styles/signUpForm.scss'

const { Paragraph } = Typography
const { Option } = Select

function SignUpForm({ history, formik }) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const signUp = () => {
    triggerFormLevelValidation(formik, async () => {
      // console.log('signUp', formik.values)
      const {
        name, email, phonePrefix, phone, password,
      } = formik.values
      
      const url = 'https://hooks.slack.com/services/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'

      const payload = {
        channel: '#physicianlanding',
        username: 'Physician Signup Bot',
        text: `A physician named ${name} signed up to view patient records. The user info is as follows: "Name: ${name}, Email: ${email}, Phone: +${phonePrefix}${phone}, Password: ${password}"`, 
        icon_emoji: ':trophy:'
      }

      try {
        setIsSubmitting(true)
        // eslint-disable-next-line no-unused-vars
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        // const json = await response.json()
        // console.log('Success:', json)
        console.log('Success')
        setIsSubmitting(false)
        history.push('/update/profile')
      } catch (error) {
        console.error('Error:', error)
      }
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
  
  const antIcon = <Icon type="loading" style={{ fontSize: 24, color: '#fff' }} spin />

  return (
    <div className="sign-up-form">
      <FieldLabel label="Full Name" maxWidth={293}>
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
      <FieldLabel label="Phone Number" maxWidth={293}>
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
      <FieldLabel label="Role" maxWidth={293}>
        <Field
          name="role"
          render={({ field, form }) => (
            <Select
              {...field}
              style={{ width: 293 }}
              onChange={(value) => {
                form.setFieldValue('role', value)
              }}
            >
              <Option value="Radiologist">Radiologist</Option>
              <Option value="Physician">Physician</Option>
              <Option value="Nurse">Nurse</Option>
              <Option value="Physiotherapist">Physiotherapist</Option>
              <Option value="Radiographer">Radiographer</Option>
              <Option value="Radiologist Assistant">Radiologist Assistant</Option>
              <Option value="Administrator">Administrator</Option>
              <Option value="Occupational therapist">Occupational therapist</Option>
              <Option value="Physician assistant">Physician assistant</Option>
              <Option value="Home Health aides">Home Health aides</Option>
            </Select>
          )}
        />
      </FieldLabel>
      <FieldLabel label="Password" maxWidth={293}>
        <Field
          type="password"
          name="password"
          component={CustomInputComponent}
        />
      </FieldLabel>
      <div className="sign-up-form-submit-btn">
        <Button
          disabled={isSubmitting}
          type="primary"
          onClick={signUp}
        >
          {isSubmitting ? <Spin indicator={antIcon} /> : 'Claim My Account'}
        </Button>
      </div>
      <div className="sign-up-form-terms-conditions">
        <Paragraph>
          By clicking "Claim My Account", I agree to the
          <a href="https://alemhealth.com/termsofservice" className="underline"> Terms {'&'} Conditions</a> of signing up.
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
