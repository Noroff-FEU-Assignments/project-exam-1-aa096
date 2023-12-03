const carouselWrap = document.querySelector(".carousel-wrapper");
const previousBtn = document.querySelector("#prev-btn");
const cardDiv = document.querySelector(".card-div");

const postsDiv = document.createElement("div");
postsDiv.classList.add("posts-holder");

cardDiv.appendChild(carouselWrap);
carouselWrap.appendChild(previousBtn);
carouselWrap.appendChild(postsDiv);

export function createPostCards(post) {
    const postCard = document.createElement("div");
    postCard.classList.add("card");

    const newestLink = document.createElement("a");
    newestLink.href = "../html/post.html?id=" + post.id; 

    const postImg = document.createElement("img");
    postImg.src = post.jetpack_featured_media_url;
    postImg.alt = post['better_featured_image']['alt_text'];

    const postTitle = document.createElement("p");
    postTitle.classList.add("card-p");
    postTitle.textContent = post.title.rendered;

    const readBtn = document.createElement('button');
    readBtn.classList.add('read-btn');
    readBtn.textContent = 'Read More';

    postsDiv.appendChild(postCard);
    postCard.appendChild(newestLink);
    newestLink.appendChild(postImg);
    newestLink.appendChild(postTitle);
    newestLink.appendChild(readBtn);
}
