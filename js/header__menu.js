if (window.matchMedia("(max-width: 700px)").matches) {
    const iconMenu = document.querySelector(".menu__icon");
    const navbar = document.querySelector(".l-navbar");
    iconMenu.addEventListener("click", (event) => {
        iconMenu.classList.toggle("clicked");
        if(navbar){
            navbar.classList.toggle('show')
        } else {
            iconMenu.nextElementSibling.classList.toggle('visible');
        }
    });
}