function Event() {
    window.addEventListener('DOMContentLoaded', function () {
        var addtodoform = document.getElementById("addtodoForm");
        addtodoform.addEventListener("submit", function (e) {
            e.preventDefault();
            const newtodotitle = document.getElementById("addtodo").value;
            alert(newtodotitle);

            const newDiv = document.createElement("div");
            newDiv.className = "todos";
            newDiv.id = "div-" + newtodotitle;
            const newTodoInput = document.createElement("input");
            newTodoInput.type = "checkbox";
            newTodoInput.id = newtodotitle;
            newTodoInput.className = "todoinput";
            newTodoInput.name = newtodotitle;
            newDiv.appendChild(newTodoInput);
            newTodoInput.checked = true;
            const newTodoLabel = document.createElement("label");
            newTodoLabel.htmlFor = newtodotitle;
            newTodoLabel.textContent = newtodotitle;
            newDiv.appendChild(newTodoLabel);
            var pardiv = document.getElementById("last");
            pardiv.before(newDiv);
        })

        var todoviewform = document.getElementById("todoviewform");
        todoviewform.addEventListener("submit", function (e) {
            e.preventDefault();
            const matches = document.querySelectorAll(".todos > input");

            for (let i in matches) {
                if (matches[i].checked) {
                    var el = document.getElementById("div-" + matches[i].id);
                    el.remove();
                }
            }
        })
    })
}

export default Event;