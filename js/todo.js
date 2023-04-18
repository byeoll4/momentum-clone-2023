const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function sexyFilter(todo) {
  const li = event.target.parentElement;
  return todo.id !== parseInt(li.id);
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(sexyFilter);
  //toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.addEventListener("click", deleteToDo);
  button.innerText = "❌";
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveTodos();
}

function focusForm() {
  toDoInput.placeholder = "";
}
function blurForm() {
  toDoInput.placeholder = "Today's To Do";
}
toDoInput.addEventListener("focus", focusForm);
toDoInput.addEventListener("blur", blurForm);

toDoForm.addEventListener("submit", handleToDoSubmit);

const saveToDos = localStorage.getItem(TODOS_KEY);
//TODOS_KEY === todos, localStorage에서 todos라는 keyname을 가진 keyValue들을 가져와 변수로 지정
if (saveToDos !== null) {
  const parsedToDos = JSON.parse(saveToDos);
  toDos = parsedToDos;
  //saveToDos가 null이 아니면 아래 코드를 실행.
  //toDos === parsedToDos === JSON.parse(saveToDos) === localstorage안에 있는 todos라는 keyName을 가진 keyValue를 배열 형태로 만든 것
  parsedToDos.forEach(paintToDo);
}
