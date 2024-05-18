let todoItemsList = [
    {id : 1, title: "First Todo item", completed: false},
    {id : 2, title: "Second Todo item", completed: false},
    {id : 3, title: "3rd Todo item", completed: true},
];
//  console.log(todoItemsList)

    const todoForm = document.getElementById("todo-form");

    
// Map and Render the todo List Start______________________________

    const render = () =>{

        const todoList = document.getElementById("todo-list");

        function todoItems (todo) {
            const mytask = `
                <li>
                    <span class="${todo.completed && "line-through"}">${todo.title}</span>
                    <button ${todo.completed && "disabled"} class="btn" ${todo.completed ? "btn-cursor-disabled" : "completed-btn"}">✅</button>|
                    <button todo-id="${todo.id}" class="btn delete-todo">⛔</button>
                    <button todo-id="${todo.id}" class="complet-btn btn">✅</button>
                </li>
            `;
            return mytask;
            };

            const mapedTodos = todoItemsList.map(todoItems);

            todoList.innerHTML = mapedTodos.join("");

            deleteButtonsEvent();
    }
    
// Map and Render the todo List Start_____________________________

// New Task input Area Start____________________________________

    todoForm.addEventListener('submit', function(event){
        event.preventDefault();
        const inputData = document.getElementById('input-field');
        // console.log(inputData.value);

        todoItemsList.push({
            id: Date.now(),
            title: inputData.value,
            completed: false
        })
        render()
    });

// New Task input Area End____________________________________
/////////////////////////////////////////////////////////////////
function completedBtnEvent() {
    const completedBtn = document.querySelectorAll(".complet-btn");
    // console.log(completedBtn, "bnt clicked");

    completedBtn.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
        const completedTodoId = parseInt(event.target.attributes["todo-id"].value);
        console.log(completedTodoId);
        todoItemsList = todoItemsList.filter(function (todo) {
        if (todo.id === completedTodoId) {
            console.log("clicked")
        } 
        else {
            console.log("clicked done")
        }
        });

        render();
    });
    });
}
////////////////////////////////////////////////////////////////
// Delete Button Area Start__________________________________

function deleteButtonsEvent() {
    const deleteTodoBtns = document.querySelectorAll(".delete-todo");

    deleteTodoBtns.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
        const deleteTodoId = parseInt(event.target.attributes["todo-id"].value);
        // console.log(deleteTodoId);
        todoItemsList = todoItemsList.filter(function (todo) {
        if (todo.id === deleteTodoId) {
            return false;
        } 
        else {
            return true;
        }
        });

        render();
    });
    });
}


// Delete Button Area End__________________________________

    
    render();
    
    