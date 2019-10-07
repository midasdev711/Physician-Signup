import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AutoComplete from 'antd/es/auto-complete'
import Input from 'antd/es/input'

function InputAutoComplete({
  rootStyle, autoFocus, dataSource: data, onChange, onInputConfirm
}) {
  const [dataSource] = useState([...data])

  return (
    <AutoComplete
      style={rootStyle}
      autoFocus={autoFocus}
      // placeholder=""
      dataSource={dataSource}
      onChange={onChange}
      onBlur={onInputConfirm}
      filterOption={(inputValue, option) => (
        option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      )}
    >
      <Input type="text" onPressEnter={onInputConfirm} />
    </AutoComplete>
  )
}

InputAutoComplete.defaultProps = {
  rootStyle: {},
  dataSource: [],
  autoFocus: true,
}

InputAutoComplete.propTypes = {
  rootStyle: PropTypes.object,
  autoFocus: PropTypes.bool,
  dataSource: PropTypes.array,
  onChange: PropTypes.func,
  onInputConfirm: PropTypes.func,
}

export default InputAutoComplete
