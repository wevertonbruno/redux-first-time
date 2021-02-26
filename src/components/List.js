import React, { Fragment } from 'react';
import ToDo from './ToDo';

import {connect} from 'react-redux';
import { getTodos } from '../redux/selectors';

// import { Container } from './styles';

function List({ todos, count }) {
  return (
    <Fragment>
    <ul>
        {todos.length > 0 ? todos.map( (item, key) => (<ToDo key={key} item={item} />)) : <h3>Empty List</h3>}
    </ul>
    <span>Counter: {count}</span>
    </Fragment>
  );
}

export default connect(state => ({ todos: getTodos(state), count: state.todos.count }))(List);