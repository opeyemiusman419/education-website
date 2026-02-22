// nav background

window.addEventListener("scroll", () => {
    document
        .querySelector("nav")
        .classList.toggle("window-scroll", window.scrollY > 0);
});

// faq 

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("open");

        const icon = faq.querySelector(".faq-icon i");

        if (icon.classList.contains("uil-plus")) {
            icon.classList.remove("uil-plus");
            icon.classList.add("uil-minus");
        } else {
            icon.classList.remove("uil-minus");
            icon.classList.add("uil-plus");
        }
    });
});

// slide

var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      breakpoints: {
        600: {
          slidesPerView: 2,
        },
      },
    });

    // nav-menu

    const menuItem = document.querySelector(".menu-item");
    const openBtn = document.querySelector("#open-btn");
    const closeBtn = document.querySelector("#close-btn");

    openBtn.addEventListener("click", () => {
        menuItem.style.display = "flex";
        closeBtn.style.display = "inline-block";
        openBtn.style.display = "none";


    });

    closeBtn.addEventListener("click", () => {
        menuItem.style.display = "none";
        closeBtn.style.display = "none";
        openBtn.style.display = "inline-block";
    });


    

