import "./index.scss"
import React from 'react'

const TableHead = (props) => {

  const { tdData } = props;

  return (
    <thead>
      <tr>
        {
          tdData.map((item, index) => {
            return <th key={index}>{item}</th>
          })
        }
      </tr>
    </thead>
  )
}

export default TableHead
