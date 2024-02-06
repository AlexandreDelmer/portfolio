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

//ouvre le menu lorsqu'on clic sur le menu burger
let menuToggle = document.querySelector('.menu_toggle')

menuToggle.addEventListener('click', ()=>{
    
    //Affiche le menu Mobile
    let navMobile = document.querySelector('.nav_mobile')
    navMobile.classList.toggle("toggle-element")

    //Supprime la possibilité de scroll
    let body = document.body
    body.classList.toggle("overflow-hidden")

    //Retire l'affichage du backToTop
    let backToTop = document.getElementById("backToTop")
    backToTop.style.display = "none"

    //Retire l'affiche du logo
    let logoNav = document.querySelector('.logo')
    logoNav.style.display ="none"

    //Retire l'affiche du menu burger
    let menuToggle = document.querySelector('.menu_toggle')
    menuToggle.style.display ="none"
})

let navMobileMenu = document.querySelectorAll('.nav_mobile_menu a')

for(let i = 0; i < navMobileMenu.length; i++){
    navMobileMenu[i].addEventListener('click', ()=>{
        let navMobile = document.querySelector('.nav_mobile')
        let body = document.body

        navMobile.classList.toggle("toggle-element")
        body.classList.toggle("overflow-hidden")

        //Affichage du backToTop
        let backToTop = document.getElementById("backToTop")
        backToTop.style.display = "flex"

        //Affichage du logo
        let logoNav = document.querySelector('.logo')
        logoNav.style.display ="flex"

        //Affichage du menu burger
        let menuToggle = document.querySelector('.menu_toggle')
        menuToggle.style.display ="flex"

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
        scrollToTop()
    })
})

function scrollToTop(){
    window.scrollTo({
        top: 0,
    })
}