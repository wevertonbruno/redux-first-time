import React from 'react';
import {connect} from 'react-redux';
import { removeTodo, toggleTodo } from '../redux/actions';

import { TodoContainer } from './styles';
import falseIcon from '../assets/falseIcon.svg';
import trueIcon from '../assets/trueIcon.svg';
import removeIcon from '../assets/removeIcon.svg';

function ToDo({ item, toggleTodo }) {

  const handleRemove = () => {
    toggleTodo(item.id)
    console.log(item.complete)
  }
  

  return (
    <TodoContainer>
      <div className="content">
        {item.content} 
      </div>
      <div className="actions">
        <img className="toggle" src={ item.completed ? trueIcon : falseIcon }/>
        <img className="remove" src={ removeIcon }/>
      </div>
    </TodoContainer>
  );
}

export default connect(null, { removeTodo, toggleTodo })(ToDo);