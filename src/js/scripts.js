const dataLancamento = new Date('june 6 2023 20:00')
const segundos = document.querySelector('.segundos')
const minutos = document.querySelector('.minutos')
const horas = document.querySelector('.horas')
const dias = document.querySelector('.dias')
const timerContainer = document.querySelector('.contagem-regressiva')
const descricao = document.querySelector('.descricao')
const spinner = document.querySelector('.spinner')

setTimeout(()=>{
    adicionarRemoverElementosDaTela ()
},1000)

setInterval(contagemRegressiva, 1000);

 function adicionarRemoverElementosDaTela () {
    spinner.style.display = 'none'
    timerContainer.style.display = 'flex'
    descricao.style.display = 'block'
}

function contagemRegressiva() {
    const { segundosAteOlancamento, minutosAteOlancamento, horasAteOlancamento, diasAteOlancamento} = calcularDataAteOLancamento()

    segundos.textContent = checarSeMenorQueZero(segundosAteOlancamento)
    minutos.innerHTML = checarSeMenorQueZero(minutosAteOlancamento)
    horas.innerHTML =checarSeMenorQueZero(horasAteOlancamento)
    dias.innerHTML = checarSeMenorQueZero(diasAteOlancamento)

}

function checarSeMenorQueZero(unidadeDeTempo) {
    return unidadeDeTempo < 10 ? "0" + unidadeDeTempo : unidadeDeTempo
}

function calcularDataAteOLancamento() {
    const dataAtual = new Date()
    const diferenca = dataLancamento - dataAtual
    const segundosAteOlancamento = Math.floor(diferenca / 1000) % 60
    const minutosAteOlancamento = Math.floor(diferenca / 1000 / 60) % 60
    const horasAteOlancamento = Math.floor(diferenca / 1000 / 60 / 60) % 24
    const diasAteOlancamento = Math.floor(diferenca / 1000 / 60 / 60 / 24)

    return {segundosAteOlancamento, minutosAteOlancamento, horasAteOlancamento, diasAteOlancamento}
}




