let container = document.getElementById("cards-container");

let populateCardsContainer = () => {
    let newCard = document.createElement("div");
    newCard.className = "shadow job-card-trending";
    newCard.innerHTML = `<h4>Senior Product Designer<br>(UI/UX)</h4>

                        <div>
                            <p><img src="./img/location.svg" alt="" srcset="">New York, NY</p>
                            <p><img src="./img/employer-icon.svg" alt="" srcset="">DevX</p>
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

for (let i = 0; i < 6; i++) {
    populateCardsContainer();

}

document.getElementsByTagName

// Carousel
let slider = document.getElementsByClassName("slider");
let sliderIndicator = document.getElementsByClassName("indicator");

let makeActive = (i) => {
    if (slider[i].classList.contains("hidden") === true && sliderIndicator[i].classList.contains("indicator-active") === false) {
        slider[i].classList.remove("hidden");
        slider[i].classList.add("visible");
        sliderIndicator[i].classList.remove("inactive");
        sliderIndicator[i].classList.add("indicator-active");
    }

    let remove = () => {
        slider[i].classList.add("hidden");
        slider[i].classList.remove("visible");
        sliderIndicator[i].classList.add("inactive");
        sliderIndicator[i].classList.remove("indicator-active");
    }
    setInterval(remove, 999);
};

let counter = 0;

let change = () => {
    console.log(counter);
    makeActive(counter);
    if (counter < 3) {
        counter++;
        console.log();
    } else
        counter = 0;
}

let slideChange = () => {
    console.log("here");

    let a = setInterval(change, 1000);

};


slideChange();
