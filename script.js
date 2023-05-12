var quadrado = document.querySelector("#quadrado");
var topDistance = 200;
var leftDistance = 200;
quadrado.style.top = topDistance + "px";
quadrado.style.left = leftDistance + "px";

document.onkeydown = teclado;
function teclado(e){
    if (e.keyCode == 39){
        leftDistance = leftDistance + 15;
        quadrado.style.left = leftDistance + "px";

    }else if (e.keyCode == 37){
        leftDistance = leftDistance - 15;
        quadrado.style.left = leftDistance + "px";

    }else if (e.keyCode == 38){
        topDistance = topDistance - 15;
        quadrado.style.top = topDistance + "px";

    }else if (e.keyCode == 40){
        topDistance = topDistance + 15;
        quadrado.style.top = topDistance + "px";
    }
}
