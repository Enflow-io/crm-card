import React, {useState} from 'react'
import './style.scss'
import {cssClassName} from '../../../utils'
const cn = cssClassName('Input')

const Input = ({mix, type, value, propsHandleChange}) => {

  let handleChange = propsHandleChange;
  let inputType = type
  let size = value ? value.length + 1 : 1;

  switch (type) {
    case 'space':
    case 'weight':
    case 'money':
      inputType = 'tel'
    case 'tel':
      handleChange = (val)  => {
        const _val = val.replace(/\D/g, '')
        console.log(_val);
        propsHandleChange(_val)
      }
      size = value ? value.replace(/\D/g, '').length + 1 : 1;

      break;
  }
  const [focus, onFocus] = useState(false);


  let _input = React.createRef();

  function handleClick() {
    onFocus(true)
    _input.current.focus();
  }

  const showInput = !value || !focus
  return  <div onClick={handleClick} className={cn()}>

    <input
      ref={_input}
      size={size}
      className={cn('input')}
      onFocus={handleClick}
      onBlur={() => onFocus(false)}
      type={inputType}
      value={value}
      onChange={e => handleChange(e.target.value)}
    />

    {type === 'money' && 'руб'}
    {type === 'weight' && 'т'}
    {type === 'space' && 'куб.м'}
    <span className={cn('bar', {wide: focus})} />


  </div>
}
export default Input
