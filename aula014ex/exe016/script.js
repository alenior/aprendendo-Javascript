function contar() {
    let ini = document.getElementById('iinicio')
    let fim = document.getElementById('ifim')
    let passo = document.getElementById('ipasso')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inváldo! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //contagem crescente.
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}` // Código web: U+1F449.
            }
        } else {
            //contagem decrescente.
            for(let c = i; c >= f; c-= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}