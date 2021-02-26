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
        <input id={"check" + item.id} type="checkbox" onClick={() => toggleTodo(item.id)} checked={item.completed ? true : false}/>
        <label for={"check" + item.id}>{item.content}</label>
      </div>
    </TodoContainer>
  );
}

export default connect(null, { removeTodo, toggleTodo })(ToDo);