import React, { useState, useCallback } from 'react';
import styled from 'styled-components'
import { FaPlus } from "react-icons/fa6";

const TodoInsertBlock = styled.div`
    .formbox {
        background:#495057;
        display:flex;
        input { flex:1; background:none; border:none; 
            padding:1rem 0.5rem; font-size:1.125rem; 
            color:#fff; outline:none; 
            &::placeholder { color:#dee2e6 }
        }
        button { font-size:1.5rem;
            padding:0 1rem; 
            background:#868e96;
            border:none; 
            color:#fff; 
            cursor:pointer; 
        }
    }
`

const TodoInsert = ({onInsert}) => {

    const [text, setText] = useState("")

    const onSubmit = useCallback((e)=>{
        e.preventDefault()
        onInsert(text)
        setText("")
    }, [text])

    const onChange = useCallback((e)=>{
        console.log(e.target.value)
        setText(e.target.value)
    }, [text])

    return (
        <TodoInsertBlock>
            <form className="formbox" onSubmit={onSubmit}>
                <input type="text" placeholder="할 일을 입력하세요." onChange={onChange} value={text} />
                <button type="submit"><FaPlus /></button>
            </form>
        </TodoInsertBlock>
    );
};

export default TodoInsert;