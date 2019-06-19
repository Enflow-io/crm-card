import React from 'react'
import './style.scss'
import {cssClassName} from '../../../utils'
const cn = cssClassName('Label')

const Label = ({mix, children, type}) => {
  return <span className={cn({type}, mix)}>{children}</span>
}
export default Label
