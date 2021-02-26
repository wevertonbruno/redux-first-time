import React from 'react';

import Add from './components/Add';
import List from './components/List';
import Filters from './components/Filters';

import { AppContainer } from './components/styles';

function App() {
  return (
    <AppContainer>
        <section>
          <h1>ToDo List</h1>
          <Add />
          <List />
          <Filters />
        </section>
    </AppContainer>
  );
}

export default App;
