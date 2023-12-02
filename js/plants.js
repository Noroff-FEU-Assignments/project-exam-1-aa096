import { getPosts } from "./data/postAPI.js";
import { showError } from "./utils/errorMessage.js";
import { createBlogPosts } from "./UI/createBlogPosts.js";

const plantHolder = document.getElementById("plants");

async function getPlants() {
    try { 
        const posts = await getPosts();

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

       if (post.categories && post.categories.includes(21)) {
                createBlogPosts(post);
        }
    }

    } catch (error) {
        showError(error.message, "#posts");
    }
}

getPlants();