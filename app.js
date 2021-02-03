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
  slidesPerView: 2,
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
    320: {
      slidesPerView: 1,
      navigation: {
        nextEl: ".slideshow-arrow-next",
        prevEl: ".slideshow-arrow-prev",
      },
    },
    820: {
      slidesPerView: 2,
      spaceBetween: 25,
      navigation: {
        nextEl: ".slideshow-arrow-next",
        prevEl: ".slideshow-arrow-prev",
      },
    },
  },
});

const swiperThree = new Swiper(".hooper-list", {
  slidesPerView: 1.5,
  spaceBetween: 100,
  navigation: {
    nextEl: ".team-next",
    prevEl: ".team-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    645: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    820: {
      slidesPerView: 1.07,
      spaceBetween: 25,
    },
    920: {
      slidesPerView: 1.1,
      spaceBetween: 30,
    },
    1100: {
      slidesPerView: 1.2,
      spaceBetween: 50,
    },
    1223: {
      slidesPerView: 1.5,
      spaceBetween: 100,
    },
  },
});

document.querySelector("#free").addEventListener("click", () => {
  document.querySelector(".free").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".game-complecs").addEventListener("click", () => {
  document.querySelector(".about").scrollIntoView({ behavior: "smooth" });
});

var women = document.querySelector("#women");
var people = document.querySelector("#people");
var ofline = document.querySelector(".ofline-img");
var online = document.querySelector(".online-img");
var womenTwo = document.querySelector(".woomenTwo");
new simpleParallax(women);
new simpleParallax(people);
new simpleParallax(ofline);
new simpleParallax(online);
new simpleParallax(womenTwo);

document.querySelector("form button").addEventListener("click", (e) => {
  e.preventDefault();

  if (document.querySelector("#name").value !== '' && document.querySelector("#mail").value !== '' && document.querySelector("#phone").value !== '' && document.querySelector('#check').checked) {
    const params = new URLSearchParams();
    params.append("name", document.querySelector("#name").value);
    params.append("mail", document.querySelector("#mail").value);
    params.append("phone", document.querySelector("#phone").value);
    axios.post("mail.php", params);
  }

  if (document.querySelector("#name").value == '') {
    document.querySelector('.name__error').classList.add('active')
    document.querySelector("#name").classList.add('active')
    document.querySelector(".label__name").classList.add('active')
  } else {
    document.querySelector('.name__error').classList.remove('active')
    document.querySelector("#name").classList.remove('active')
    document.querySelector(".label__name").classList.remove('active')
  }
  if (document.querySelector("#mail").value == '') {
    document.querySelector('.mail__error').classList.add('active')
    document.querySelector("#mail").classList.add('active')
    document.querySelector(".label__mail").classList.add('active')
  } else {
    document.querySelector('.mail__error').classList.remove('active')
    document.querySelector("#mail").classList.remove('active')
    document.querySelector(".label__mail").classList.remove('active')
  }
  if (document.querySelector("#phone").value == '') {
    document.querySelector('.phone__error').classList.add('active')
    document.querySelector("#phone").classList.add('active')
    document.querySelector(".label__phone").classList.add('active')
  } else {
    document.querySelector('.phone__error').classList.remove('active')
    document.querySelector("#phone").classList.remove('active')
    document.querySelector(".label__phone").classList.remove('active')
  }
  if (!document.querySelector("#check").checked) {
    document.querySelector('.check__error').classList.add('active')
    document.querySelector("#check").classList.add('active')
    document.querySelector(".castom-check").classList.add('active')
  } else {
    document.querySelector('.check__error').classList.remove('active')
    document.querySelector("#check").classList.remove('active')
    document.querySelector(".castom-check").classList.remove('active')
  }

});
