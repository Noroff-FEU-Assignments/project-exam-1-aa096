const cardHolder = document.querySelector("#posts");

const postsDiv = document.createElement ("div");
postsDiv.classList.add("post-div");

export function createBlogPosts(post) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const blogLink = document.createElement("a");
    blogLink.href = "post.html?id=" + post.id; 

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
    blogLink.appendChild(blogImg);
    blogLink.appendChild(postTitle);
    blogLink.appendChild(readBtn);
}