const plantDiv = document.querySelector("#plants");

const plantHeading = document.createElement("h2");
plantHeading.classList.add ("plant-h2");
plantHeading.textContent = "Browse Plants";

const plantHolder = document.createElement("div");
plantHolder.classList.add("plant-holder");



export function createPlantCard (plant) {
    const plantCard = document.createElement("div");
    plantCard.classList.add("plant-card");

    const plantLink = document.createElement("a");
    plantLink.href = "post.html?id=" + plant.id; 

    const plantImg = document.createElement("img");
    plantImg.src = plant.jetpack_featured_media_url;
    plantImg.alt = plant.title.rendered;

    const plantTitle = document.createElement("p");
    plantTitle.classList.add("plant-p");
    plantTitle.textContent = plant.title.rendered;

    const readBtn = document.createElement("button");
    readBtn.classList.add("read-btn");
    readBtn.textContent = "Read More";

    plantDiv.appendChild(plantHolder);
    plantDiv.appendChild(plantHeading);
    plantDiv.appendChild(plantHolder);
    plantHolder.appendChild(plantCard);
    plantCard.appendChild(plantLink);
    plantLink.appendChild(plantImg);
    plantLink.appendChild(plantTitle);
    plantLink.appendChild(readBtn);
}