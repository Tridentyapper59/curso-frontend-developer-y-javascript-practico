const menuEmail = document.querySelector(".navbar-email");
const desktopmenu = document.querySelector(".desktop-menu")
const menu_barra_lateral_mobile = document.querySelector(".menu")
const menumobile = document.querySelector(".mobile-menu")
const menucarritoicon = document.querySelector(".navbar-shopping-cart")
const shoppingcartcontainer = document.querySelector("#shoppingcartcontainer")
const cardscontainer = document.querySelector(".cards-container")

menucarritoicon.addEventListener("click", togglecarritoaside)
menuEmail.addEventListener("click", toggleDesktopmenu)
menu_barra_lateral_mobile.addEventListener("click", togglemobilemenu)

// se coloca el toggle por lo que se quiere mostrar con el cursor y desaparecer cuando no este 

function toggleDesktopmenu(){
    const isAsideclosed=shoppingcartcontainer.classList.contains("inactive")
    if(!isAsideclosed){
        shoppingcartcontainer.classList.add("inactive")
    }
    desktopmenu.classList.toggle("inactive");
}

function togglemobilemenu(){
    const isAsideclosed=shoppingcartcontainer.classList.contains("inactive")
    if(!isAsideclosed){
        // se abre el aside   
        aside.classList.add("inactive")
    }

    menumobile.classList.toggle("inactive")
}
function togglecarritoaside(){
    const isMobilemenuclosed=menumobile.classList.contains("inactive")
    const isAsideclosed=shoppingcartcontainer.classList.contains("inactive")
    if(!isMobilemenuclosed){
            menumobile.classList.add("inactive")
        }
    if(!isAsideclosed){
        desktopmenu.classList.add("inactive")
    }
    
    shoppingcartcontainer.classList.toggle("inactive")
    
}

const productlist=[];
productlist.push({
    name:"Bike",
    price:120,
    Image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productlist.push({
    name:"Pantalla",
    price:320,
    Image:"https://www.tradeinn.com/f/13821/138212880/samsung-monitor-gaming-odyssey-g3-24-full-hd-lcd-140hz.jpg"
})
productlist.push({
    name:"Computador",
    price:650,
    Image:"https://cdn.shopify.com/s/files/1/0555/5100/0726/products/AX6-inalambrico-24ips_50b4ab2e-d5d2-4b94-829d-851c241ad733_1024x1024.jpg?v=1676569661"
})


function renderproducts(arr){
    for (product of arr){
        const productCard=document.createElement("div");
        productCard.classList.add("product-card");
    
        const productimg=document.createElement("img");
        productimg.setAttribute("src", product.Image);
    
        const productinfo=document.createElement("div");
        productinfo.classList.add("product-info");
    
        const productinfodiv=document.createElement("div");
       
        const productprice=document.createElement("p")
        productprice.innerText="$"+product.price;
    
        const productname=document.createElement("p")
        productname.innerText=product.name;
    
        productinfodiv.appendChild(productprice)
        productinfodiv.appendChild(productname)
    
        const productinfofigure=document.createElement("figure");
        const productimgcart=document.createElement("img");
        productimgcart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
    
        productinfofigure.appendChild(productimgcart)
    
        productinfo.appendChild(productinfodiv)
        productinfo.appendChild(productinfofigure)
    
        productCard.appendChild(productimg)
        productCard.appendChild(productinfo)
        
        cardscontainer.appendChild(productCard)
    }
}