import React from 'react'
import { Headers } from '../../../types/table';

const Header: React.FC<Headers> = ({ key, label, changeSort }) => {
  return (
    <th
      onClick={() => changeSort && changeSort(key)}
      className="text-white px-4 py-2 text-left cursor-pointer">
      {label}
    </th>
  )
}

export default Header;