import styled from 'styled-components';

export const TodoContainer = styled.div`
    background-color: #fff;
    box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
    border-radius: 5px;
    margin-bottom: 10px;

    .content{
        padding: 10px 20px;
        font-size: 1.5rem;
        color: #555;
        font-style: italic;
        position: relative;

        display: flex;
        justify-content: space-between;

       
    }
`;

export const AppContainer = styled.div`
    width: 100%;
    height: 100vh;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    section{
        border: 1px solid #eee;
        padding: 20px;
        border-radius: 5px;
        padding-bottom: 30px;
        width: 50%;
    
        h1{
            text-align: center;
            font-size: 2em;
        }
    }

`;

export const AddContainer = styled.div`
    display: flex;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
    input{
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        border-color: #aaa;
        border-style: solid;
        box-shadow: none;
        max-height: 2.5rem;
        padding: 11px 10px;
        outline: none;
        font-style: italic;
        color: #aaa;
        flex-grow: 1;
    }
    button{
        border: none;
        padding: 5px 10px;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
        background-color: #032d62;
        color: white;
        cursor: pointer;

        &:hover{
            background-color: #062142;
            transition: all 200ms ease;
        }
    }
`;

export const ListContainer = styled.div`

`;
