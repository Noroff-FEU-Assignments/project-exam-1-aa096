import { getPosts } from "./data/postAPI.js";
import { showError } from "./utils/errorMessage.js";
import { CreateCareGuide } from "./UI/createCareGuide.js";

const plantHolder = document.getElementById("care-guide");

async function getPlants() {
    try { 
        const posts = await getPosts();

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

       if (post.categories && post.categories.includes(22)) {
                CreateCareGuide(post);
        }
    }

    } catch (error) {
        showError(error.message, "#posts");
    }
}

getPlants();