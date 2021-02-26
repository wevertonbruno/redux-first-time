import React from 'react';

import Add from './components/Add';
import List from './components/List';
import Filters from './components/Filters';

function App() {
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <Add />
      <List />
      <Filters />
    </div>
  );
}

export default App;
