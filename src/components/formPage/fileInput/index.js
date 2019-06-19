import React from 'react'
import './style.scss'
import {cssClassName} from '../../../utils'
const cn = cssClassName('title')

const Title = ({mix, children}) => {
  return <h3 className={cn(mix)}>{children}</h3>
}
export default Title
