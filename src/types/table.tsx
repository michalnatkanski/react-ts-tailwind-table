import data from '../data/items.json';

export type Data = typeof data;
export type SortKeys = keyof Data[0];
export type SortOrder = "asc" | "desc";

export interface ItemProps {
    item: Data[0];
}

export interface Headers {
    key: SortKeys;
    label: string
}

export interface HeaderProps {
    row: Headers;
    changeSort: (key: SortKeys) => void;
}