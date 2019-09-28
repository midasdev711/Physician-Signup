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

function Preview({ onEdit, formik: { values } }) {
  const avatarUploaderProps = {
    avatarUrl: values.avatar,
  }
  
  const previewBtns = {
    isEdit: false,
    onEdit,
  }

  return (
    <div className="preview">
      <Row>
        <Col xs={24} sm={6}>
          <AvatarUploader {...avatarUploaderProps} />
        </Col>
        <Col xs={24} sm={18}>
          <Row type="flex" justify="space-between" className="preview-info">
            <Col>
              <Title level={4} className="preview-info-fullname">
                {values.fullName}
              </Title>
              <Title level={4} className="preview-info-phone">
                {values.phone}
              </Title>
              <div className="preview-info-skills">
                {
                  values.skills.map(skill => (
                    <div key={skill} className="preview-info-skills-item">
                      {skill}
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
    </div>
  )
}

Preview.defaultProps = {}

Preview.propTypes = {
  onEdit: PropTypes.func,
  formik: PropTypes.object,
}

export default connect(Preview)
