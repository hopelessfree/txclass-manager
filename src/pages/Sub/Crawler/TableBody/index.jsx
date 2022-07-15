import "./index.scss"
import React from 'react'

const TableBody = (props) => {
  const {
    crawlerData,
    onCrawlerClick
  } = props;

  return (
    <tbody>
      {
        Array.isArray(crawlerData) && crawlerData.map((item, index) => (
          <tr
            key={index}
          >
            <td className={'desc-td'}>{item.description}</td>

            <td className={'btn-td'}>
              <button
                disabled={item.loading}
                onClick={() => onCrawlerClick(item, index)}
                className={[
                  'btn',
                  item.loading ? 'btn-warning' : 'btn-success',
                ].join(' ')}
              >
                {item.loading ? '爬取中...' : item.title}
              </button>
            </td>

          </tr>
        ))
      }
    </tbody>
  )
}

export default TableBody