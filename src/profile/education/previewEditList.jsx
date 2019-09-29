import React from 'react'
import PropTypes from 'prop-types'
import Tooltip from 'antd/lib/tooltip'
import Tag from 'antd/es/tag'
import Typography from 'antd/es/typography'
import AddBtn from './addBtn.jsx'

const { Title, Paragraph } = Typography

function PreviewEditList({
  isEdit, educations, onRemove, onAdd,
}) {
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
    <div>
      {
        (educations.length > 0) ? educations.map((education, index) => {
          const {
            qualification, school, graduatedAt,
          } = education

          const qualificationText = `${new Date(graduatedAt).getFullYear()} - ${qualification}`

          return (
            <div key={index} className="education-list-item">
              <Tag
                className={!isEdit ? 'preview-mode' : ''}
                closable={isEdit}
                onClose={() => onRemove(index)}
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
        }) : (
          <div>
            {isEdit && <AddBtn onAdd={onAdd} />}
            {
              isEdit && educations.length === 0 && (
                <Paragraph className="preview-edit-education-tip">
                  Build trust with patients and facilities by adding your educational background.
                </Paragraph>
              )
            }
          </div>
        )
      }
    </div>
  )
}

PreviewEditList.defaultProps = {
  isEdit: false,
  educations: [],
}

PreviewEditList.propTypes = {
  isEdit: PropTypes.bool,
  educations: PropTypes.array,
  onRemove: PropTypes.func,
  onAdd: PropTypes.func,
}

export default PreviewEditList
