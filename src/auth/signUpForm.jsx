import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Form from 'antd/es/form'
import Input from 'antd/es/input'
// import Select from 'antd/es/select'
import Button from 'antd/es/button'
// import Icon from 'antd/es/icon'
import Typography from 'antd/es/typography'
import '../styles/signUpForm.scss'

const { Paragraph } = Typography

// const { Option } = Select

class SignUpForm extends React.Component {
  state = {}

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values)
        this.props.onSubmit(values)
      }
    })
  }

  validatePassword = (rule, value, callback) => {
    if (value) {
      if (!/[a-z]/g.test(value)) { // Validate lowercase letters
        callback('Your Password should have at least one lowercase letter!')
      } else if (!/[A-Z]/g.test(value)) { // Validate capital letters
        callback('Your Password should have at least one uppercase letter!')
      } else if (!/[0-9]/g.test(value)) { // Validate numbers
        callback('Your Password should have at least one number!')
      } else if (!(value.length >= 8)) { // Validate length
        callback('Your Password should have at least eight characters!')
      }
    }

    callback()
  }

  render() {
    // console.log('signUpForm props', this.props)
    const { getFieldDecorator } = this.props.form

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
        },
      },
    }

    // const prefixSelector = getFieldDecorator('prefix', {
    //   initialValue: '+123 45',
    // })(
    //   <Select style={{ width: 100 }}>
    //     {/* <Option value="86">+86</Option>
    //     <Option value="87">+87</Option> */}
    //   </Select>,
    // )

    return (
      <div className="sign-up-form">
        <Form layout="vertical" /* {...formItemLayout} */ onSubmit={this.handleSubmit}>
          <Form.Item {...formItemLayout} label="Full Name" validateStatus="">
            {getFieldDecorator('fullName', {
              rules: [{ required: true, message: 'Please input your Full Name!' }],
            })(
              <Input
              // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              // placeholder="Full Name"
              />,
            )}
          </Form.Item>
          <Form.Item label="Email Address" validateStatus="">
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid Email!',
                },
                {
                  required: true,
                  message: 'Please input your Email!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="Phone Number" validateStatus="">
            {getFieldDecorator('phone', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Phone Number!',
                },
              ],
            })(
              <Input
                // style={{ width: '100%' }}
                type="number"
              // addonBefore={prefixSelector}
              />
            )}
          </Form.Item>
          <Form.Item {...formItemLayout} label="Password" hasFeedback validateStatus="">
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Password!',
                },
                {
                  validator: this.validatePassword,
                },
              ],
            })(
              <Input.Password
              // prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              // placeholder="Enter a password"
              />
            )}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" className="sign-up-form-submit-btn">
              Claim Your Account
          </Button>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Paragraph className="sign-up-form-terms-conditions">
              By clicking "Claim Your Account", I agree to <br />
              <Link to="/terms-conditions">Terms {'&'} Conditions</Link> of signing up.
            </Paragraph>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

SignUpForm.propTypes = {
  form: PropTypes.shape({
    getFieldDecorator: PropTypes.func,
    validateFieldsAndScroll: PropTypes.func,
  }),
  onSubmit: PropTypes.func,
}

export default Form.create({ name: 'signUp' })(SignUpForm)
