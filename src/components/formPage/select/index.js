import React from 'react'
import './style.scss'
import {cssClassName} from '../../../utils'
const cn = cssClassName('Select')

const Select = ({mix, onChange, value, options}) => {

  const [showOption, setShowOption] = React.useState(false)

  const onOptionClick = (option) => () => {
    onChange(option)
    setShowOption(false)
  }
  const renderOptions = options.map((option, key) =>
    <div
      className={cn('option-items')}
      key={key}
      onClick={onOptionClick(option)}
    >{option}</div>
  )

  return (
    <div
      onClick={showOption ? undefined : () => setShowOption(true)}

    >
      <div className={cn('value', {isEmpty: !value})}>
        {showOption || value || '...'}
      </div>
      {
        showOption && <div className={cn('options')}>{renderOptions}</div>
      }
    </div>
  )
}
export default Select
