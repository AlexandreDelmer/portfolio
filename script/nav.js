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
console.log(navMobileMenu)

for(let i = 0; i < navMobileMenu.length; i++){
    navMobileMenu[i].addEventListener('click', ()=>{
        let navMobile = document.querySelector('.nav_mobile')
        let body = document.body

        navMobile.classList.toggle("toggle-element")
        body.classList.toggle("overflow-hidden")
    })
}
