import "./index.scss"
import React from 'react'
import TableSelect from "../../../../components/common/TableSelect";

const TableBody = (props) => {
  const {
    courseData,
    fieldData,
    onSelectChange,
  } = props;

  const onStatusClick = (item, index) => {
    props.onStatusClick(item, index)
  }

  return (
    <tbody>
      {
        courseData.map((item, index) => (
          <tr
            key={index}
          >
            <td>{item.cid}</td>

            <td>
              <a href={item.href} target="_blank">
                <img src={`http://tximg.songxianwei.com/${item.posterKey}`} alt={item.courseName} />
              </a>
            </td>

            <td>
              <a href={item.href} target="_blank">
                {item.courseName}
              </a>
            </td>

            <td>
              <span className={item.price === '0' ? 'free' : 'price'}>
                {item.price === '0' ? '免费' : `￥${item.price}`}
              </span>
            </td>

            <td>{item.studentCount}</td>

            <td className={'select'}>
              <TableSelect
                cid={item.cid}
                fieldData={fieldData}
                selectIdx={index}
                defaultValue={item.fieldTitle}
                onSelectChange={onSelectChange}
              />
            </td>

            <td>
              <button
                className={['btn', item.status ? 'btn-danger' : 'btn-success'].join(' ')}
                onClick={() => onStatusClick(item, index)}
              >
                {item.status ? '上架' : '下架'}
              </button>
            </td>

          </tr>
        ))
      }
    </tbody>
  )
}

export default TableBody