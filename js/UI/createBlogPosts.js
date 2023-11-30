const cardHolder = document.querySelector("#posts");

const postsDiv = document.createElement ("div");
postsDiv.classList.add("post-div");

export function createBlogPosts(post) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const tagNumber = document.createElement("p");
    tagNumber.textContent = "Tags: " + post.tags.map(tag => tag.name).join(", ");
    tagNumber.style.display = "none";

    const categoryNumber = document.createElement("p");
    categoryNumber.textContent = "Categories: " + post.categories.map(category => category.name).join(", ");
    categoryNumber.style.display = "NONE";


    const blogLink = document.createElement("a");
    blogLink.href = "../html/post.html?id=" + post.id; 

    const blogImg = document.createElement("img");
    blogImg.src = post.jetpack_featured_media_url;
    blogImg.alt = post.title.rendered;

    const postTitle = document.createElement("p");
    postTitle.classList.add("card-p");
    postTitle.textContent = post.title.rendered;

    const readBtn = document.createElement('button');
    readBtn.classList.add('read-btn');
    readBtn.textContent = 'Read More';

    cardHolder.appendChild(postsDiv);
    postsDiv.appendChild(cardDiv);
    cardDiv.appendChild(blogLink);
    cardDiv.appendChild(tagNumber);
    cardDiv.appendChild(categoryNumber);
    blogLink.appendChild(blogImg);
    blogLink.appendChild(postTitle);
    blogLink.appendChild(readBtn);
}