import React from 'react'
import PropTypes from 'prop-types'
import PreviewHeader from '../../partials/previewHeader.jsx'
import EducationList from './educationList.jsx'
import '../../styles/previewEducation.scss'

function PreviewEducation({ onEdit }) {
  const previewHeader = {
    title: 'Education',
    isEdit: false,
    onEdit,
  }

  return (
    <div className="preview-education">
      <PreviewHeader {...previewHeader} />
      <div style={{ marginTop: '16px' }}>
        <EducationList />
      </div>
    </div>
  )
}

PreviewEducation.defaultProps = {}

PreviewEducation.propTypes = {
  onEdit: PropTypes.func,
}

export default PreviewEducation
