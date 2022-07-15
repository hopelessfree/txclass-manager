import "./index.scss"
import React, {
  useEffect
} from 'react'

const TableBody = (props) => {
  const {
    collectionData,
  } = props;

  const onStatusClick = (item, index) => {
    props.onStatusClick(item, index)
  }

  return (
    <tbody>
      {
        Array.isArray(collectionData) && collectionData.map((item, index) => (
          <tr
            key={index}
          >
            <td>{item.id}</td>

            <td>
              <a href={item.qqQunLink} target="_blank" rel={'noreferrer'}>
                <img
                  src={`http://tximg.songxianwei.com/${item.posterKey}`}
                  alt={item.title}
                  className={'collection-img'}
                />
              </a>
            </td>

            <td>{item.title}</td>

            <td>{item.info}</td>


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