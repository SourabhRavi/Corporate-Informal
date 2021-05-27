let container = document.getElementById("cards-container");

let populateCardsContainer = () => {
    let newCard = document.createElement("div");
    newCard.className = "shadow job-card-trending container-fluid  gy-4";
    newCard.innerHTML = `<h4 class="bold">Senior Product Designer<br>(UI/UX)</h4>

                        <div>
                            <p class="bold"><img src="./img/location.svg" alt="" srcset="">New York, NY</p>
                            <p class="bold"><img src="./img/employer-icon.svg" alt="" srcset="">DevX</p>
                        </div>

                        <p class="job-type">Full-Time</p>
                        <p class="job-description">
                            Lorem ipsum dolor sit amet, consectetur.<br>
                            Lorem facilisis ipsum ipsum vel est nec elit.<br>
                            Lorem ipsum dolor sit amet, consectetur.<br>
                            Lorem facilisis ipsum ipsum vel est nec elit.
                        </p>

                        <img src="./img/card-logo.svg" class="card-logo">`;

    container.appendChild(newCard);
}

for (let i = 0; i < 12; i++) {
    populateCardsContainer();

}


// Carousel
let slide = document.getElementsByClassName("slider");
let sliderIndicator = document.getElementsByClassName("indicator");
let currSlide = 1;

function showSlide(index) {
    if (index > slide.length) {
        currSlide = 1;
    }
    if (index < 1) {
        currSlide = slide.length;
    }
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none';
        if (sliderIndicator[i].classList.contains("active")) {
            sliderIndicator[i].classList.remove("active");
        }
        sliderIndicator[i].classList.add("inactive");
    }
    slide[currSlide - 1].style.display = 'inline-block';
    sliderIndicator[currSlide - 1].classList.remove("inactive");
    sliderIndicator[currSlide - 1].classList.add("active");
}

function nextSlide() {
    showSlide(currSlide += 1);
}

// function prevSlide() {
//     showSlide(currSlide -= 1);
// }

window.onload = function () {
    showSlide(currSlide);
}

setInterval(nextSlide, 2000);

// Tooltip
document.getElementById("scroll-menu").addEventListener("mousemove", e => {
    console.log(e);
    document.getElementById("tooltiptext").style.cssText = `left:${e.offsetX}px; top:${e.offsetY}px;`;
});
