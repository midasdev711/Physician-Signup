import React from 'react'
import PropTypes from 'prop-types'
import { ErrorMessage } from 'formik'
import Input from 'antd/es/input'

const CustomInputComponent = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors, isSubmitting }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
  <div>
    {
      props.type === 'password' ? (
        <Input.Password {...field} {...props} /* disabled={isSubmitting} */ />
      ) : (
        <Input type="text" {...field} {...props} /* disabled={isSubmitting} */ />
      )
    }
    <ErrorMessage {...field} />
  </div>
)

CustomInputComponent.propTypes = {
  filed: PropTypes.object,
  form: PropTypes.object,
}

export default CustomInputComponent
