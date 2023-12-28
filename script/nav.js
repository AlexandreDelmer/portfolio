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