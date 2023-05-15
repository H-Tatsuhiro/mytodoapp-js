import React from "react";
import { useForm } from "react-hook-form";

function TodoAddForm() {
    const { register, handleSubmit, formState: { errors }} = useForm({
        mode: "all"
    });

    const onSubmit = (data) => {
        const newDiv = document.createElement("div");
        newDiv.className = "todos";
        newDiv.id = "div-" + data.todoName;
        const newTodoInput = document.createElement("input");
        newTodoInput.type = "checkbox";
        newTodoInput.id = data.todoName;
        newTodoInput.className = "todoinput";
        newTodoInput.name = data.todoName;
        newDiv.appendChild(newTodoInput);
        newTodoInput.checked = true;
        const newTodoLabel = document.createElement("label");
        newTodoLabel.htmlFor = data.todoName;
        newTodoLabel.textContent = data.todoName;
        newDiv.appendChild(newTodoLabel);
        var pardiv = document.getElementById("last");
        pardiv.before(newDiv);
    };

    return (
        <div>
            <p>todo追加</p>
            <form name="addtodoForm" id="addtodoForm" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="addtodo">todo名</label>
                <input type="text" id="addtodo" {...register('todoName', { required: true })}/>
                {errors.todoName && <div>入力必須項目</div>}
                <button type="submit" id="subbtn">追加</button>
            </form>
        </div>
    );
}

export default TodoAddForm;
