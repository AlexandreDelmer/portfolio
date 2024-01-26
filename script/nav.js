let menu = document.querySelectorAll(".menu a")

// function pour appliquer un effet au survol des listes du menu
function displaySelectMenuList (){
    for(let i = 0; i < menu.length; i++){
        // Ecoute au passage sur l'une des listes du menu
        menu[i].addEventListener("mouseover", () => {
            //Ajouter la classe au survol d'une liste

            for(let j = 0; j < menu.length; j++){
                menu[j].classList.add("effectOnOver")
            }

            menu[i].classList.remove("effectOnOver")
        })

        menu[i].addEventListener("mouseout", ()=> {
            for(let j = 0; j < menu.length; j++){
                menu[j].classList.remove("effectOnOver")
            }
        })
    }
}

displaySelectMenuList()

// Affiche le menu lorsqu'on clic sur le menu mobile
let menuToggle = document.querySelector('.menu_toggle')

menuToggle.addEventListener('click', ()=>{
    let navMobile = document.querySelector('.nav_mobile')
    let body = document.body
    
    navMobile.classList.toggle("toggle-element")
    body.classList.toggle("overflow-hidden")
})

let navMobileMenu = document.querySelectorAll('.nav_mobile_menu a')

for(let i = 0; i < navMobileMenu.length; i++){
    navMobileMenu[i].addEventListener('click', ()=>{
        let navMobile = document.querySelector('.nav_mobile')
        let body = document.body

        navMobile.classList.toggle("toggle-element")
        body.classList.toggle("overflow-hidden")
    })
}

//function pour écouter que le DOM soit bien chargé
document.addEventListener("DOMContentLoaded", ()=> {
    let backToTop = document.getElementById("backToTop")

    //Function pour faire apparaître le btn back to top et activer ses effets
    window.onscroll = function() {
        scrollFunction()
    }

    //Function pour afficher le btn back to top quand je scroll vers le bas
    function scrollFunction(){
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
            backToTop.style.display = "block"
        } else {
            backToTop.style.display = "none"
        }
    }

    //Function pour remonter le scoll à 0 au click sur le btn
    backToTop.addEventListener("click", ()=>{
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    })
})
