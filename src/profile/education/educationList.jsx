import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Tooltip from 'antd/lib/tooltip'
import Tag from 'antd/es/tag'
import Typography from 'antd/es/typography'
import '../../styles/educationList.scss'

const { Title } = Typography

const mockEducationList = [
  {
    id: '1',
    qualification: 'Doctor of Surgery',
    school: 'Harvard Medical School',
    graduatedAt: '2009-06-06',
  },
  {
    id: '2',
    qualification: 'Doctor of Medicine',
    school: 'Duke-NUS Graduate Medical',
    graduatedAt: '2001-07-07',
  }
]

function EducationList({ isEdit, onRemove }) {
  const [educationList /* , setEducationList */] = useState(mockEducationList)

  const maxLen = 30

  function isLongText(text) {
    return text.length > maxLen
  }

  // function trimText(text) {
  //   return `${text.slice(0, maxLen)}...`
  // }

  // function formatText(text) {
  //   return isLongText(text) ? trimText(text) : text
  // }

  function setTooltip(text) {
    return isLongText(text) ? text : ''
  }

  return (
    <div className="education-list">
      {
        educationList.map((item) => {
          const {
            id, qualification, school, graduatedAt,
          } = item

          const qualificationText = `${new Date(graduatedAt).getFullYear()} - ${qualification}`

          return (
            <div key={id} className="education-list-item">
              <Tag
                className={!isEdit ? 'preview-mode' : ''}
                closable={isEdit}
                onClose={() => isEdit && onRemove(item)}
              >
                <div>
                  <Tooltip title={setTooltip(qualificationText)}>
                    <Title level={4} ellipsis className="education-list-item-quals">
                      {qualificationText}
                    </Title>
                  </Tooltip>
                  <Tooltip title={setTooltip(school)}>
                    <Title level={4} ellipsis className="education-list-item-school">
                      {school}
                    </Title>
                  </Tooltip>
                </div>
              </Tag>
            </div>
          )
        })
      }
    </div>
  )
}

EducationList.defaultProps = {
  educationList: [],
  isEdit: false,
  onRemove: () => { },
}

EducationList.propTypes = {
  educationList: PropTypes.array,
  isEdit: PropTypes.bool,
  onRemove: PropTypes.func,
}

export default EducationList
