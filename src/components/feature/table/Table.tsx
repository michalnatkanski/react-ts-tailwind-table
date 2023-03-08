import React, { useState, useCallback } from 'react'
import Item from '../item/Item';
import Header from '../header/Header';
import { SortKeys, SortOrder, Data, Headers } from '../../../types/table';
import { filterData } from '../../../utils/helpers';

const Table = ({ data }: { data: Data }) => {

  const [sortKey, setSortKey] = useState<SortKeys>("name");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState<Data>(data);

  const headers: Array<Headers> = [
    { key: "name", label: "Name" },
    { key: "description", label: "Description" },
    { key: "price", label: "Price" },
  ];

  const sortedData = useCallback(
    () => filterData({
      filteredData,
      sortKey,
      reverse: sortOrder === "desc"
    }),
    [filteredData, sortKey, sortOrder]
  );

  function changeSort(key: SortKeys) {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setSortKey(key);
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchQuery(value);
    const newData = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase()) ||
      item.description.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(newData);
  };

  return (
    <div className="py-20 p-3 mx-auto flex flex-col place-self-center max-w-3xl">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search items"
        className="px-4 py-2 my-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr className="bg-gray-800 border-b border-gray-600">
            {headers.map(({ key, label }) =>
              <Header
                key={key}
                label={label}
                changeSort={changeSort}
              />
            )}
          </tr>
        </thead>
        <tbody>
          {sortedData().map((item) =>
            <Item
              key={item.id}
              item={item}
            />
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Table;


