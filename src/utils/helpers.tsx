import { Data, SortKeys } from "../types/table";

//filterData function
export const filterData = ({
    filteredData,
    sortKey,
    reverse,
}: {
    filteredData: Data;
    sortKey: SortKeys;
    reverse: boolean;
}) => {
    if (!sortKey) return filteredData;

    const sortedData = filteredData.sort((a, b) => {
        return a[sortKey] > b[sortKey] ? 1 : -1;
    });

    if (reverse) {
        return sortedData.reverse();
    }

    return sortedData;
}