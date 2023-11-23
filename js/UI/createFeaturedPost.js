const featuredDiv = document.querySelector("#featured");

const featuredHolder = document.createElement("div");
featuredHolder.classList.add("featured-post");

export function createFeaturedPost (plant) {
    const featuredLink = document.createElement("a");
    featuredLink.href = "post.html?id=" + plant.id; 

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("text-div");

    const contentParser = new DOMParser();
    const contentDoc = contentParser.parseFromString(plant.content.rendered, "text/html");

    const initalHeading = contentDoc.querySelector(".wp-block-heading");
    const initialText = initalHeading ? initalHeading.textContent : "Heading not found"

    const initalHeadingP = document.createElement("p");
    initalHeadingP.classList.add("heading-p")
    initalHeadingP.textContent = initialText;

    const postTitle = document.createElement("h3");
    postTitle.classList.add("featured-h3");
    postTitle.textContent = plant.title.rendered;

    const smallExtract = document.createElement("p");
    smallExtract.classList.add("extract-p");
    smallExtract.innerHTML = plant.excerpt.rendered;

    const readBtn = document.createElement("button");
    readBtn.classList.add("more-btn");
    readBtn.textContent = "How to Make One";

    const featuredImg = document.createElement("img");
    featuredImg.src = plant.jetpack_featured_media_url;
    featuredImg.alt = plant.title.rendered;

    

    featuredDiv.appendChild(featuredHolder);
    featuredHolder.appendChild(featuredLink);
    featuredLink.appendChild(contentDiv);
    contentDiv.appendChild(initalHeadingP);
    contentDiv.appendChild(postTitle);
    contentDiv.appendChild(smallExtract);
    contentDiv.appendChild(readBtn);
    featuredHolder.appendChild(featuredImg);
}