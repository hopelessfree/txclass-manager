import "./index.scss"
import React, {
  useEffect
} from 'react'

const TableBody = (props) => {
  const {
    sliderData,
  } = props;

  const onStatusClick = (item, index) => {
    props.onStatusClick(item, index)
  }

  return (
    <tbody>
      {
        Array.isArray(sliderData) && sliderData.map((item, index) => (
          <tr
            key={index}
          >
            <td>{item.id}</td>
            
            <td>{item.cid}</td>

            <td>
              <a href={item.href} target="_blank" rel={'noreferrer'}>
                <img
                  src={`http://tximg.songxianwei.com/${item.imgKey}`}
                  alt={item.courseName}
                  className={'slider-img'}
                />
              </a>
            </td>

            <td>
              <a href={item.href} target="_blank">
                {item.title}
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