var horaExata = new Date()
var hora = horaExata.getHours()

console.log(`Hora exata: ${hora} horas.`)

if (hora < 12) {
    console.log('Bom dia!')

} else if (hora <= 18) {
    console.log('Boa tarde!')

} else {
    console.log(`Boa noite!`)
}