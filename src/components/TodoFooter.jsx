import React from 'react';
import styled from 'styled-components'
import { useTodosDispatch } from '../context/todoContext';

const TodoFooterBlock = styled.div`
    padding:30px; text-align:center; 
    button { background:#000; color:#fff; padding:10px;
        border-radius:5px; margin:0 10px; 
    }
`

const TodoFooter = () => {
    const {onFinishRemove, allRemove } = useTodosDispatch();
    return (
        <TodoFooterBlock>
            <button onClick={onFinishRemove }>완료일정 삭제</button>
            <button onClick={allRemove}>전체 삭제</button>
        </TodoFooterBlock>
    );
};

export default TodoFooter;