function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    // var res = document.querySelector('div#res') // outra maneira de fazer

    if(formAno.value.length == 0 || Number(formAno.value) > ano) {
        window.alert('verifique os dados e tente novamente!')
    } else {
        //window.alert('tudo ok')
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        //res.innerHTML = `idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'homem'

            if(idade >= 0 && idade < 10){
                // criança
                
            } else if (idade < 21){
                //jovem

            } else if(idade < 50){
                // adulto

            } else {
                // idoso
            }

        } else if(fsex[1].checked){
            genero = 'Mulher'

            if(idade >= 0 && idade < 10){
                // criança

            } else if (idade < 21){
                //jovem

            } else if(idade < 50){
                // adulto

            } else {
                // idoso
            }

        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
} 