const menuEmail = document.querySelector(".navbar-email");
const desktopmenu = document.querySelector(".desktop-menu")
const menu_barra_lateral_mobile = document.querySelector(".menu")
const menumobile = document.querySelector(".mobile-menu")
const menucarritoicon = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail")

menucarritoicon.addEventListener("click", togglecarritoaside)
menuEmail.addEventListener("click", toggleDesktopmenu)
menu_barra_lateral_mobile.addEventListener("click", togglemobilemenu)

// se coloca el toggle por lo que se quiere mostrar con el cursor y desaparecer cuando no este 

function toggleDesktopmenu(){
    const isAsideclosed=aside.classList.contains("inactive")
    if(!isAsideclosed){
        aside.classList.add("inactive")
    }
    desktopmenu.classList.toggle("inactive");
}

function togglemobilemenu(){
    const isAsideclosed=aside.classList.contains("inactive")
    if(!isAsideclosed){
        // se abre el aside   
        aside.classList.add("inactive")
    }

    menumobile.classList.toggle("inactive")
}
function togglecarritoaside(){
    const isMobilemenuclosed=menumobile.classList.contains("inactive")
    const isAsideclosed=aside.classList.contains("inactive")
    if(!isMobilemenuclosed){
            menumobile.classList.add("inactive")
        }
    if(!isAsideclosed){
        desktopmenu.classList.add("inactive")
    }
    
    aside.classList.toggle("inactive")
    
}