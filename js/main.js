///////////////////////// menu

const menuItem = document.querySelector(".menu__sort");

const menuPopUp = document.querySelector(".menu__main-list");

menuItem.addEventListener("click", function() {
  if(!menuPopUp.classList.contains("show")) {
    menuPopUp.classList.add("show");
    menuPopUp.classList.remove("hide");
  } else {
      menuPopUp.classList.add("hide");
  menuPopUp.classList.remove("show");
  }
})