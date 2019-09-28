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
  isEdit, avatarUrl, onSave, iconType, label,
}) {
  const [loading, setLoading] = useState(false)

  function onChange(info) {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return
    }

    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imgUrl) => {
        setLoading(false)
        onSave(imgUrl)
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
    className: `avatar-uploader edit-mode ${avatarUrl ? 'hasImg' : ''}`,
    showUploadList: false,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    beforeUpload,
    onChange,
  }

  if (!isEdit) {
    return (
      <div className="avatar-uploader preview-mode">
        {
          avatarUrl ? (
            <img src={avatarUrl} alt="avatar" />
          ) : (
            <React.Fragment>
              <Icon type={iconType} />
              <Title level={4}>
                {label}
              </Title>
            </React.Fragment>
          )
        }
      </div>
    )
  }

  return (
    <Upload {...uploadProps}>
      <React.Fragment>
        {
          avatarUrl ? (
            <React.Fragment>
              <img src={avatarUrl} alt="avatar" />
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
  avatarUrl: '',
  iconType: 'camera',
  label: 'Add Photo',
  onSave: () => { },
}

AvatarUploader.propTypes = {
  isEdit: PropTypes.bool,
  avatarUrl: PropTypes.string,
  iconType: PropTypes.string,
  label: PropTypes.string,
  onSave: PropTypes.func,
}

export default AvatarUploader
