import { getPosts } from "./data/postAPI.js";
import { showError } from "./utils/errorMessage.js";
import { createBlogPosts } from "./UI/createBlogPosts.js";

const postHolder = document.getElementById("posts");

let postsToShow = 10;
let allPosts = [];
let visablePosts = [];

const loadMoreBtn = document.createElement("button");
loadMoreBtn.classList.add("load-btn");
loadMoreBtn.textContent = "Load More Posts"
loadMoreBtn.addEventListener("click", loadMore);


async function displayAllBlogPosts() {
    try {
        allPosts = await getPosts();

        visablePosts = allPosts.slice(0, postsToShow);
        visablePosts.forEach(post => {
            createBlogPosts(post);
    });
    
    if (allPosts.length > postsToShow) {
        const buttonDiv = document.createElement("div");
        buttonDiv.classList.add("button-div");
        postHolder.appendChild(buttonDiv);
        buttonDiv.appendChild(loadMoreBtn);
    }

    } catch(error) {
        showError (error.message, "#posts");
    }
}

function updateVisiblePosts () {
    const additionalPosts = allPosts.slice(postsToShow - 10, postsToShow);

    additionalPosts.forEach (post => {
        createBlogPosts(post);
    });
}

async function loadMore() {
    const remainingPosts = allPosts.length - postsToShow;

    if (remainingPosts > 0) {
        postsToShow += 10;
        updateVisiblePosts();
    }
    if (allPosts.length <= postsToShow) {
        const buttonDiv = document.querySelector(".button-div");
        if (buttonDiv) {
            buttonDiv.remove();
        }
    }
}

displayAllBlogPosts();