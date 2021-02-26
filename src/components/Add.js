import React, { useState } from 'react';

import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';

// import { Container } from './styles';

function Add({ addTodo }) {

    const [input, setInput] = useState('');

    const handleTodo = () => {
        //pega a action via props
        addTodo(input);
        setInput('');
    };

    return (
        <div>
            <input name="todoInput" onChange={ e => setInput(e.target.value) } value={input}/>
            <button onClick={handleTodo}>Add</button>
        </div>
    );
}

export default connect( null, { addTodo } )(Add);