function validAlert(event) {
  event.preventDefault();
  if (document.getElementById('login').value === 'tryber@teste.com'
    && document.getElementById('senha').value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

document.getElementById('button-header').addEventListener('click', validAlert);

const button = document.getElementById('submit-btn');
button.disabled = 'true';

let contador = 0;

function habilitDesabilitButton() {
  if (document.querySelector('#agreement').value === 'on') {
    contador += 1;
  }
  if (contador % 2 !== 0) {
    button.disabled = false;
    button.style.backgroundColor = 'rgb(47 216 184)';
  } else {
    button.disabled = true;
    button.style.backgroundColor = 'rgb(33 148 126)';
  }
}

document.querySelector('#agreement').addEventListener('click', habilitDesabilitButton);
