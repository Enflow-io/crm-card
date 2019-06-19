import React, {useState} from 'react'
import './style.scss'
import {cssClassName} from '../../../utils'
const cn = cssClassName('InputSelect')

const InputSelect = ({mix, value, handleChange, options}) => {
  const [showOptions, setShowOption] = useState(false);

  const renderOptions = options.map((option, key) =>
    <div
      className={cn('options-item', {last: key === options.length -1})}
      key={key}
      onClick={() => console.log(option)}
    >{option}</div>
  )

  const onFocus = () => {
    setShowOption(true)
    handleChange('')
  }

  return  <div className={cn()}>
    <div className={cn('input-wrapper', {line: showOptions})}>
      <input
        className={cn('input')}
        onFocus={onFocus}
        onBlur={() => setShowOption(false)}
        type={'text'}
        value={value}
        onChange={e => handleChange(e.target.value)}
      />
    </div>

    {
      showOptions && <div className={cn('options')}>{renderOptions}</div>
    }


  </div>
}
export default InputSelect
