import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import StepsWrapper from '../partials/stepsWrapper.jsx'
import UploadBoxInfo from './uploadBoxInfo.jsx'
import UploadSection from './uploadSection.jsx'
import NavBtns from '../partials/navBtns.jsx'

function UploadMedicalLicense({ history }) {
  // function onUpload(values) {
  //   console.log('onUpload() values', values)
  //   // history.push('')
  // }
  
  // const navBtnsProps = {
  // }

  return (
    <div className="upload">
      <StepsWrapper current={1} contentStyle={{ paddingTop: '50px' }}>
        <Row>
          <Col xs={24} sm={24} md={12}>
            <UploadBoxInfo />
          </Col>
          <Col xs={24} sm={24} md={12}>
            <UploadSection />
          </Col>
          <Col xs={24}>
            <NavBtns />
          </Col>
        </Row>
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
