const button = document.getElementById('button');
const nome = document.getElementById('nome');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const resultado = document.getElementById('resultado');

const getText = (imc) => {
    if(imc > 40) return 'Obesidade grau III';
    if(imc > 35) return 'Obesidade grau II';
    if(imc > 30) return 'Obesidade grau I';
    if(imc > 25) return 'Levemente acima do peso';
    if(imc > 18.5) return 'Peso ideal';
    return 'Abaixo do peso';
}

const imcCalc = () => {
    if(!peso.value || !altura.value || !nome.value) return resultado.textContent = 'Preencha todos os campos';

    const valorImc = (+peso.value / (+altura.value * +altura.value).toFixed(1));
    resultado.textContent = `${nome.value} - ${getText(valorImc)}` ;
}

button.addEventListener('click', imcCalc);
