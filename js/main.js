let menuVisible = false;

// Función que muestra u oculta el menu

function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

// Función que oculta el menu al seleccionar una opción

function seleccionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Función que aplica las animaciones de las habilidades

/*function efectoHabilidades() {
    let habilidades = document.getElementById("habilidades");
    let distancia_habilidades = window.innerHeight - habilidades.getBoundingClientRect().top;
    if (distancia_habilidades>=300) {
        let habilidad = document.getElementsByClassName("progreso");
        habilidad[0].classList.add("office");
        habilidad[1].classList.add("autocad");
        habilidad[2].classList.add("htmlcss");
        habilidad[3].classList.add("cycmasmas");
        habilidad[4].classList.add("comunicacion");
        habilidad[5].classList.add("trabajoequipo");
        habilidad[6].classList.add("liderazgo");
        habilidad[7].classList.add("ingles");
    }
}*/

// Detección del scrolling para aplicar la animación de las habilidades

window.onscroll = function () {
    efectoHabilidades();
}