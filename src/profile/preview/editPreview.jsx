import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'formik'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import { triggerFormLevelValidation } from '../../utils/formik.js'
import PreviewBtns from '../../partials/previewBtns.jsx'
import AvatarUploader from '../../partials/avatarUploader.jsx'
import ProfileEditForm from './editForm.jsx'
import '../../styles/editPreview.scss'

function EditPreview({ onCancel, formik }) {
  const [initialValues] = useState({
    name: formik.values.name,
    phonePrefix: formik.values.phonePrefix,
    phone: formik.values.phone,
    specialities: formik.values.specialities,
  })

  const avatarUploaderProps = {
    isEdit: true,
    avatarUrl: formik.values.profilePhoto,
    onSave: (avatarUrl) => {
      formik.setFieldValue('profilePhoto', avatarUrl)
    },
  }
  
  const previewBtns = {
    isEdit: true,
    onSave: () => {
      triggerFormLevelValidation(formik, () => {
        onCancel()
      })
    },
    onCancel: () => {
      const {
        values: {
          name, phonePrefix, phone, specialities, ...restValues
        },
      } = formik

      formik.resetForm({
        name: initialValues.name,
        phonePrefix: initialValues.phonePrefix,
        phone: initialValues.phone,
        specialities: initialValues.specialities,
        ...restValues,
      })
      onCancel()
    },
  }

  return (
    <div className="preview-edit">
      <Row>
        <Col xs={24} sm={6}>
          <AvatarUploader {...avatarUploaderProps} />
        </Col>
        <Col xs={24} sm={18}>
          <Row className="preview-edit-info">
            <Col xs={24} sm={19}>
              <ProfileEditForm />
            </Col>
            <Col xs={24} sm={5} style={{ textAlign: 'right' }}>
              <PreviewBtns {...previewBtns} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

EditPreview.defaultProps = {}

EditPreview.propTypes = {
  onCancel: PropTypes.func,
  formik: PropTypes.object,
}

export default connect(EditPreview)
