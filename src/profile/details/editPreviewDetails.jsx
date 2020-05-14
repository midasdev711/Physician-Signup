import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'formik'
import { triggerFormLevelValidation } from '../../utils/formik.js'
import PreviewHeader from '../../partials/previewHeader.jsx'
import EditDetailsForm from './editDetailsForm.jsx'
import '../../styles/editPreviewDetails.scss'

function EditPreviewDetails({ formik, onCancel }) {
  const [initialValues] = useState({
    name: formik.values.name,
    cityState: formik.values.cityState,
    country: formik.values.country,
  })

  const previewHeader = {
    title: 'Employer Details',
    isEdit: true,
    onSave: () => {
      triggerFormLevelValidation(formik, () => {
        onCancel()
      })
    },
    onCancel: () => {
      const {
        values: {
          name, cityState, country, ...restValues
        },
      } = formik

      formik.resetForm({
        name: initialValues.name,
        cityState: initialValues.cityState,
        country: initialValues.country,
        ...restValues,
      })
      onCancel()
    },
  }

  return (
    <div className="preview-edit-details">
      <PreviewHeader {...previewHeader} />
      <EditDetailsForm />
    </div>
  )
}

EditPreviewDetails.defaultProps = {}

EditPreviewDetails.propTypes = {
  formik: PropTypes.object,
  onCancel: PropTypes.func,
}

export default connect(EditPreviewDetails)
