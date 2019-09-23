import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Layout from 'antd/es/layout'
import Divider from 'antd/es/divider'
import { StepContext } from '../context/step.js'
import Header from '../partials/header.jsx'
import Steps from '../partials/steps.jsx'
import '../styles/layout.scss'

const { Content } = Layout

const dividerStyle = {
  marginTop: 0,
  marginBottom: 0,
  top: 0
}

function MainLayout({ children }) {
  const [step, setStep] = useState(0)

  const stepsProps = {
    current: step,
    children,
  }

  return (
    <Layout className="layout">
      <Header />
      <Divider style={dividerStyle} />
      <Content className="main-content">
        <StepContext.Provider value={setStep}>
          <Steps {...stepsProps} />
        </StepContext.Provider>
      </Content>
    </Layout>
  )
}

MainLayout.propTypes = {
  children: PropTypes.element,
}

export default MainLayout
