import React, { useState } from 'react';

import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';

import { AddContainer } from './styles';

function Add({ addTodo }) {

    const [input, setInput] = useState('');

    const handleTodo = () => {
        //pega a action via props
        addTodo(input);
        setInput('');
    };

    return (
        <AddContainer>
            <input name="todoInput" onChange={ e => setInput(e.target.value) } value={input}/>
            <button onClick={handleTodo}>Add</button>
        </AddContainer>
    );
}

export default connect( null, { addTodo } )(Add);