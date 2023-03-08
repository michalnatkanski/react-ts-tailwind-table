import React from 'react'
import { HeaderProps } from '../../../types/table';

const Header: React.FC<HeaderProps> = ({ row, changeSort }) => {
  return (
    <th onClick={() => changeSort(row.key)} className="text-white px-4 py-2 text-left cursor-pointer">{row.label}</th>
  )
}

export default Header;