
const cards = document.querySelectorAll(".opinion-card");
const dots = document.querySelectorAll(".dot");
const btnPrev = document.getElementById("opinion-prev");
const btnNext = document.getElementById("opinion-next");

if (cards.length && dots.length && btnPrev && btnNext) {
    let opinionIndex = 0;

    function updateSlider() {
        cards.forEach(card => card.classList.remove("active3"));
        dots.forEach(dot => dot.classList.remove("active"));

        cards[opinionIndex].classList.add("active3");
        dots[opinionIndex].classList.add("active");

    }

    btnNext.addEventListener("click", () => {
        opinionIndex++;
        if (opinionIndex > cards.length - 1) opinionIndex = 0;
        updateSlider();
    });

    btnPrev.addEventListener("click", () => {
        opinionIndex--;
        if (opinionIndex < 0) opinionIndex = cards.length - 1;
        updateSlider();
    });

    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            opinionIndex = Number(dot.getAttribute("data-slide"));
            updateSlider();
        });
    });
}

const heroImg = document.querySelector(".img-hero img");

const imagens = [
    "img/banner/CWB-Idiomas-0118.jpg",
    "img/banner/CWB-Idiomas-0053.jpg",
    "img/banner/CWB-Idiomas-0023.jpg",
];

if (heroImg) {
    let heroIndex = 0;

    function trocarImagem() {
        heroImg.classList.add("fade");

        setTimeout(() => {
            heroIndex++;
            if (heroIndex >= imagens.length) heroIndex = 0;

            heroImg.src = imagens[heroIndex];
            heroImg.classList.remove("fade");
        }, 350);
    }

    setInterval(trocarImagem, 3500);
}
