var diaHoje = new Date() // Retorna Data Atual em forma de object

var ultimoDia = new Date('2023-12-16') // Data Final

// Puxando elementos HTML
var contagemDias = document.getElementById('dias')
var contagemHoras = document.getElementById('horas')
var contagemMinutos = document.getElementById('minutos')
var contagemSegundos = document.getElementById('segundos')

function atualizarContagem() {

    // Retorna a diferença em milissegunsdos das duas datas
    var faltamMilissegundos = ultimoDia.getTime() - diaHoje.getTime()

    // Millisegundos Para Dias
    var diasFaltam = faltamMilissegundos / (1000 * 60 * 60 *24)

    // Horas Restantes
    var horaAtual = new Date().getHours()
    var horasFaltam = 24 - horaAtual

    // Minutos Restantes
    var minAtual = new Date().getMinutes()
    var minFaltam = 60 - minAtual

    // Segundos Restantes
    var secAtual = new Date().getSeconds()
    var secFaltam = 60 - secAtual
    // Contagem Regressiva
   contagemDias.innerHTML = `<p>Faltam <strong>${parseInt(diasFaltam)}</strong> Dias</p>`// Dias

   contagemHoras.innerHTML = `<p>Faltam <strong>${parseInt(horasFaltam)}</strong> Horas</p>`// Horas

   contagemMinutos.innerHTML = `<p>Faltam <strong>${minFaltam} </strong> Minutos</p>`// Minutos

   contagemSegundos.innerHTML = `<p>Faltam <strong>${secFaltam}</strong> Segundos</p>`// Segundos

}
setInterval(atualizarContagem,1000)