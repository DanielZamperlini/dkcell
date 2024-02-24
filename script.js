//mudar cor do css
const button = document.getElementById('changeColorButton');
let number = 0;

button.addEventListener('click', function () {
  const ativar = document.querySelector('body');
  if (number === 0) {
    number = 1;
  } else {
    ativar.classList.toggle('ativo');
    number = 0;
    console.log('certo');
  }
});
