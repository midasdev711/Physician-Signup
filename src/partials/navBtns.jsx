import React from 'react'
import PropTypes from 'prop-types'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import Button from 'antd/es/button'
import Icon from 'antd/es/icon'
import Spin from 'antd/es/spin'
import '../styles/navBtns.scss'

function NavBtns({
  showSkipBtn, skipBtnText, onSkip,
  submitBtnText, showSubmitBtnIcon, isSubmitting, onSubmit,
}) {
  const antIcon = <Icon type="loading" style={{ fontSize: 24, color: '#fff' }} spin />

  return (
    <div className="nav-btns">
      <Row gutter={24}>
        {
          showSkipBtn && (
            <Col>
              <Button className="skip-btn" onClick={onSkip}>
                {skipBtnText}
              </Button>
            </Col>
          )
        }
        <Col>
          <Button className="submit-btn" type="primary" disabled={isSubmitting} onClick={onSubmit}>
            {submitBtnText}
            {
              showSubmitBtnIcon && (
                isSubmitting ? (
                  <Spin indicator={antIcon} />
                ) : (
                  <Icon type="arrow-right" />
                )
              )
            }
            {!showSubmitBtnIcon && isSubmitting && <Spin indicator={antIcon} />}
          </Button>
        </Col>
      </Row>
    </div>
  )
}

NavBtns.defaultProps = {
  showSkipBtn: true,
  skipBtnText: 'Skip For Now',
  submitBtnText: 'Next',
  showSubmitBtnIcon: true,
  isSubmitting: false,
}

NavBtns.propTypes = {
  showSkipBtn: PropTypes.bool,
  skipBtnText: PropTypes.string,
  onSkip: PropTypes.func,
  submitBtnText: PropTypes.string,
  showSubmitBtnIcon: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  onSubmit: PropTypes.func,
}

export default NavBtns
