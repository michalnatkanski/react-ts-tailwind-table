import React from 'react'
import { ItemProps } from '../../../types/table';

const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <tr className="border-b border-gray-200">
      <td className="text-zinc-600 px-4 py-2">{item.name}</td>
      <td className="text-zinc-600 px-4 py-2">{item.description}</td>
      <td className="text-zinc-600 px-4 py-2">{item.price}</td>
    </tr>
  )
}

export default Item;