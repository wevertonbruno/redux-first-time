import React from 'react';
import {connect} from 'react-redux';
import { removeTodo, toggleTodo } from '../redux/actions';

// import { Container } from './styles';

function ToDo({ item, toggleTodo }) {

  const handleRemove = () => {
    toggleTodo(item.id)
    console.log(item.complete)
  }
  

  return (
    <Container>
      <div className="content">
        {item.content} 
      </div>
      <div className="actions">
        <img className="toggle" src={toggleIcon}/>
        <img className="remove" src={removeIcon}/>
      </div>
    </Container>
  );
}

export default connect(null, { removeTodo, toggleTodo })(ToDo);