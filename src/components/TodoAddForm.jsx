import React from "react";
import ReactDOM from "react-dom";
function TodoAddForm() {
    return (
        <div>
            <p>todo追加</p>
            <form name="addtodoForm" id="addtodoForm">
                <label htmlFor="addtodo">todo名</label>
                <input type="text" id="addtodo" name="addtodo" />
                <button type="submit" id="subbtn">追加</button>
            </form>
        </div>
    );
}

export default TodoAddForm;
