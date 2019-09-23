import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Steps from 'antd/es/steps'
// import Button from 'antd/es/button'
import '../styles/steps.scss'

const { Step } = Steps

function GlobalSteps({
  current, children, // onNext, onPrev,
}) {
  const steps = [
    {
      title: 'Claim Your Account',
      icon: <FontAwesomeIcon icon={['fas', 'user']} />,
      content: children,
    },
    {
      title: 'Credentials',
      icon: <FontAwesomeIcon icon={['fas', 'info-circle']} />,
      content: children,
    },
    {
      title: 'Update Profile',
      icon: <FontAwesomeIcon icon={['far', 'edit']} />,
      content: children,
    },
  ]

  return (
    <div className="steps">
      <div className="steps-wrapper">
        <div className="steps-label-container">
          <div className="steps-label-items">
            <Steps current={current}>
              {steps.map(({ title, icon }) => (
                <Step
                  key={title}
                  icon={icon}
                  title={<div className="title">{title}</div>}
                />
              ))}
            </Steps>
          </div>
        </div>
        <div className="steps-content-container">
          <div className="steps-content">
            {steps[current].content}
          </div>
        </div>
      </div>
    </div>
  )
}

GlobalSteps.defaultProps = {
  current: 0
}

GlobalSteps.propTypes = {
  current: PropTypes.number,
  // onNext: PropTypes.func,
  // onPrev: PropTypes.func,
}

export default GlobalSteps
