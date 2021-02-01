let acc = document.getElementsByClassName("accordion");
let accPre = document.getElementsByClassName("accordion-pre");
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    panel.style.maxHeight = panel.style.maxHeight
      ? null
      : panel.scrollHeight + "px";
  });
  accPre[i].addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("active");
    let panel = this.nextElementSibling.nextElementSibling;
    panel.style.maxHeight = panel.style.maxHeight
      ? null
      : panel.scrollHeight + "px";
  });
}

let youtube = document.querySelectorAll(".youtube");
for (let i = 0; i < youtube.length; i++) {
  let source =
    "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/sddefault.jpg";
  let image = new Image();
  image.src = source;
  image.addEventListener(
    "load",
    (function () {
      youtube[i].appendChild(image);
    })(i)
  );

  youtube[i].addEventListener("click", function () {
    let iframe = document.createElement("iframe");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute(
      "src",
      "https://www.youtube.com/embed/" +
        this.dataset.embed +
        "?rel=0&showinfo=0&autoplay=1"
    );
    this.innerHTML = "";
    this.appendChild(iframe);
  });
}

const swiper = new Swiper(".feedback__slider-wrp", {
  spaceBetween: 165,
  navigation: {
    nextEl: ".feedback__slider-right",
    prevEl: ".feedback__slider-left",
  },
});

const swiperTwo = new Swiper(".slideshow__profiles", {
  slidesPerView: 2,
  spaceBetween: 5,
  navigation: {
    nextEl: ".slideshow-arrow-next",
    prevEl: ".slideshow-arrow-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    420: {
      slidesPerView: 2.5,
      spaceBetween: 26,
      navigation: {
        nextEl: ".slideshow-arrow-next",
        prevEl: ".slideshow-arrow-prev",
      },
    },
  },
});

const swiperThree = new Swiper(".hooper-list", {
  slidesPerView: 1,
  spaceBetween: 114,
  navigation: {
    nextEl: ".team-next",
    prevEl: ".team-prev",
  },
});

document.querySelector("#free").addEventListener("click", () => {
  document.querySelector(".free").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".game-complecs").addEventListener("click", () => {
  document.querySelector(".about").scrollIntoView({ behavior: "smooth" });
});
