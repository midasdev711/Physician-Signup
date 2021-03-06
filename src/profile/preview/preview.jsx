import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'formik'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import Typography from 'antd/es/typography'
import PreviewBtns from '../../partials/previewBtns.jsx'
import AvatarUploader from '../../partials/avatarUploader.jsx'
import '../../styles/preview.scss'

const { Title } = Typography

function Preview({ onEdit, formik }) {
  const avatarUploaderProps = {
    isEdit: true,
    avatarUrl: formik.values.profilePhoto,
    onSave: (avatarUrl, profilePhotoFile) => {
      formik.setFieldValue('profilePhoto', avatarUrl)
      formik.setFieldValue('profilePhotoFile', profilePhotoFile)
    },
  }
  
  const previewBtns = {
    isEdit: false,
    onEdit,
  }
  
  const { values } = formik

  return (
    <div className="preview">
      <Row>
        <Col xs={24} sm={5}>
          <AvatarUploader {...avatarUploaderProps} />
        </Col>
        <Col xs={24} sm={10}>
          <Row type="flex" justify="space-between" className="preview-info">
            <Col>
              <Title level={4} className="preview-info-fullname">
                {values.name}
              </Title>
              <Title level={4} className="preview-info-phone">
                {values.phone}
              </Title>
              <div className="preview-info-skills">
                {
                  values.specialities.map(({ name }) => (
                    <div key={name} className="preview-info-skills-item">
                      {name}
                    </div>
                  ))
                }
              </div>
            </Col>
            <Col>
              <PreviewBtns {...previewBtns} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={15} className="border-bottom">
        </Col>
      </Row>
    </div>
  )
}

Preview.defaultProps = {}

Preview.propTypes = {
  onEdit: PropTypes.func,
  formik: PropTypes.object,
}

export default connect(Preview)
