function showMenuMobile() {
  const menuMobile = document.querySelector(".nav-menu-mobile");

  if (!menuMobile.classList.contains("showMenuMobile")) {
    menuMobile.classList.add("showMenuMobile");
  } else if (menuMobile.classList.contains("showMenuMobile")) {
    menuMobile.classList.remove("showMenuMobile");
  }
}
