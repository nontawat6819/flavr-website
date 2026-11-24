
// =========================================
// FLAVR
// MAIN JAVASCRIPT
// =========================================


// =========================================
// 01. CURRENT YEAR
// =========================================

const yearElement = document.getElementById("current-year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}



// =========================================
// 02. MOBILE NAVIGATION
// =========================================

const menuToggle = document.querySelector(".menu-toggle");

const navMenu = document.querySelector(".nav-menu");

const navLinks = document.querySelectorAll(".nav-link");


if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navMenu.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", isOpen);

    });


    // Close menu after clicking a link

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

}



// =========================================
// 03. ACTIVE NAVIGATION
// =========================================

const sections = document.querySelectorAll("main section[id]");


const navObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const currentId = entry.target.id;

                navLinks.forEach(link => {

                    link.classList.remove("active");

                    if (link.getAttribute("href") === `#${currentId}`) {

                        link.classList.add("active");

                    }

                });

            }

        });

    },

    {
        rootMargin: "-35% 0px -55% 0px"
    }

);


sections.forEach(section => {

    navObserver.observe(section);

});



// =========================================
// 04. SCROLL REVEAL ANIMATION
// =========================================

const revealElements = document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    revealObserver.observe(element);

});



// =========================================
// 05. CONSOLE MESSAGE
// =========================================

console.log(
    "%c FLAVR ",
    "background: #A83E32; color: #F3F0E9; padding: 8px 16px; font-weight: bold;"
);

console.log("A New Expression of Flavor.");

