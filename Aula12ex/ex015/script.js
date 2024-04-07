function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    // var res = document.querySelector('div#res') // outra maneira de fazer

    if(formAno.value.length == null || formAno.value.length == 0 ){
        window.alert("Valor não pode ser zero ou vazio")

    } else if (Number(formAno.value) > ano) {
        window.alert('verifique os dados e tente novamente!')

    } else {
        //window.alert('tudo ok')
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        //res.innerHTML = `idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'img')

        if(fsex[0].checked){
            //genero = 'homem'

            if(idade >= 0 && idade < 15){
                genero = 'criança'
                img.setAttribute('src', 'img/bebeMasculino.png')
                
            } else if (idade < 21){
                genero = 'jovem'
                img.setAttribute('src', 'img/jovemHomem.png')
                
            } else if(idade < 50){
                genero = 'adulto'
                img.setAttribute('src', 'img/adultoHomem.png')

            } else {
                genero = 'idoso'
                img.setAttribute('src', 'img/idosoHomem.png')
            }

        } else if(fsex[1].checked){
            //genero = 'mulher'

            if(idade >= 0 && idade < 15){
                // criança
                genero = 'criança'
                img.setAttribute('src', 'img/bebeFeminino.png')

            } else if (idade < 21){
                //jovem
                genero = 'jovem'
                img.setAttribute('src', 'img/jovemMulher.png')

            } else if(idade < 50){
                // adulto
                genero = 'adulto'
                img.setAttribute('src', 'img/adultoMulher.png')

            } else {
                // idoso
                genero = 'idoso'
                img.setAttribute('src', 'img/idosaFeminino.png')
            }

        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
} 