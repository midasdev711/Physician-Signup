import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Field, FieldArray, ErrorMessage } from 'formik'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import Input from 'antd/es/input'
import Tag from 'antd/es/tag'
import Tooltip from 'antd/es/tooltip'
import Icon from 'antd/es/icon'
import Select from 'antd/es/select'
import FieldLabel from '../../partials/fieldLabel.jsx'
import CustomInputComponent from '../../partials/formik/customInputComponent.jsx'
import InputAutoComplete from '../../partials/inputAutoComplete.jsx'
import { mockSpecialities } from './mockSpecialities.js'

const { Option } = Select

const style = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '32px',
}

const styles = {
  tag: {
    ...style,
    marginBottom: '8px',
    textTransform: 'uppercase',
  },
  addSkill: {
    ...style,
    background: '#fff',
    borderStyle: 'dashed',
    width: '81px',
    cursor: 'pointer',
  },
}

function EditForm() {
  const [inputVisible, setInputVisible] = useState(false)

  function showInput() {
    setInputVisible(true)
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
    <div className="profile-edit-form">
      <Row gutter={24}>
        <Col xs={24} sm={12}>
          <FieldLabel label="Full Name">
            <Field
              name="name"
              component={CustomInputComponent}
            />
          </FieldLabel>
        </Col>
        <Col xs={24} sm={12}>
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
        </Col>
      </Row>
      <div>
        <FieldArray
          name="specialities"
          render={({
            form: {
              values: { specialities, speciality },
              setFieldValue,
            },
            remove, push,
          }) => {
            function onChange(value) {
              setFieldValue('speciality.name', value)
            }

            function onInputConfirm() {
              if (speciality.name && specialities.indexOf(speciality) === -1) {
                push({ ...speciality })
              }
          
              setInputVisible(false)
              setFieldValue('speciality.name', '')
            }

            return (
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                  specialities && specialities.length > 0 && specialities.map(({ name }, index) => {
                    const isLongTag = name.length > 20
  
                    const tagElem = (
                      <Tag
                        style={styles.tag}
                        key={index}
                        closable
                        onClose={() => remove(index)}
                      >
                        {isLongTag ? `${name.slice(0, 20)}...` : name}
                      </Tag>
                    )
  
                    return isLongTag ? (
                      <Tooltip title={name} key={index}>
                        {tagElem}
                      </Tooltip>
                    ) : (
                      tagElem
                    )
                  })
                }
                {
                  inputVisible && (
                    <InputAutoComplete
                      rootStyle={{ width: 214 }}
                      dataSource={mockSpecialities}
                      onChange={onChange}
                      onInputConfirm={onInputConfirm}
                    />
                  )
                }
                {
                  !inputVisible && (
                    <Tag style={styles.addSkill} onClick={showInput}>
                      <Icon type="plus" /> Add Skill
                    </Tag>
                  )
                }
              </div>
            )
          }}
        />
      </div>
    </div>
  )
}

EditForm.propTypes = {
  onSubmit: PropTypes.func,
}

export default EditForm
