import React from 'react'
import './style.scss'
import {cssClassName} from '../../../utils'
const cn = cssClassName('tr')

const Tr = ({mix, children, label}) => {
  return <div className={cn(mix)}>
    <div className={cn('label')}>{label}</div>
    <div className={cn('content')}>{children}</div>
    <div className={cn('helper')}/>
  </div>
}
export default Tr
