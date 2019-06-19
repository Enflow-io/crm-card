import React from 'react'
import './style.scss'
import {cssClassName} from '../../../utils'
import Icon from '../icon';
const cn = cssClassName('ErrorNote')

const ErrorNote = ({mix, children}) => {
  return <div className={cn()}>
    <Icon type={'warning'} mix={cn('icon')} />
    {children}
  </div>
}
export default ErrorNote
