import React from 'react'
// import PropTypes from 'prop-types'
import Typography from 'antd/es/typography'
import '../styles/uploadBoxInfo.scss'

const { Title } = Typography

function UploadBoxInfo() {
  return (
    <div className="upload-box-info">
      <div className="upload-box-info-img-wrapper">
        <div className="upload-box-info-img" />
      </div>
      <Typography>
        <Title level={4} className="upload-box-info-title">
          Your account is currently <strong>unverified</strong>, so you won't be
          visible to other facilities or patients on our platform.
          For verfication, please provide us with a copy of your medical license.
        </Title>
      </Typography>
    </div>
  )
}

UploadBoxInfo.defaultProps = {}

UploadBoxInfo.propTypes = {}

export default UploadBoxInfo
