import React from 'react';
import { Typography } from 'antd';
import { Divider } from 'antd';

import Filters from './components/Filters/Filters';
import TodoList from './components/TodoList/TodoList';
import './App.css';
const { Title } = Typography;
const App: React.FC = () => {
  return (
    <div
      style={{
        margin: 'auto auto',
        boxShadow: '0 0 10px 4px #bfbfbf',
        width: '500px',
        height: '90vh',
        borderRadius: '10px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Title style={{ textAlign: 'center' }}>TODO APP with REDUX</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
};

export default App;
