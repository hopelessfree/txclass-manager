import "./index.scss"
import React from 'react'

const TableBody = (props) => {
  const {
    teacherData,
  } = props;

  const onStatusClick = (item, index) => {
    props.onStatusClick(item, index)
  }

  const onStarClick = (item) => {
    props.onStarClick(item)
  }

  return (
    <tbody>
      {
        Array.isArray(teacherData) && teacherData.map((item, index) => (
          <tr
            key={index}
          >
            <td>{item.id}</td>

            <td>
              <a href={item.href} target="_blank" rel={'noreferrer'}>
                <img
                  src={`http://tximg.songxianwei.com/${item.teacherImgKey}`}
                  alt={item.teacherName}
                  className={'slider-img'}
                />
              </a>
            </td>

            <td>{item.teacherName}</td>

            <td>{item.courseCount}</td>

            <td>{item.studentCount}</td>

            <td>{item.intro}</td>

            <td>
              <button
                className={['btn', item.isStar ? 'btn-danger' : 'btn-success'].join(' ')}
                onClick={() => onStarClick(item, index)}
              >
                {item.isStar ? '下线明星' : '上线明星'}
              </button>
            </td>

            <td>
              <button
                className={['btn', item.status ? 'btn-danger' : 'btn-success'].join(' ')}
                onClick={() => onStatusClick(item, index)}
              >
                {item.status ? '上线' : '下线'}
              </button>
            </td>

          </tr>
        ))
      }
    </tbody>
  )
}

export default TableBody