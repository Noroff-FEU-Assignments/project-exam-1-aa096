const blogSpesificDiv = document.querySelector("#post-container");

const blogHolder = document.createElement("div");
blogHolder.classList.add("post-div");

export function createSpesificPost (result) {
    const postTitle = document.createElement("h1");
    postTitle.classList.add("result-title");
    postTitle.textContent = result.title.rendered;

    const textAndImg = document.createElement("div");
    textAndImg.classList.add("text-img");

    const content = document.createElement("p");
    content.classList.add("content-p");
    content.innerHTML = result.content.rendered;

    const featuredImg = document.createElement("img");
    featuredImg.src = result.jetpack_featured_media_url;
    featuredImg.alt = result.title.rendered;

    blogSpesificDiv.appendChild(blogHolder);
    blogHolder.appendChild(postTitle);
    blogHolder.appendChild(textAndImg);
    textAndImg.appendChild(content); 
    textAndImg.appendChild(featuredImg);
}