const navLinks = document.querySelectorAll(".nav__link");
const toggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");
const tabs = document.querySelectorAll("[data-target");
const tabContents = document.querySelectorAll("[data-content");

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

/*Experience tabs*/
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach(tabContent => {
      tabContent.classList.remove("active");
    });
    target.classList.add("active");

    tabs.forEach(tab => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
  })
})

/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 72;
        const sectionId = current.getAttribute('id');
        if(scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
        }
    })
}
window.addEventListener('scroll', scrollActive);

/* HEADER ON SCROLL */ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 