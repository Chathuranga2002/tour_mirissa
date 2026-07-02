document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // ELEMENTS
    // ==========================

    const navbar = document.getElementById("navbar");
    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    const safariDrop = document.getElementById("safariDrop");
    const serviceDrop = document.getElementById("serviceDrop");

    // ==========================
    // NAVBAR SCROLL EFFECT
    // ==========================

    function updateNavbar() {

        if (window.scrollY > 50) {

            navbar.classList.add(
                "bg-black/80",
                "backdrop-blur-xl",
                "shadow-lg"
            );

        } else {

            navbar.classList.remove(
                "bg-black/80",
                "backdrop-blur-xl",
                "shadow-lg"
            );

        }

    }

    updateNavbar();

    window.addEventListener("scroll", updateNavbar);

    // ==========================
    // MOBILE MENU
    // ==========================

    if (menuBtn && mobileMenu) {

        menuBtn.addEventListener("click", function () {

            mobileMenu.classList.toggle("hidden");

            if (mobileMenu.classList.contains("hidden")) {

                menuBtn.innerHTML = "☰";

            } else {

                menuBtn.innerHTML = "✕";

            }

        });

    }

    // ==========================
    // MOBILE SAFARI DROPDOWN
    // ==========================

    window.toggleSafari = function () {

        if (safariDrop) {

            safariDrop.classList.toggle("hidden");

        }

    };

    // ==========================
    // MOBILE SERVICE DROPDOWN
    // ==========================

    window.toggleService = function () {

        if (serviceDrop) {

            serviceDrop.classList.toggle("hidden");

        }

    };

    // ==========================
    // CLOSE MENU WHEN LINK CLICKED
    // ==========================

    const mobileLinks = document.querySelectorAll("#mobileMenu a");

    mobileLinks.forEach(link => {

        link.addEventListener("click", function () {

            mobileMenu.classList.add("hidden");

            menuBtn.innerHTML = "☰";

        });

    });

    // ==========================
    // CLOSE MENU ON DESKTOP
    // ==========================

    window.addEventListener("resize", function () {

        if (window.innerWidth >= 1024) {

            mobileMenu.classList.add("hidden");

            menuBtn.innerHTML = "☰";

        }

    });

});