import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
// import message from 'antd/es/message'
import StepsWrapper from '../partials/stepsWrapper.jsx'
import ProfilePreview from './profilePreview.jsx'
import ProfilePreviewDetails from './profilePreviewDetails.jsx'
import ProfilePreviewEducation from './profilePreviewEducation.jsx'
import NavBtns from '../partials/navBtns.jsx'

function UpdateProfile({ history }) {
  function onDone() {
    // history.push('')
  }

  const navBtnsProps = {
    showSkipBtn: false,
    submitBtnText: 'Done',
    showSubmitBtnIcon: false,
    onSubmit: onDone,
  }

  return (
    <div className="profile">
      <StepsWrapper current={2} contentStyle={{ paddingTop: '39px' }}>
        <React.Fragment>
          <Row className="profile-content" style={{ maxWidth: '610px', margin: '0 auto' }}>
            <Col xs={24}>
              <ProfilePreview />
            </Col>
            <Col xs={24}>
              <ProfilePreviewDetails />
            </Col>
            <Col xs={24}>
              <ProfilePreviewEducation />
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
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}

export default withRouter(UpdateProfile)
