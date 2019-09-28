import React from 'react'
import PropTypes from 'prop-types'
import Form from 'antd/es/form'
import '../styles/fieldLabel.scss'

function FieldLabel({ children, colon = false, rootStyle, maxWidth, ...restProps }) {

  return (
    <div className="field-label">
      <Form.Item colon={colon} {...restProps} style={{ ...rootStyle, maxWidth }}>
        {children}
      </Form.Item>
    </div>
  )
}

FieldLabel.defaulProps = {
  label: 'Label',
  colon: false,
  rootStyle: {},
  maxWidth: '214px',
}

FieldLabel.propTypes = {
  label: PropTypes.string,
  children: PropTypes.element,
  rootStyle: PropTypes.object,
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default FieldLabel
