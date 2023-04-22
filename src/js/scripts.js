const dataLancamento = new Date('june 6 2023 20:00')
const segundos = document.querySelector('.segundos')
const minutos = document.querySelector('.minutos')
const horas = document.querySelector('.horas')
const dias = document.querySelector('.dias')
const timerContainer = document.querySelector('.contagem-regressiva')
const descricao = document.querySelector('.descricao')
const spinner = document.querySelector('.spinner')

function contagemRegressiva() {
    const dataAtual = new Date()
    const diferenca = dataLancamento-dataAtual;
    const segundosAteOlancamento = Math.floor(diferenca / 1000) % 60
    const minutosAteOlancamento = Math.floor(diferenca / 1000 / 60) %60
    const horasAteOlancamento = Math.floor(diferenca / 1000 /60 /60) %24
    const diasAteOlancamento = Math.floor(diferenca / 1000 /60 /60/24)
    
    segundos.textContent = segundosAteOlancamento < 10 ? "0"+ segundosAteOlancamento : segundosAteOlancamento
    minutos.innerHTML = minutosAteOlancamento < 10 ? "0"+minutosAteOlancamento : minutosAteOlancamento
    horas.innerHTML = horasAteOlancamento < 10 ? "0" + horasAteOlancamento : horasAteOlancamento
    dias.innerHTML = diasAteOlancamento < 10 ? "0" + diasAteOlancamento : diasAteOlancamento

}

const elementosDeLoading = ()=> {
    spinner.style.display = 'none'
    timerContainer.style.display = 'flex'
    descricao.style.display = 'block'
}

setTimeout(()=>{
    elementosDeLoading()
},1000)

setInterval(contagemRegressiva, 1000);

