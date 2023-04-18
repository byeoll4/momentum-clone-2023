const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting");
const todoForm = document.querySelector(".todo-form"); // 4.18 추가

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(a) {
  greeting.innerText = `Hello, ${a}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  todoForm.classList.remove(HIDDEN_CLASSNAME); // 4.18 추가
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

function focusLogin() {
  loginInput.placeholder = "";
}
function blurLogin() {
  loginInput.placeholder = "What is your Name?";
}

loginInput.addEventListener("focus", focusLogin);
loginInput.addEventListener("blur", blurLogin);

if (saveUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  todoForm.classList.add(HIDDEN_CLASSNAME); // 4.18 추가
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show th greeting
  paintGreetings(saveUsername);
}
