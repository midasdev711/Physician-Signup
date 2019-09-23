import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
// import Row from 'antd/es/row'
// import Col from 'antd/es/col'
import StepsWrapper from '../partials/stepsWrapper.jsx'

function UploadMedicalLicense({ history }) {
  function onUpload(values) {
    console.log('onUpload() values', values)
    // history.push('')
  }

  return (
    <div className="sign-up">
      <StepsWrapper current={1}>
        {/* <Row gutter={124}>
          <Col xs={24} sm={24} md={12}>
          </Col>
          <Col xs={24} sm={24} md={12}>
          </Col>
        </Row> */}
      </StepsWrapper>
    </div>
  )
}

UploadMedicalLicense.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}

export default withRouter(UploadMedicalLicense)
