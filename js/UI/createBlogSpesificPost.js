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

    featuredImg.addEventListener("click", openModal);
    const contentImages = textAndImg.querySelectorAll("img");
    contentImages.forEach(img => {
        img.addEventListener("click", openModal);
    });
}

function openModal (event) {
    const modalContainer = document.createElement("div");
    modalContainer.classList.add ("modal-container");

    const modalContent = document.createElement("img");
    modalContent.src = event.target.src;
    modalContent.alt = event.target.alt;
    modalContent.classList.add("modal-content");

    if (event.target.tagName === 'IMG') {
        modalContent.src = event.target.src;
        modalContent.alt = event.target.alt;
    } else {
        modalContent.src = event.target.querySelector('img').src;
        modalContent.alt = event.target.querySelector('img').alt;
    }

    modalContainer.appendChild(modalContent);
    
    document.body.appendChild(modalContainer);
}

function closeModal(event) {
    if (event.target.classList.contains("modal-container")) {
        event.target.remove();
    }
}

document.body.addEventListener("click", closeModal);