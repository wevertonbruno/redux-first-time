import styled from 'styled-components';

export const TodoContainer = styled.div`
    background-color: #fefefe;
    box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
    border-radius: 5px;

    .content{
        padding: 10px 20px;
    }

    .actions{
        display: flex;
        justify-content: end;
        background-color: #ddd;
        padding: 10px 20px;

        img{
            width: 20px;
            height: 20px;
        }
    }
`;
