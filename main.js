const menuEmail = document.querySelector(".navbar-email");
const desktopmenu = document.querySelector(".desktop-menu")
const menu_barra_lateral_mobile = document.querySelector(".menu")
const menumobile = document.querySelector(".mobile-menu")

menuEmail.addEventListener("click", toggleDesktopmenu)
menu_barra_lateral_mobile.addEventListener("click", togglemobilemenu)

// se coloca el toggle por lo que se quiere mostrar con el cursor y desaparecer cuando no este 

function toggleDesktopmenu(){
    desktopmenu.classList.toggle("inactive");
}

function togglemobilemenu(){
    menumobile.classList.toggle("inactive")
}