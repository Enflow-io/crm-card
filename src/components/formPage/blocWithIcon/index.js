import React from 'react'
import './style.scss'
import {cssClassName} from '../../../utils'
import Icon from '../icon';

const cn = cssClassName('BlocWithIcon')

const BlocWithIcon = ({mix, children, type}) => {
  return (
    <div className={cn()}>
      <Icon type={type} mix={cn('icon')} />
      <div className={cn('content')}>
        {children}
      </div>
    </div>
  )
}
export default BlocWithIcon
