import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'antd/es/layout'
import Divider from 'antd/es/divider'
import Header from '../partials/header.jsx'
import '../styles/layout.scss'

const { Content } = Layout

const dividerStyle = {
  marginTop: 0,
  marginBottom: 0,
  top: 0
}

function MainLayout({ children }) {
  return (
    <Layout className="layout">
      <Header />
      <Divider style={dividerStyle} />
      <Content className="main-content">
        {children}
      </Content>
    </Layout>
  )
}

MainLayout.propTypes = {
  children: PropTypes.element,
}

export default MainLayout
