let btn = document.getElementById('btn');
let icon = document.getElementById('icon');
let menu = document.getElementById('menu');
let Mclose = document.getElementById('close');
let menuContainer = document.querySelector('.navbar__menu-container')
let toggle = false




function hover(){
    icon.style.transition = 'rotate 0.3s'
    icon.style.transform = 'rotate(0)'   
}
 
function out(){
    icon.style.transform = 'rotate(-45deg)'
    
}


if(toggle){
    menu.style.display = 'none'
    Mclose.style.display = 'block'
    menuContainer.style.display = 'unset'

}else{
    Mclose.style.display = 'none'
    menu.style.display = 'block'
    menuContainer.style.display = 'none'
}




function openMenu(tog){
    toggle = true
    console.log(toggle)

    if(toggle){
        menu.style.display = 'none'
        Mclose.style.display = 'block'
        menuContainer.style.display = 'unset'
    
    }else{
        Mclose.style.display = 'none'
        menu.style.display = 'block'
        menuContainer.style.display = 'none'
    }

   

}

function closeMenu(tog){
    toggle = false
    console.log(toggle)

    if(toggle){
        menu.style.display = 'none'
        Mclose.style.display = 'block'
        menuContainer.style.display = 'unset'
    
    }else{
        Mclose.style.display = 'none'
        menu.style.display = 'block'
        menuContainer.style.display = 'none'
    }
}

