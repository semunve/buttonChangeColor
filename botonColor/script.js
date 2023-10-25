const boton=document.querySelector("button");
const color=document.getElementById("color");


function colorAleatorio(){
    let digitos="0123456789ABCDF";
    let color="#";


    for(let i=0;i<6;i++){
        let aleatorio=Math.floor(Math.random()*16);
        color=color+digitos[aleatorio];
    }
    return color;
}

boton.addEventListener("click",function(){
    let cAleatorio=colorAleatorio();
    document.body.style.backgroundColor=cAleatorio;
    color.textContent=cAleatorio;
})