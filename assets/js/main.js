const navLinks = document.querySelectorAll(".nav__link");
const toggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");
/*==================== MENU SHOW Y HIDDEN ====================*/
navLinks.forEach((navLink) => {
    navLink.addEventListener("click", (e) => {
      navLinks.forEach((navLinkItem) => {
        navLinkItem.classList.remove("active");
      });
      e.target.classList.add("active");
    });
  });

  toggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    toggle.classList.toggle("active");
    navMenu.addEventListener("click", () => {
        navMenu.classList.remove("active");
      toggle.classList.remove("active");
    });
  });

/*===== MENU SHOW =====*/
/* Validate if constant exists */


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */


/*==================== REMOVE MENU MOBILE ====================*/


/*==================== ACCORDION SKILLS ====================*/


/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 