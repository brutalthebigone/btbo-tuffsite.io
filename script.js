const style = document.createElement('style');
style.textContent = `
  body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
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

  .csa p {
    font-size: 50px;
    color: #333;
    }
  .csa h1 {
    font-size: 100px;
    color: #222;
    }
  .projects {
    background: #f0f0f0;
    color: #333;
    font-family: 'Comic Sans MS', sans-serif;
    justify-content: center;
    align-items: center;}
  .projects button {
    padding: 20px 40px;
    background: #007BFF;
    color: white;
    border: none;}
`;

document.head.appendChild(style);

const npb = document.getElementById("nextPageButton");
if (npb) {
  npb.addEventListener('click', function() {
    window.location.href = "projects.html";
  });
  npb.style.padding = "20px 40px";
}

const pres = document.getElementById("presentation");
if (pres) {
  pres.addEventListener('click', function() {
    window.location.href = "https://docs.google.com/presentation/d/1c1Onk6McfWvDY4h9tbMFGYinuM7FKd_tXhKfC9Yl4mk/edit?slide=id.g3e54667fe49_0_63#slide=id.g3e54667fe49_0_63";
  });
}



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
    document.body.style.background = state % 4 === 0 ? '#0f0' : state % 4 === 1 ? '#f0f' : state % 4 === 2 ? '#000' : '#fff';
    buttons.forEach(btn => {btn.style.padding = Math.random() * 100 + 'px';});
    buttons.forEach(btn => {btn.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;});
    buttons.forEach(btn => {btn.style.fontSize = Math.random() * 50 + 'px';});
    state += 1;
    if (state >= 1000) clearInterval(interval);
  }, 40);
}

function newMethod() {
  alert("My Time");
}

function theOtherMethod() {
  alert("This method is peaceful as shit.");
}

function changeBackgroundTwo() {
  document.body.style.background = '#47aaeb'
  const buttons = document.querySelectorAll('button');
  buttons.forEach(btn => {btn.style.background = "blue";});
  let response = prompt("Here's a more pleasant color. Do you like it?");
  document.getElementById("changingText").textContent = "You answered " + response + ". Interesting....";
}

