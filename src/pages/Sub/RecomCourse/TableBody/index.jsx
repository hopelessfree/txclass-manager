import "./index.scss"
import React, {
  useEffect
} from 'react'

const TableBody = (props) => {
  const {
    recomCourseData,
  } = props;

  const onStatusClick = (item, index) => {
    props.onStatusClick(item, index)
  }

  return (
    <tbody>
      {
        Array.isArray(recomCourseData) && recomCourseData.map((item, index) => (
          <tr
            key={index}
          >
            <td>{item.cid}</td>

            <td>
              <a href={item.href} target="_blank" rel={'noreferrer'}>
                <img src={`http://tximg.songxianwei.com/${item.posterKey}`} alt={item.courseName} />
              </a>
            </td>

            <td>
              <a href={item.href} target="_blank">
                {item.title}
              </a>
            </td>

            <td>
              {item.teacherName}
            </td>

            <td>
              <span className={item.price === '0' ? 'free' : 'price'}>
                {item.price === '0' ? '免费' : `￥${item.price}`}
              </span>
            </td>

            <td>{item.studentCount}</td>

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