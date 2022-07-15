import "./index.scss"
import React, {
  useEffect
} from 'react'

const TableBody = (props) => {
  const {
    studentData,
  } = props;

  const onStatusClick = (item, index) => {
    props.onStatusClick(item, index)
  }

  return (
    <tbody>
      {
        Array.isArray(studentData) && studentData.map((item, index) => (
          <tr
            key={index}
          >
            <td>{item.id}</td>

            <td>
              <a href={item.href} target="_blank" rel={'noreferrer'}>
                <img
                  src={`http://tximg.songxianwei.com/${item.studentImgKey}`}
                  alt={item.courseName}
                  className={'slider-img'}
                />
              </a>
            </td>

            <td>{item.studentName}</td>

            <td>{item.intro}</td>


            <td>
              <a href={item.courseLink} target="_blank" rel="noopener noreferrer">
                {item.courseName}
              </a>
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