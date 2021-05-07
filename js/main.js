const showMenu = (hamburgerId ,navId) => {
    const hamburger = document.getElementById(hamburgerId),
        nav = document.getElementById(navId)
    if(hamburger && nav){
        hamburger.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('hamburger','nav')