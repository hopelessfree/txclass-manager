import "./index.scss"

import React, {
  useState,
} from 'react'

const TableSelect = (props) => {
  const {
    fieldData,
    selectIdx,
    defaultValue,
    onSelectChange,
    cid,
  } = props;
  const [show, setShow] = useState(false)
  // const [selectValue, setSelectValue] = useState(defaultValue)

  const showList = () => {
    setShow(v => !v)
  }

  const selectChange = (data, index) => {
    showList()
    // setSelectValue(data.title)
    onSelectChange(data, cid, index)
  }

  // useEffect(() => {
  //   setSelectValue(defaultValue)
  // }, [defaultValue])


  return (
    <div className={'table-select'}>
      <i className={'iconfont icon-arrow-down'} />
      <div
        className={'value-show'}
        onClick={showList}
      >
        {defaultValue}
      </div>

      <ul
        className={['option-list', show && 'show'].join(' ')}
      >
        {
          Array.isArray(fieldData) && fieldData.map((item, index) => (
            <li
              className={'option-item'}
              key={index}
              onClick={() => selectChange(item, selectIdx)}
            >
              {item.title}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default TableSelect