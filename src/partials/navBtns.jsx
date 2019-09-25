import React from 'react'
import PropTypes from 'prop-types'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import Button from 'antd/es/button'
import Icon from 'antd/es/icon'
import '../styles/navBtns.scss'

function NavBtns({
  showSkipBtn, skipBtnText, onSkipClick,
  submitBtnText, showSubmitBtnIcon, onSubmit,
}) {
  return (
    <div className="nav-btns">
      <Row gutter={24}>
        {
          showSkipBtn && (
            <Col>
              <Button className="skip-btn" onClick={onSkipClick}>
                {skipBtnText}
              </Button>
            </Col>
          )
        }
        <Col>
          <Button className="submit-btn" type="primary" onClick={onSubmit}>
            {submitBtnText}
            {showSubmitBtnIcon && <Icon type="arrow-right" />}
          </Button>
        </Col>
      </Row>
    </div>
  )
}

NavBtns.defaultProps = {
  showSkipBtn: true,
  skipBtnText: 'Skip For Now',
  onSkipClick: () => { },
  submitBtnText: 'Next',
  showSubmitBtnIcon: true,
  onSubmit: () => { },
}

NavBtns.propTypes = {
  showSkipBtn: PropTypes.bool,
  skipBtnText: PropTypes.string,
  onSkipClick: PropTypes.func,
  submitBtnText: PropTypes.string,
  showSubmitBtnIcon: PropTypes.bool,
  onSubmit: PropTypes.func,
}

export default NavBtns
