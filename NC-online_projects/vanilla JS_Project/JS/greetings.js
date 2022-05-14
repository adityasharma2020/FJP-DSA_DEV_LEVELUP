const loginForm = document.querySelector('#login_form');
const loginContainer = document.querySelector('.login_container');
const loginInput = document.querySelector('#login_form input');
const greetings = document.querySelector('#greetings');
console.dir(greetings);

REMOVE_CLASS = 'hidden';
USERNAME_KEY = 'username';
// greetings.innerText = ``;

function handleLoginSubmit(event) {
  event.preventDefault();

  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY,username);
  loginContainer.classList.add('hidden');
  paintGreetings(username);

  // const username = loginInput.value
}

function paintGreetings(username) {
  greetings.classList.remove(REMOVE_CLASS);
  greetings.innerText = `hello , ${username}`;
}
const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  loginContainer.classList.remove(REMOVE_CLASS);
  loginForm.addEventListener('submit', handleLoginSubmit);
} else {
  paintGreetings(savedUserName);
}
