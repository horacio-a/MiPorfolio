const tracker = document.querySelector(".tracker");
document.body.addEventListener("mousemove", e => {
    tracker.style.left = `${e.clientX}px`;
    tracker.style.top = `${e.clientY}px`;
});

const tracker2 = document.querySelector(".tracker2");
document.body.addEventListener("mousemove", e => {
    tracker2.style.left = `${e.clientX}px`;
    tracker2.style.top = `${e.clientY}px`;
});


const text = document.getElementById("SpanID")

let navegador = navigator.userAgent;
if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
    text.textContent="New Text";
} else {
    text.textContent="asdfasdf";
}


const icons = document.querySelectorAll('.icon')


icons.forEach(icon => {
    icon.addEventListener('mouseover', function () {
        tracker.classList.add('hidden')
        tracker2.classList.remove('hidden')
    })
})

icons.forEach(icon => {
    icon.addEventListener('mouseout', function () {
        tracker.classList.remove('hidden')
        tracker2.classList.add('hidden')
    })
})


const conteudo = document.querySelector('.conteudo')

if (conteudo != undefined) {

    conteudo.addEventListener('mouseover', function () {
        tracker.classList.add('hidden')
        tracker2.classList.remove('hidden')
    })
    conteudo.addEventListener('mouseout', function () {
        tracker.classList.remove('hidden')
        tracker2.classList.add('hidden')
    })
}

const button_carrosel = document.querySelectorAll('.button-carrosel')

if (button_carrosel != undefined) {

    button_carrosel.forEach(icon => {
        icon.addEventListener('mouseover', function () {
            tracker.classList.add('hidden')
            tracker2.classList.remove('hidden')
        })
    })

    button_carrosel.forEach(icon => {
        icon.addEventListener('mouseout', function () {
            tracker.classList.remove('hidden')
            tracker2.classList.add('hidden')
        })
    })

}

const button_proyecto = document.querySelectorAll('.button-proyecto')

if (button_proyecto != undefined) {

    button_proyecto.forEach(icon => {
        icon.addEventListener('mouseover', function () {
            tracker.classList.add('hidden')
            tracker2.classList.remove('hidden')
        })
    })

    button_proyecto.forEach(icon => {
        icon.addEventListener('mouseout', function () {
            tracker.classList.remove('hidden')
            tracker2.classList.add('hidden')
        })
    })

}

const hover = document.querySelectorAll('.hover')


if (hover != undefined) {

    hover.forEach(icon => {
        icon.addEventListener('mouseover', function () {
            tracker.classList.add('hidden')
            tracker2.classList.remove('hidden')
        })
    })

    hover.forEach(icon => {
        icon.addEventListener('mouseout', function () {
            tracker.classList.remove('hidden')
            tracker2.classList.add('hidden')
        })
    })

}




const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    slider();
    sliderMovil();
});


function slider() {
    const $nextBtn = d.querySelector(".slider-btns .next"),
        $prevBtn = d.querySelector(".slider-btns .prev"),
        $slides = d.querySelectorAll(".slider-slide");

    let i = 0;
    d.addEventListener("click", (e) => {

        if (e.target === $prevBtn) {
            e.preventDefault();
            $slides[i].classList.remove("active");
            i--;

            if (i < 0) {
                i = $slides.length - 1;
            }

            $slides[i].classList.add("active");
        }

        if (e.target === $nextBtn) {

            e.preventDefault();
            $slides[i].classList.remove("active");
            i++;

            if (i > $slides.length - 1) {
                i = 0;
            }

            $slides[i].classList.add("active");
        }
    });
}



function sliderMovil() {
    const $nextBtnMovil = d.querySelector(".next-movil"),
        $prevBtnMovil = d.querySelector(".prev-movil"),
        $slidesMovil = d.querySelectorAll(".slider-slide-movil");
        
    let i = 0;
    d.addEventListener("click", (e) => {

        if (e.target === $prevBtnMovil) {
            e.preventDefault();
            $slidesMovil[i].classList.remove("active");
            i--;

            if (i < 0) {
                i = $slidesMovil.length - 1;
            }

            $slidesMovil[i].classList.add("active");
        }

        if (e.target === $nextBtnMovil) {

            e.preventDefault();
            $slidesMovil[i].classList.remove("active");
            i++;

            if (i > $slidesMovil.length - 1) {
                i = 0;
            }

            $slidesMovil[i].classList.add("active");
        }
    });
}


const nav = document.querySelector('.nav')


const button = document.getElementById('button')


button.addEventListener('click', () => {
    button.textContent = 'Close'
    button.classList.toggle('activo')
    nav.classList.toggle('activo')
    if (button.classList.length == 1) {
        button.textContent = 'menu'

    }
})


