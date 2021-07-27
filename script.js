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
