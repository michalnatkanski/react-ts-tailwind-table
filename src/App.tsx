import React from 'react';
import './App.css';
import Table from './components/feature/table/Table';
import data from './data/items.json';

const App: React.FC = () => {
  return (
    <Table data={data} />
  );
}

export default App;
