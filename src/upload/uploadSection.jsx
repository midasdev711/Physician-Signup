import React from 'react'
// import PropTypes from 'prop-types'
import Typography from 'antd/es/typography'
import Button from 'antd/es/button'
import '../styles/uploadSection.scss'

const { Title } = Typography

function UploadSection() {
  const statusClassName = 'upload-section-img-default'

  return (
    <div className="upload-section">
      <div className="upload-section-img-wrapper">
        <div className={statusClassName} />
      </div>
      <Title level={4} className="upload-section-title">
        Medical License
      </Title>
      <div className="upload-section-upload-btn">
        <Button icon="download">
          Upload
        </Button>
      </div>
    </div>
  )
}

UploadSection.propTypes = {}

export default UploadSection
