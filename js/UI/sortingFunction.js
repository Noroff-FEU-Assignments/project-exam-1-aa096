import { getPosts } from "../data/API.js";
import { showLoadingIndicator } from "./loadingIndicator.js";
import { createBlogPosts } from "./createBlogPosts.js";
import { showError } from "./errorMessage.js";

const plantDiv = document.querySelector("#posts");
const categoryButtonsContainer = document.querySelector("#categoryButtonsContainer");
const tagButtonsContainer = document.querySelector("#tagButtonsContainer");

async function getUniqueCategories(posts) {
    const categories = new Set();

    posts.forEach((post) => {
        post.categories.forEach((category) => {
            categories.add(category);
        });
    });

    return Array.from(categories);
}

async function getUniqueTags(posts) {
    const tags = new Set();

    posts.forEach((post) => {
        post.tags.forEach((tag) => {
            tags.add(tag);
        });
    });

    return Array.from(tags);
}

async function getPostbyTagOrCategory(category, tag) {
    try {
        showLoadingIndicator(".load-holder");
        const posts = await getPosts();

        plantDiv.innerHTML = "";

        if (Array.isArray(posts)) {
            posts.forEach((post) => {
                if ((category && post.categories && post.categories.includes(category)) || 
                    (tag && post.tags && post.tags.includes(tag))) {
                    createBlogPosts(post);
                }
            });
        } else {
            throw new Error("Invalid data format for posts.");
        }
    } catch (error) {
        showError(error.message, "#posts");
    }
}

getUniqueCategories(posts).then((categories) => {
    categories.forEach((category) => {
        const categoryButton = document.createElement("button");
        categoryButton.textContent = category;
        categoryButton.addEventListener("click", () => {
            getPostbyTagOrCategory(category, null);
        });
        categoryButtonsContainer.appendChild(categoryButton);
    });
});

getUniqueTags(posts).then((tags) => {
    tags.forEach((tag) => {
        const tagButton = document.createElement("button");
        tagButton.textContent = tag;
        tagButton.addEventListener("click", () => {
            getPostbyTagOrCategory(null, tag);
        });
        tagButtonsContainer.appendChild(tagButton);
    });
});

// Note: You may need to call these functions in your application based on user interactions.

getPostbyTagOrCategory();
