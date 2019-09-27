import React from 'react'
// import PropTypes from 'prop-types'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import Typography from 'antd/es/typography'
import Button from 'antd/es/button'
import '../../styles/previewEducation.scss'

const { Title } = Typography

function PreviewEducation() {
  return (
    <div className="preview-education">
      <Row gutter={24} type="flex" justify="space-between">
        <Col style={{ flex: 1 }}>
          <div>
            <Title level={4} className="preview-education-title">
              Education
            </Title>
          </div>
        </Col>
        <Col>
          <div className="preview-edit-btn">
            <Button icon="form">
              Edit
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  )
}

PreviewEducation.defaultProps = {}

PreviewEducation.propTypes = {}

export default PreviewEducation
