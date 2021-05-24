let container = document.getElementById("cards-container");

let populateCardsContainer = () => {
    let newCard = document.createElement("div");
    newCard.id = "job-card";
    newCard.className = "shadow";
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