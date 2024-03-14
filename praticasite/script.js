function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()

    msg.innerText = `Agora são ${hora}h.`

    if (hora >= 0 && hora < 12) {
        // BOA DIA!
        img.src = 'imgBomDia.png'
        document.body.style.background = '#e2cd9f'

    } else if (hora >= 12 && hora < 17) {
        // BOA TARDE!
        img.src = 'imgBoaTarde.png'
        document.body.style.background = '#b9846f'

    } else if (hora >= 17 && hora < 18 ) {
        // BOM FINAL DE TARDE!
        img.src = 'imgCrepusculo.png'

    
    } else {
        // BOA NOITE!
        img.src = 'imgBoaNoite.png'
        document.body.style.background = '#515154'
    }

}