import React from 'react'
import PropTypes from 'prop-types'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import Form from 'antd/es/form'
import Input from 'antd/es/input'
import Radio from 'antd/es/radio'
import '../../styles/editDetailsForm.scss'

class EditDetailsForm extends React.Component {
  state = {}

  onSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values)
        this.props.onSubmit(values)
      }
    })
  }

  render() {
    // console.log('EditDetailsForm props', this.props)
    const { getFieldDecorator } = this.props.form

    return (
      <div className="preview-edit-details-form">
        <Form layout="vertical" onSubmit={this.onSubmit}>
          <Row>
            <Col xs={24} sm={10}>
              <Form.Item
                className="form-item-email"
                label="Email Address"
                validateStatus=""
              >
                {getFieldDecorator('email', {
                  rules: [
                    {
                      type: 'email',
                      message: 'This is not a valid email address',
                    },
                    {
                      required: true,
                      message: 'Please input your email',
                    },
                  ],
                })(<Input />)}
              </Form.Item>
              <Form.Item
                className="form-item-cityState"
                label="City / State"
                validateStatus=""
              >
                {getFieldDecorator('cityState', {
                  rules: [],
                })(<Input />)}
              </Form.Item>
            </Col>
            <Col xs={24} sm={14}>
              <div className="form-item-gender-container">
                <Form.Item
                  className="form-item-gender"
                  label="Gender"
                >
                  {getFieldDecorator('gender', { initialValue: 'male' })(
                    <Radio.Group buttonStyle="solid">
                      <Radio.Button value="female">Female</Radio.Button>
                      <Radio.Button value="male">Male</Radio.Button>
                    </Radio.Group>,
                  )}
                </Form.Item>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}

EditDetailsForm.propTypes = {
  form: PropTypes.shape({
    getFieldDecorator: PropTypes.func,
    validateFieldsAndScroll: PropTypes.func,
    getFieldValue: PropTypes.func,
    setFieldsValue: PropTypes.func,
  }),
  onSubmit: PropTypes.func,
}

export default Form.create({ name: 'editDetailsForm' })(EditDetailsForm)
