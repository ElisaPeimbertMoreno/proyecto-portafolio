const nav = document.querySelector("nav");

function Menu(nav) {
  const navIcon = nav.querySelector(".nav-icon");
  const menu = nav.querySelector(".menu");
  const subMenu = nav.querySelector(".submenu");
  const linkProyectos = nav.querySelector(".link");

  navIcon.addEventListener("click", toggleMenu);
  linkProyectos.addEventListener("click", toggleSubMenu);

  function removeActiveClass() {
    linkProyectos.classList.remove("active");
  }

  function toggleMenu() {
    if (!subMenu.hasAttribute("hidden")) {
      subMenu.toggleAttribute("hidden");
    }
    navIcon.classList.toggle("open");
    menu.toggleAttribute("hidden");
    removeActiveClass();
  }

  function toggleSubMenu(e) {
    e.preventDefault();
    subMenu.toggleAttribute("hidden");
    linkProyectos.classList.toggle("active");
  }
}

Menu(nav);
