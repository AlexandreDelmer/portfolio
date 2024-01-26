//Function pour afficher/masquer xp_list_description au click sur le "+" et "-"

let xpListTitleBtn = document.querySelectorAll(".xp_list_title_btn")
let xpListDescription = document.querySelectorAll(".xp_list_description")
let xpList = document.querySelectorAll(".xp_list_title")

//Une boucle pour écouter chaque "+" et "-"
for(let i = 0; i <xpListTitleBtn.length; i++){
    xpListTitleBtn[i].addEventListener('click', ()=>{
        xpListDescription[i].classList.toggle('toggle-element')

        if(xpListTitleBtn[i].textContent === "+"){
            xpListTitleBtn[i].textContent = "-"
        } else{
            xpListTitleBtn[i].textContent = "+"
        }
    })

}