const menuEmail = document.querySelector(".navbar-email");
const desktopmenu = document.querySelector(".desktop-menu")
menuEmail.addEventListener("click", toggleDesktopmenu)
// se coloca el toggle por lo que se quiere mostrar con el cursor y desaparecer cuando no este 
function toggleDesktopmenu(){
    desktopmenu.classList.toggle("inactive");
}