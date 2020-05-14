import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'formik'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
// import message from 'antd/es/message'
import StepsWrapper from '../partials/stepsWrapper.jsx'
import Preview from './preview/preview.jsx'
import EditPreview from './preview/editPreview.jsx'
import PreviewDetails from './details/previewDetails.jsx'
import EditPreviewDetails from './details/editPreviewDetails.jsx'
import PreviewEducation from './education/previewEducation.jsx'
import EditPreviewEducation from './education/editPreviewEducation.jsx'
import NavBtns from '../partials/navBtns.jsx'

function UpdateProfile({ formik }) {
  const [showPreview, setShowPreview] = useState(true)
  const [showDetails, setShowDetails] = useState(true)
  const [showEducation, setShowEducation] = useState(true)

  function onDone() {
    formik.handleSubmit()
  }

  const previewProps = {
    onEdit: () => setShowPreview(false),
  }

  const editPreviewProps = {
    onCancel: () => setShowPreview(true),
  }

  const detailsProps = {
    onEdit: () => setShowDetails(false),
  }

  const editDetailsProps = {
    onCancel: () => setShowDetails(true),
  }
  
  const educationProps = {
    onEdit: () => setShowEducation(false),
  }

  const editEducationProps = {
    onCancel: () => setShowEducation(true),
  }

  const navBtnsProps = {
    showSkipBtn: false,
    submitBtnText: 'Done',
    showSubmitBtnIcon: false,
    isSubmitting: formik.isSubmitting,
    onSubmit: onDone,
  }

  return (
    <div className="profile">
      <StepsWrapper current={2} contentStyle={{ paddingTop: '39px' }}>
        <React.Fragment>
          <Row className="profile-content" /* style={{ maxWidth: '740px', margin: '0 auto' }} */>
            <Col xs={24}>
              {
                showPreview ? (
                  <Preview {...previewProps} />
                ) : <EditPreview {...editPreviewProps} />
              }
            </Col>
            <Col xs={15}>
              {
                showDetails ? (
                  <PreviewDetails {...detailsProps} />
                ) : <EditPreviewDetails {...editDetailsProps} />
              }
            </Col>
            <Col xs={15}>
              {
                showEducation ? (
                  <PreviewEducation {...educationProps} />
                ) : <EditPreviewEducation {...editEducationProps} />
              }
            </Col>
          </Row>
          <div>
            <NavBtns {...navBtnsProps} />
          </div>
        </React.Fragment>
      </StepsWrapper>
    </div>
  )
}

UpdateProfile.propTypes = {
  formki: PropTypes.object,
}

export default connect(UpdateProfile)
