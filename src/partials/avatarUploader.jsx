import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Typography from 'antd/es/typography'
import Icon from 'antd/es/icon'
import Upload from 'antd/es/upload'
import message from 'antd/es/message'
import '../styles/avatarUploader.scss'

const { Title } = Typography

function getBase64(img, callback) {
  const reader = new FileReader()

  reader.addEventListener('load', () => callback(reader.result))

  reader.readAsDataURL(img)
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'

  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!')
    return false
  }

  const isLt2M = file.size / 1024 / 1024 < 2

  if (!isLt2M) {
    message.error('Image must be smaller than 2MB!')
  }

  return isJpgOrPng && isLt2M
}

function AvatarUploader({
  isEdit, onSave, iconType, label,
}) {
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState('')

  function onChange(info) {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return
    }

    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        setLoading(false)
        setImageUrl(imageUrl)
      })
    }
  }

  const uploadButton = (
    <div>
      <Icon type={loading ? 'loading' : iconType} />
      <div className="ant-upload-text">{label}</div>
    </div>
  )

  const uploadProps = {
    name: 'avatar',
    listType: 'picture-card',
    className: `avatar-uploader edit-mode ${imageUrl ? 'hasImg' : ''}`,
    showUploadList: false,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    beforeUpload,
    onChange,
  }

  if (!isEdit) {
    return (
      <div className="avatar-uploader preview-mode">
        <Icon type={iconType} />
        <Title level={4}>
          {label}
        </Title>
      </div>
    )
  }

  return (
    <Upload {...uploadProps}>
      <React.Fragment>
        {
          imageUrl ? (
            <React.Fragment>
              <img src={imageUrl} alt="avatar" />
              {
                !loading && (
                  <div className="edit-icon">
                    <div className="icon" />
                  </div>
                )
              }
              {
                loading && (
                  <div className="loading">
                    <Icon type="loading" />
                  </div>
                )
              }
            </React.Fragment>
          ) : uploadButton
        }
      </React.Fragment>
    </Upload>
  )
}

AvatarUploader.defaultProps = {
  isEdit: false,
  iconType: 'camera',
  label: 'Add Photo'
}

AvatarUploader.propTypes = {
  isEdit: PropTypes.bool,
  onSave: PropTypes.func,
  iconType: PropTypes.string,
  label: PropTypes.string,
}

export default AvatarUploader
