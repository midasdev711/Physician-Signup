import React from 'react'
import PropTypes from 'prop-types'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import Typography from 'antd/es/typography'
import PreviewBtns from './previewBtns.jsx'
import '../styles/previewHeader.scss'

const { Title } = Typography

function PreviewHeader({ title, isEdit, onEdit, onSave, onCancel }) {
  const previewBtns = {
    isEdit,
    onEdit,
    onSave,
    onCancel,
  }

  return (
    <div className="preview-header">
      <Row gutter={24} type="flex" justify="space-between">
        <Col style={{ flex: 1 }}>
          <div style={{ borderBottom: '1px solid #D8D8D8' }}>
            <Title level={4} className="preview-header-title">
              {title}
            </Title>
          </div>
        </Col>
        <Col>
          <PreviewBtns {...previewBtns} />
        </Col>
      </Row>
    </div>
  )
}

PreviewHeader.defaultProps = {
  title: 'Title',
  isEdit: false,
}

PreviewHeader.propTypes = {
  title: PropTypes.string,
  isEdit: PropTypes.bool,
  onEdit: PropTypes.func,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
}

export default PreviewHeader
