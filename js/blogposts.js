import { getPosts } from "./data/API.js";
import { showLoadingIndicator } from "./UI/loadingIndicator.js";
import { showError } from "./UI/errorMessage.js";
import { createBlogPosts } from "./UI/createBlogPosts.js";

const postHolder = document.getElementById("posts");
const loadHolder = document.querySelector(".load-holder");

let postsToShow = 10;
let allPosts = [];
let visablePosts = [];

const loadMoreBtn = document.createElement("button");
loadMoreBtn.classList.add("load-btn");
loadMoreBtn.textContent = "Load More Posts"
loadMoreBtn.addEventListener("click", loadMore);

async function displayBlogPosts() {
    try {
        showLoadingIndicator('.load-holder')
        allPosts = await getPosts();
        
        loadHolder.innerHTML = "";

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

displayBlogPosts();