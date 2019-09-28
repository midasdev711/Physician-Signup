import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Field, FieldArray } from 'formik'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import Input from 'antd/es/input'
import Tag from 'antd/es/tag'
import Tooltip from 'antd/es/tooltip'
import Icon from 'antd/es/icon'
import FieldLabel from '../../partials/fieldLabel.jsx'
import CustomInputComponent from '../../partials/formik/customInputComponent.jsx'

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
  const [newSkill, setNewSkill] = useState('')
  const [inputVisible, setInputVisible] = useState(false)

  function showInput() {
    setInputVisible(true)
  }

  function onChange(e) {
    const value = e.target.value
    setNewSkill(value)
  }

  function onInputConfirm(skills, push) {

    if (newSkill && skills.indexOf(newSkill) === -1) {
      push(newSkill)
    }

    setInputVisible(false)
    setNewSkill('')
  }

  return (
    <div className="profile-edit-form">
      <Row gutter={24}>
        <Col xs={24} sm={12}>
          <FieldLabel label="Full Name">
            <Field
              name="fullName"
              component={CustomInputComponent}
            />
          </FieldLabel>
        </Col>
        <Col xs={24} sm={12}>
          <FieldLabel label="Phone Number">
            <Field
              name="phone"
              component={CustomInputComponent}
            />
          </FieldLabel>
        </Col>
      </Row>
      <div>
        <FieldArray
          name="skills"
          render={({ form: { values: { skills } }, remove, push }) => (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {
                skills && skills.length > 0 && skills.map((skill, index) => {
                  const isLongTag = skill.length > 20

                  const tagElem = (
                    <Tag
                      style={styles.tag}
                      key={index}
                      closable
                      onClose={() => remove(index)}
                    >
                      {isLongTag ? `${skill.slice(0, 20)}...` : skill}
                    </Tag>
                  )

                  return isLongTag ? (
                    <Tooltip title={skill} key={index}>
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
                    type="text"
                    autoFocus
                    style={{ width: 214 }}
                    onChange={onChange}
                    onBlur={() => onInputConfirm(skills, push)}
                    onPressEnter={() => onInputConfirm(skills, push)}
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
          )}
        />
      </div>
    </div>
  )
}

EditForm.propTypes = {
  onSubmit: PropTypes.func,
}

export default EditForm
