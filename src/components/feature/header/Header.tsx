import React from 'react'
import { HeaderProps } from '../../../types/table';

const Header: React.FC<HeaderProps> = ({ row, changeSort }) => {
    return (
        <th onClick={() => changeSort(row.key)} className="px-4 py-2 cursor-pointer">{row.label}</th>
    )
}

export default Header;