import { getPosts } from "./data/API.js";
import { showError } from "./UI/errorMessage.js";
import { createBlogPosts } from "./UI/createBlogPosts.js";

const plantHolder = document.getElementById("plants");

async function getPlants() {
    try { 
        const posts = await getPosts();

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

       if (post.tags && post.tags.includes(25)) {
                createBlogPosts(post);
        }
    }

    } catch (error) {
        showError(error.message, "#posts");
    }
}

getPlants();