import React from 'react'
import './style.scss'
import {cssClassName} from '../../../utils'
const cn = cssClassName('text')

const Text = ({mix, children, big, black}) => {
  return <p className={cn(mix, {big, black})}>{children}</p>
}
export default Text
