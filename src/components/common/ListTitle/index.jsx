import "./index.scss"
import React from 'react'

const ListTitle = (props) => {
  const { title, onRefreshData } = props;

  return (
    <div className={'list-title'}>
      <h1 className={'title'}>{title}</h1>

      {
        onRefreshData &&
        <span
          className={'refresh-btn'}
          onClick={onRefreshData}
        >
          <i className={'iconfont icon-refresh'} />
          刷新数据
        </span>
      }

    </div>
  )
}

export default ListTitle