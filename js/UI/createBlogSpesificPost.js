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

    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("image-wrapper");

    const featuredImg = document.createElement("img");
    featuredImg.src = result.jetpack_featured_media_url;
    featuredImg.alt = result['better_featured_image']['alt_text'];

    const magnifyingGlassIcon = document.createElement("i");
    magnifyingGlassIcon.classList.add("fa-solid", "fa-magnifying-glass-plus", "magnifying-glass-icon");


    blogSpesificDiv.appendChild(blogHolder);
    blogHolder.appendChild(postTitle);
    blogHolder.appendChild(textAndImg);
    textAndImg.appendChild(content); 
    textAndImg.appendChild(imageWrapper);
    imageWrapper.appendChild(featuredImg);
    imageWrapper.appendChild(magnifyingGlassIcon);

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

    const closeIcon = document.createElement("i");
    closeIcon.classList.add("fa-solid", "fa-xmark", "close-icon");
    closeIcon.addEventListener("click", closeModal);

    modalContainer.appendChild(closeIcon);
    modalContainer.appendChild(modalContent)
    modalContainer.appendChild(modalContent);
    
    document.body.appendChild(modalContainer);
}

function closeModal(event) {
    if (event.target.classList.contains("modal-container") || event.target.classList.contains("close-icon")) {
        document.body.removeChild(event.target.closest(".modal-container"));
    }
}

document.body.addEventListener("click", closeModal);