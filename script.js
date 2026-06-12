const style = document.createElement('style');
style.textContent = `
  body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #00ff00;
  }

  .topbar {
    position: fixed;
    top: 0;
    left: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.9);
    color: black;
    padding: 10px 20px;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    font-family: 'Comic Sans MS', sans-serif;
    }

  .topbar nav {
    display: flex;
    gap: 20px;
    justify-content: center;
    }
  
  .topbar a{
    color: red;
    text-decoration: none;
    font-weight: bold;
    }
  
  .button {
    padding: 200px 300px;
    background: #ff0000;
    color: white;
    }

`;

let i = 0;

document.head.appendChild(style);
button.classList.add("DiddyButton");
button.addEventListener('keydown', changeBackground);

function changeBackground() {
  alert("Hello Bluds!");
  if (document.body.style.background === 'rgb(0, 255, 0)') {
    document.body.style.background = '#0000ff';
    return;
  }
  else if (document.body.style.background === 'rgb(0, 0, 255)') {
    document.body.style.background = '#ff0000';
    return;
  }
  else {
    document.body.style.background = '#00ff00';
    return;
  }
}

function myMethod() {
  alert("This is my method!");
}

function theMethod() {
  alert("YOU CLICKED THE OHIO BUTTON");
  let state = 0;
  const buttons = document.querySelectorAll('button');
  const interval = setInterval(() => {
    document.body.style.background = state % 2 ? '#000' : '#fff';
    buttons.forEach(btn => {btn.style.padding = Math.random() * 100 + 'px';});
    buttons.forEach(btn => {btn.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;});
    state += 1;
    if (state >= 1000) clearInterval(interval);
  }, 40);
}

function newMethod() {
  document.body.append("THIS IS TEXT THAT YOU CREATE IN THE WORLD");
}

function theOtherMethod() {
  alert("This method is peaceful as shit.");
  i++;
  button.classList.add("button " + String(i));
  button.addEventListener('mousedown', newFunction());
}

