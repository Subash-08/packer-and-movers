const showmenu = document.getElementById("menu")
const showul = document.querySelector("nav ul")

showmenu.addEventListener("click" ,() => {
    showul.classList.toggle("showmenu")
   })

showul.addEventListener("click",() => {
    showul.classList.toggle("showmenu")
})