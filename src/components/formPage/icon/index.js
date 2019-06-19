import React from 'react'
import './style.scss'
import {cssClassName} from '../../../utils'

const cn = cssClassName('icon')

const Icon = ({mix, type}) => <img className={cn(type, [mix])} src={`/${type}.svg`}/>
export default Icon
