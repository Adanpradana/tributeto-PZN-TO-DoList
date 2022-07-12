const todoList = ["html", "javascript", "web API"];
const submitForms = document.forms["toDoform"];
const button = document.getElementById("button");

const clearTodoList = () => {
  const todoBody = document.getElementById("todoBody");
  while (todoBody.firstChild) {
    todoBody.removeChild(todoBody.firstChild);
  }
};

function removeList(index) {
  todoList.splice(index, 1);
  displayTodoList();
  console.log(index);
}

const createTodoList = (index, todo) => {
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

const displayTodoList = () => {
  clearTodoList();
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const searchText = document.getElementById("search").value;
    const goTolowerCase = searchText.toLowerCase();
    if (todo.toLowerCase().includes(goTolowerCase)) {
      createTodoList(i, todo); //method
    }
  }
};

submitForms.onsubmit = function (event) {
  event.preventDefault();
  const todo = document.forms["toDoform"]["todo"];
  const todoValue = todo.value;
  todoList.push(todoValue);
  console.log(todoList);
  submitForms.reset();
  displayTodoList();
};

const searchInput = document.getElementById("search");
searchInput.onchange = () => {
  console.log("onchange");
};
searchInput.onkeyup = () => {
  displayTodoList();
};
searchInput.onkeydown = () => {
  displayTodoList();
};

displayTodoList();

//search function

function search() {}
