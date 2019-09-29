import React from 'react'
import PropTypes from 'prop-types'
import Button from 'antd/es/button'

function AddBtn({ onAdd, onBack }) {
  return (
    <div>
      <Button onClick={onBack}>...</Button>
      <Button
        className="preview-edit-education-add-btn"
        icon="plus"
        onClick={onAdd}
      >
        Add
      </Button>
    </div>
  )
}

AddBtn.propTypes = {
  onAdd: PropTypes.func,
  onBack: PropTypes.func,
}

export default AddBtn
