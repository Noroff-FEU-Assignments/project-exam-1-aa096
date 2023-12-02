import { getPosts } from "./data/API.js";
import { showError } from "./UI/errorMessage.js";
import { CreateCareGuide } from "./UI/createCareGuide.js";

const plantHolder = document.getElementById("care-guide");

async function getPlants() {
    try { 
        const posts = await getPosts();

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

       if (post.tags && post.tags.includes(28)) {
                CreateCareGuide(post);
        }
    }

    } catch (error) {
        showError(error.message, "#posts");
    }
}

getPlants();