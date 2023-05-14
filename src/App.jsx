import React from 'react';
import TodoViewForm from "./components/TodoViewForm";
import TodoAddForm from "./components/TodoAddForm";
function App() {
    return (
        <div>
            <h1>hello, react</h1>
            <TodoViewForm />
            <TodoAddForm />
        </div>
    );
}

export default App;