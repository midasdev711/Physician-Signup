import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'formik'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import Radio from 'antd/es/radio'
import FieldLabel from '../../partials/fieldLabel.jsx'
import CustomInputComponent from '../../partials/formik/customInputComponent.jsx'
// import '../../styles/editDetailsForm.scss'

function EditDetailsForm() {
  return (
    <div className="preview-edit-details-form">
      <Row gutter={24}>
        <Col xs={24} sm={12}>
          <FieldLabel label="Employer Name">
            <Field
              name="email"
              component={CustomInputComponent}
            />
          </FieldLabel>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col xs={24} sm={12}>
          <FieldLabel label="City / State">
            <Field
              name="cityState"
              component={CustomInputComponent}
            />
          </FieldLabel>
        </Col>
        <Col xs={24} sm={12}>
          <FieldLabel label="Country">
            <Field
              name="country"
              component={CustomInputComponent}
            />
          </FieldLabel>
        </Col>
      </Row>
    </div>
  )
}

EditDetailsForm.propTypes = {
  formik: PropTypes.object,
}

export default EditDetailsForm
