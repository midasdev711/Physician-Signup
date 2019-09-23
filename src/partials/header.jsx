import React from 'react'
import Layout from 'antd/es/layout'
import Button from 'antd/es/button'
import '../styles/header.scss'

const { Header } = Layout

function GlobalHeader() {
  return (
    <Header className="header">
      <div className="header-content">
        <div className="header-logo-wrapper">
          <div className="header-logo" />
        </div>
        <Button type="link" block={false} className="header-contactus-btn">
          Contact us
        </Button>
      </div>
    </Header>
  )
}

export default GlobalHeader
