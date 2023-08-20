function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.value.length ==0  || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada : ${idade}`
        let gênero = ''
        let img = document.createElement ('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade <13){
                //Bebe
                img.setAttribute('src', 'fotobebehomem.jpg')
            }else if(idade <21){
                //Jovem
                img.setAttribute('src', 'fotocriancahomem.jpg')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'fotohomemjovem.jpg')
            }else {
                //Idoso
                img.setAttribute('src', 'fotoidosohomem.jpg')
            }

        }else if (fsex [1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade <13){
                //Criança
                img.setAttribute('src', 'fotobebemulher.jpg')
            }else if(idade <21){
                //Jovem
                img.setAttribute('src', 'fotomulhercrianca.jpg')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'fotomulherjovem.jpg')
            }else {
                //Idoso
                img.setAttribute('src', 'fotoidosamulher.jpg')
            }
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
}