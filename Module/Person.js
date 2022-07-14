class Person {
  constructor() {
    this._todoBody = document.getElementById("todoBody");
    this._todoList = [];
  }
  get clearing() {
    while (this._todoBody.firstChild) {
      this._todoBody.removeChild(this._todoBody.firstChild);
    }
  }

  get displaying() {
    for (let i = 0; i < todoList.length; i++) {
      const todo = todoList[i];
      const searchText = document.getElementById("search").value;
      const goTolowerCase = searchText.toLowerCase();
      if (todo.toLowerCase().includes(goTolowerCase)) {
        this.createTodoList(i, todo);
      }
    }
    // person.todoListValue;
  }
  createTodoList = (index, todo) => {
    const tr = document.createElement("tr");
    const tdButton = document.createElement("td");
    tr.appendChild(tdButton);

    const tdTodo = document.createElement("td");
    tdTodo.textContent = todo;
    tr.appendChild(tdTodo);

    const todoBody = document.getElementById("todoBody");
    todoBody.appendChild(tr);

    const createButton = document.createElement("input");
    createButton.type = "button";
    createButton.value = "Done";
    createButton.onclick = function (index) {
      removeList(index);
    };
    tdButton.appendChild(createButton);
  };

get triggerForm(){
  const todo = document.forms["toDoform"]["todo"];
  const todoValue = todo.value;
  todoList.push(todoValue);
  console.log(todoList);
  submitForms.reset();
  displayTodoList();
}

}
