import React from 'react'
import './style.scss'
import {cssClassName} from '../../../utils'
import Icon from '../icon';

const cn = cssClassName('AddBtn')

const AddBtn = ({mix, children, wide}) => {

  const [fileName, setFileName] = React.useState()
  const onChange = e => {
    e.stopPropagation();
    e.preventDefault();
    var file = e.target.files[0];
    setFileName(file.name);
  };
  let _inputRef = React.createRef();

  function handleClick() {
    _inputRef.current.click();
  }
  return <div>
    <button onClick={handleClick} className={cn({wide}, [mix])}>
      <Icon type={'plus'} mix={cn('icon')} />
      {fileName || children}
    </button>
    <input
      className={cn('input-file')}
      ref={_inputRef}
      id="file"
      type="file"
      name="selectedFile"
      onChange={ (event) => onChange(event) }
    />
  </div>
}
export default AddBtn

