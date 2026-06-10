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
    padding: 400px 500px;
    background: #ff0000;
    color: white;
    size: 200px;
    }

`;

const button = document.createElement('button');
button.textContent = "This button will do many a thing";
button.addEventListener('click', changeBackground);

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
  for (let i = 0; i < 1000; i++) {
    document.body.style.background = 'rgb(255, 255, 255)';
    setTimeout(1000);
      document.body.style.background = 'rgb(0, 0, 0)';
  }
}

function theOtherMethod() {
  alert("This method is peaceful as shit.");
  document.body.appendChild(button);
}

document.body.appendChild(button);
document.head.appendChild(style);