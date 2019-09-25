import React from 'react'
import PropTypes from 'prop-types'
import Typography from 'antd/es/typography'
import Upload from 'antd/es/upload'
import Button from 'antd/es/button'
import Icon from 'antd/es/icon'
import '../styles/uploadSection.scss'

const { Title } = Typography

function UploadSection({
  uploadedFile, onRemove, uploadProps,
}) {
  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    // headers: {
    //   authorization: 'authorization-text',
    // }
    ...uploadProps,
  }

  return (
    <div className="upload-section">
      <div className="upload-section-img-wrapper">
        <div className={`upload-section-img-${uploadedFile.status}`} />
      </div>
      <Title level={4} className="upload-section-title">
        {
          uploadedFile.status === 'done' ? (
            <React.Fragment>
              {uploadedFile.name}
              <Button shape="circle" size="small" onClick={onRemove}>
                <Icon type="close" />
              </Button>
            </React.Fragment>
          ) : 'Medical License'
        }
      </Title>
      <div className="upload-section-upload-btn">
        <Upload {...props}>
          <Button icon="download">
            Upload
          </Button>
        </Upload>
      </div>
    </div>
  )
}

UploadSection.defaultProps = {
  uploadedFile: {
    status: 'default',
  },
  uploadProps: {},
}

UploadSection.propTypes = {
  uploadedFile: PropTypes.shape({
    name: PropTypes.string,
    status: PropTypes.string,
  }),
  onRemove: PropTypes.func,
  uploadProps: PropTypes.object,
}

export default UploadSection
