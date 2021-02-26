import React from 'react';
import ToDo from './ToDo';

import {connect} from 'react-redux';
import { getTodos } from '../redux/selectors';

// import { Container } from './styles';

function List({ todos }) {
  return (
    <ul>
        {todos.length > 0 ? todos.map( (item, key) => (<ToDo key={key} item={item} />)) : <h3>Empty List</h3>}
    </ul>
  );
}

export default connect(state => ({ todos: getTodos(state) }))(List);