import React from 'react';
import TodoViewForm from "./components/TodoViewForm";
import TodoAddForm from "./components/TodoAddForm";
function App() {
    return (
        <div>
            <TodoViewForm />
            <TodoAddForm />
        </div>
    );
}

export default App;