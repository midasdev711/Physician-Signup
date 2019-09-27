import React from 'react'
import PropTypes from 'prop-types'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import Typography from 'antd/es/typography'
import Button from 'antd/es/button'
import EditDetailsForm from './editDetailsForm.jsx'
import '../../styles/editPreviewDetails.scss'

const { Title } = Typography

function EditPreviewDetails({ onSave, onCancel }) {
  return (
    <div className="preview-edit-details">
      <Row gutter={24} type="flex" justify="space-between">
        <Col style={{ flex: 1 }}>
          <div style={{ borderBottom: '1px solid #D8D8D8' }}>
            <Title level={4} className="preview-edit-details-title">
              Additional Details
            </Title>
          </div>
        </Col>
        <Col>
          <div>
            <div className="preview-save-btn">
              <Button onClick={onSave}>
                Save
              </Button>
            </div>
            <div className="preview-cancel-btn">
              <Button onClick={onCancel}>
                Cancel
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <EditDetailsForm />
    </div>
  )
}

EditPreviewDetails.defaultProps = {}

EditPreviewDetails.propTypes = {
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
}

export default EditPreviewDetails
