function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano || Number(fano.value) < 1900) {
        window.alert('[ERRO] Verifique os dados e tente novamnte!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebeh.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemh.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultoh.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosoh.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebem.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemm.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultom.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosom.png')
            }
        }
        //res.style.textAlign = 'center' <- Centraliza apenas ao executar o script. No CSS parece ser o mais adequado.
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}