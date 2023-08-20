function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var date = new Date()
var hora = date.getHours()
msg.innerHTML= `Agora são ${hora} horas.`

if (hora >= 0 && hora <12) {
    "Bom dia!"
    img.src = 'fotomanha.png.jpg'
    document.body.style.background = '#e2cd9f'
}else if(hora >= 12 && hora <18){
    "Boa tarde!"
    img.src = 'fototarde.png.jpg'
    document.body.style.background = '#b99846f'
}else {
    "Boa noite!"
    img.src = 'fotonoite.png.jpg'
    document.body.style.background = '#515154'
}
}