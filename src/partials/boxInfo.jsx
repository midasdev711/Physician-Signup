import React from 'react'
import PropTypes from 'prop-types'
import Typography from 'antd/es/typography'
import '../styles/boxInfo.scss'

const { Title } = Typography

function BoxInfo({ svgLogo, text, imgWrapperStyle, titleStyle }) {
  return (
    <div className="box-info">
      <div className="box-info-img-wrapper" style={imgWrapperStyle}>
        {svgLogo}
      </div>
      <Typography>
        <Title level={4} className="box-info-title" style={titleStyle}>
          {text}
        </Title>
      </Typography>
    </div>
  )
}

BoxInfo.defaultProps = {
  imgWrapperStyle: {},
  titleStyle: {
    margin: '24px 0',
  }
}

BoxInfo.propTypes = {
  svgLogo: PropTypes.element,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
}

export default BoxInfo
