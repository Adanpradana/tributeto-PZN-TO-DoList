const person = new Person();
const todoList = ["html", "javascript", "web API"];
const submitForms = document.forms["toDoform"];
const button = document.getElementById("button");

const clearTodoList = () => person.clearing;

const displayTodoList = () => {
  person.clearing;
  person.displaying;
};

function removeList(index) {
  todoList.splice(index, 1);
  displayTodoList();
  console.log(index);
}

submitForms.onsubmit = function (event) {
  event.preventDefault();
  person.triggerForm;
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


