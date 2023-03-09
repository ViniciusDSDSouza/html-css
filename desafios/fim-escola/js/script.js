var diaHoje = new Date()
var ultimoDia = new Date('2023-12-16')
var faltamMilissegundos = ultimoDia.getTime() - diaHoje.getTime()
var segundos = faltamMilissegundos / 1000
var minutos = segundos / 60
var horas = minutos / 60
var dias = horas / 24

var contagemDias = document.getElementById('dias')
var contagemHoras = document.getElementById('horas')
var contagemMinutos = document.getElementById('minutos')
var contagemSegundos = document.getElementById('segundos')

contagemDias.innerHTML = `<p>Faltam <strong>${parseInt(dias)}</strong> Dias</p>`
contagemHoras.innerHTML = `<p>Faltam <strong>${'??'}</strong> Horas</p>`
contagemMinutos.innerHTML = `<p>Faltam <strong>${'??'} </strong> Minutos</p>`
contagemSegundos.innerHTML = `<p>Faltam <strong>${'??'}</strong> Segundos</p>`