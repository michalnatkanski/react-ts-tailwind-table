import React from 'react';
import { render, screen } from '@testing-library/react';
import data from './data/items.json';
import Table from './components/feature/table/Table';

describe('Table component', () => {
  it('renders table with data', () => {
    render(<Table data={data} />);
    const tableElement = screen.getByRole('table');
    expect(tableElement).toBeInTheDocument();

    const headerElements = screen.getAllByRole('columnheader');
    expect(headerElements.length).toBe(3);
  });
});