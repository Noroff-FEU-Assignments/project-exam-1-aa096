const careDiv = document.querySelector("#care-guide");

const firstDiv = document.createElement ("div");
firstDiv.classList.add("first-div");

export function CreateCareGuide (plant) {
    const guide = document.createElement ("div");
    guide.classList.add("guide");

    const guideLink = document.createElement("a");
    guideLink.href = "../html/post.html?id=" + plant.id; 

    const guideImg = document.createElement("img");
    guideImg.src = plant.jetpack_featured_media_url;
    guideImg.alt = plant['better_featured_image']['alt_text'];

    const careHolder = document.createElement("div");
    careHolder.classList.add("guide-holder");

    const heading4 = document.createElement("p");
    heading4.classList.add("heading-p");
    heading4.textContent = plant.title.rendered;

    const smallText = document.createElement("p");
    smallText.classList.add("small-text");
    smallText.innerHTML = plant.excerpt.rendered;

    const readButton = document.createElement("button");
    readButton.classList.add("more-btn");
    readButton.textContent = "Read the Guide";

    careDiv.appendChild(firstDiv);
    firstDiv.appendChild(guide);
    guide.appendChild(guideLink);
    guideLink.appendChild(guideImg);
    guideLink.appendChild(careHolder);
    firstDiv.appendChild(guide);
    careHolder.appendChild(heading4);
    careHolder.appendChild(smallText);
    careHolder.appendChild(readButton);
}

