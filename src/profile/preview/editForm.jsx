import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
import Form from 'antd/es/form'
import Input from 'antd/es/input'
import Tag from 'antd/es/tag'
import Tooltip from 'antd/es/tooltip'
// import Select from 'antd/es/select'
// import Button from 'antd/es/button'
import Icon from 'antd/es/icon'

// const { Option } = Select

const tagStyle = {
  marginBottom: '8px',
  display: 'flex',
  alignItems: 'center',
  height: '32px',
  justifyContent: 'space-between',
  textTransform: 'uppercase',
}

const addSkillStyle = {
  background: '#fff',
  borderStyle: 'dashed',
  height: '32px',
  width: '81px',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  cursor: 'pointer',
}

class EditForm extends React.Component {
  state = {
    skills: ['Spinal cord injury specialist', 'Occupational medicine specialist', 'General medicine'],
    inputVisible: false,
  }

  saveInputRef = input => (this.input = input)

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus())
  }
  
  onRemoveTag = removedTag => {
    const skills = this.state.skills.filter(tag => tag !== removedTag)

    this.setState({ skills })
  }

  onInputConfirm = () => {
    const { form: { getFieldValue, setFieldsValue } } = this.props
    const inputValue = getFieldValue('skill')

    let { skills } = this.state

    if (inputValue && skills.indexOf(inputValue) === -1) {
      skills = [...skills, inputValue]
    }

    this.setState({
      skills,
      inputVisible: false,
    }, () => setFieldsValue({ skill: '' }))
  }

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
    // console.log('ProfileEditForm props', this.props)
    const { getFieldDecorator } = this.props.form
    const { inputVisible, skills } = this.state

    // const formItemLayout = {
    //   labelCol: {
    //     // xs: { span: 12 },
    //     // sm: { span: 12 },
    //   },
    //   wrapperCol: {
    //     // xs: { span: 24 },
    //     // sm: { span: 24 },
    //   },
    // }

    // const prefixSelector = getFieldDecorator('prefix', {
    //   initialValue: '+123 45',
    // })(
    //   <Select style={{ width: 100 }}>
    //     {/* <Option value="86">+86</Option>
    //     <Option value="87">+87</Option> */}
    //   </Select>,
    // )

    return (
      <div className="profile-edit-form">
        <Form layout="vertical" onSubmit={this.onSubmit}>
          <Form.Item
            style={{ marginBottom: 0 }}
            /* {...formItemLayout} */
            label="Full Name"
            validateStatus=""
          >
            {getFieldDecorator('fullName', {
              rules: [{
                required: true,
                message: 'Please input your Full Name!',
              }],
            })(
              <Input
              // size="small"
              // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              // placeholder="Full Name"
              />,
            )}
          </Form.Item>
          <Form.Item
            // style={{ marginBottom: 0 }}
            /* {...formItemLayout} */
            label="Phone Number"
            validateStatus=""
          >
            {getFieldDecorator('phone', {
              rules: [
                {
                  required: true,
                  message: 'Please provide your mobile number',
                },
              ],
            })(
              <Input
                // style={{ width: '100%' }}
                // size="small"
                type="number"
                // addonBefore={prefixSelector}
              />
            )}
          </Form.Item>
          <Form.Item
            style={{ margin: 0, padding: 0 }}
            /* {...formItemLayout} */
            label=""
            validateStatus=""
          >
            {getFieldDecorator('skill', {
              // rules: [],
            })(
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                  skills.map((tag) => {
                    const isLongTag = tag.length > 20

                    const tagElem = (
                      <Tag
                        style={tagStyle}
                        key={tag}
                        closable
                        onClose={() => this.onRemoveTag(tag)}
                      >
                        {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                      </Tag>
                    )

                    return isLongTag ? (
                      <Tooltip title={tag} key={tag}>
                        {tagElem}
                      </Tooltip>
                    ) : (
                      tagElem
                    )
                  })
                }
                {
                  inputVisible && (
                    <Input
                      ref={this.saveInputRef}
                      type="text"
                      // size="small"
                      style={{ width: 214 }}
                      onBlur={this.onInputConfirm}
                      onPressEnter={this.onInputConfirm}
                    />
                  )
                }
                {
                  !inputVisible && (
                    <Tag style={addSkillStyle} onClick={this.showInput}>
                      <Icon type="plus" /> Add Skill
                    </Tag>
                  )
                }
              </div>
            )}
          </Form.Item>
        </Form>
      </div>
    )
  }
}

EditForm.propTypes = {
  form: PropTypes.shape({
    getFieldDecorator: PropTypes.func,
    validateFieldsAndScroll: PropTypes.func,
    getFieldValue: PropTypes.func,
    setFieldsValue: PropTypes.func,
  }),
  onSubmit: PropTypes.func,
}

export default Form.create({ name: 'editForm' })(EditForm)
