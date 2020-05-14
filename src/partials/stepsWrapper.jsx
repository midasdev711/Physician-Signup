import React from 'react'
import PropTypes from 'prop-types'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import Steps from '../partials/steps.jsx'

const style = {
  width: '825px',
  padding: '53px 24px 24px',
}

function StepsWrapper({ current, contentStyle = {}, children }) {
  return (
    <div className="wrapper">
      <Row type="flex" justify="center">
        <Col className="content" style={{ ...style, ...contentStyle }}>
          {children}
        </Col>
      </Row>
    </div>
  )
}

StepsWrapper.defaultProps = {
  current: 0,
  contentStyle: {},
}

StepsWrapper.propTypes = {
  current: PropTypes.number,
  contentStyle: PropTypes.object,
  children: PropTypes.element,
}

export default StepsWrapper
