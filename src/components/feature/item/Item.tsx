import React from 'react'
import { ItemProps } from '../../../types/table';

const Item: React.FC<ItemProps> = ({ item }) => {
    return (
        <tr className="border-b border-gray-200">
            <td className="px-4 py-2">{item.id}</td>
            <td className="px-4 py-2">{item.name}</td>
            <td className="px-4 py-2">{item.description}</td>
            <td className="px-4 py-2">{item.price}</td>
        </tr>
    )
}

export default Item;