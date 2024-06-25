import React, { createContext, useContext, useState } from 'react';

// 초기 상태
const initialState = [];

// Context 생성
const TodosStateContext = createContext();
const TodosDispatchContext = createContext();

// Provider 컴포넌트
const TodosProvider = ({ children }) => {
    const [todos, setTodos] = useState(initialState);

    const onInsert = (text) => {
        setTodos(prevTodos => [{ id: Date.now(), text, checked: false }, ...prevTodos]);
    };

    const onToggle = (id) => {
        setTodos(prevTodos => 
            prevTodos.map(todo => 
                todo.id === id ? { ...todo, checked: !todo.checked } : todo
            )
        );
    };

    const onRemove = (id) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };

    const onFinishRemove = () => {
        setTodos(prevTodos => prevTodos.filter(todo => !todo.checked));
    };

    const allRemove = () => {
        setTodos([]);
    };

    return (
        <TodosStateContext.Provider value={todos}>
            <TodosDispatchContext.Provider value={{ onInsert, onToggle, onRemove, onFinishRemove, allRemove }}>
                {children}
            </TodosDispatchContext.Provider>
        </TodosStateContext.Provider>
    );
};

// 커스텀 훅
const useTodosState = () => {
    const context = useContext(TodosStateContext);
    if (!context) {
        throw new Error('useTodosState must be used within a TodosProvider');
    }
    return context;
};

const useTodosDispatch = () => {
    const context = useContext(TodosDispatchContext);
    if (!context) {
        throw new Error('useTodosDispatch must be used within a TodosProvider');
    }
    return context;
};

export { TodosProvider, useTodosState, useTodosDispatch };