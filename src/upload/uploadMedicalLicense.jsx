import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'formik'
import { withRouter } from 'react-router-dom'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import message from 'antd/es/message'
import StepsWrapper from '../partials/stepsWrapper.jsx'
import UploadBoxInfo from './uploadBoxInfo.jsx'
import UploadSection from './uploadSection.jsx'
import NavBtns from '../partials/navBtns.jsx'

function UploadMedicalLicense({ history, formik }) {
  const [fileList, setFileList] = useState([])
  
  function beforeUpload(file) {
    const isPdf = file.type === 'application/pdf'
  
    if (!isPdf) {
      message.error('You can only upload a PDF file!')
    }
  
    return isPdf
  }

  function onUpload(info) {
    // console.log('onUpload info', info)
    if (info.file.status === 'uploading') {
      setFileList([...info.fileList.slice(-1)])
      return
    }

    if (info.file.status === 'done') {
      const files = info.fileList.slice(-1)

      setFileList([...files])
      formik.setFieldValue('medicalLicense', files[0])
    }
  }
  
  function onRemove() {
    setFileList([])
    formik.setFieldValue('medicalLicense', null)
  }
  
  function onNext() {
    history.push('/update/profile')
  }
  
  const uploadedFile = fileList[0] ? fileList[0] : { status: 'default' }
  
  const uploadSectionProps = {
    uploadedFile,
    onRemove,
    uploadProps: {
      showUploadList: false,
      onChange: onUpload,
      beforeUpload,
    },
  }
  
  const navBtnsProps = {
    onSkip: onNext,
    onSubmit: onNext,
  }

  return (
    <div className="upload">
      <StepsWrapper current={1} contentStyle={{ paddingTop: '50px' }}>
        <Row>
          <Col xs={24} sm={12}>
            <UploadBoxInfo />
          </Col>
          <Col xs={24} sm={12}>
            <UploadSection {...uploadSectionProps} />
          </Col>
          <Col xs={24}>
            <NavBtns {...navBtnsProps} />
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
  formik: PropTypes.object,
}

export default connect(withRouter(UploadMedicalLicense))
