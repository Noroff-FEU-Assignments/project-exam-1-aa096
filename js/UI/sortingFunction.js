import { getPosts } from "../data/API.js";
import { showLoadingIndicator } from "./UI/loadingIndicator.js";
import { showError } from "./UI/errorMessage.js";
import { createBlogPosts } from "./UI/createBlogPosts.js";

const postHolder = document.getElementById("posts");
const loadHolder = document.querySelector(".load-holder");
const tagFilterDropdown = document.getElementById('tagFilter');
const loadMoreBtn = document.createElement("button");

let postsToShow = 10;
let allPosts = [];
let visablePosts = [];
let selectedTag = '';

tagFilterDropdown.addEventListener('change', filterPosts);

loadMoreBtn.classList.add("load-btn");
loadMoreBtn.textContent = "Load More Posts";
loadMoreBtn.addEventListener("click", loadMore);

async function displayBlogPosts() {
    try {
        showLoadingIndicator('.load-holder');
        allPosts = await getPosts();

        if (selectedTag) {
            allPosts = allPosts.filter(post => post.tags.includes(parseInt(selectedTag)));
        }

        loadHolder.innerHTML = "";

        visablePosts = allPosts.slice(0, postsToShow);
        visablePosts.forEach(post => {
            createBlogPosts(post);
        });

        if (allPosts.length > postsToShow) {
            const buttonDiv = document.createElement('div');
            buttonDiv.classList.add('button-div');
            postHolder.appendChild(buttonDiv);
            buttonDiv.appendChild(loadMoreBtn);
        }
    } catch (error) {
        showError(error.message, '#posts');
    }
}

async function loadMore() {
    const remainingPosts = allPosts.length - postsToShow;

    if (remainingPosts > 0) {
        postsToShow += 10;
        updateVisiblePosts();
    }
    if (allPosts.length <= postsToShow) {
        const buttonDiv = document.querySelector('.button-div');
        if (buttonDiv) {
            buttonDiv.remove();
        }
    }
    await displayBlogPosts();
}

function filterPosts() {
    selectedTag = tagFilterDropdown.value;
    displayBlogPosts();
}

async function initializeTagFilter() {
    const firstPost = await getPost(1); 
    const tags = firstPost.tags;

    tags.forEach(tag => {
        const option = document.createElement('option');
        option.value = tag;
        option.textContent = `Tag ${tag}`;
        tagFilterDropdown.appendChild(option);
    });

    displayBlogPosts();
}

initializeTagFilter();
