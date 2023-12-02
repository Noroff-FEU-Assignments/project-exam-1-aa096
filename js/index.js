import { showError } from "./utils/errorMessage.js"; 
import { getPosts } from "./data/postAPI.js";
import { createPostCards } from "./UI/createPostCards.js";
import { createPlantCard } from "./UI/createPlantCard.js";
import { createFeaturedPost } from "./UI/createFeaturedPost.js";
import { CreateCareGuide } from "./UI/createCareGuide.js";

const nextBtn = document.querySelector("#next-btn");
const previousBtn = document.querySelector("#prev-btn");
const postsDiv = document.querySelector(".posts-holder");
const carouselWrap = document.querySelector(".carousel-wrapper");

let currentIndex = 0;
let latest; 
let postPerPage;

function responsivePosts () {
    if (window.innerWidth >= 1420) {
        postPerPage = 4;
    } else if (window.innerWidth >= 1120) {
        postPerPage = 3;
    } else if (window.innerWidth >= 715) {
        postPerPage = 2;
    } else {
        postPerPage = 1;
    }
}

function renderLatestPosts() {
    postsDiv.innerHTML = "";
    const latestPosts = latest.slice(0, 15);
        
    for (let i = currentIndex; i < currentIndex + postPerPage && i < latestPosts.length; i++) {
        const post = latest[i];
        createPostCards(post);
    }
        
    carouselWrap.appendChild(nextBtn);

    nextBtn.disabled = currentIndex + postPerPage >= latestPosts.length;
}

document.addEventListener("DOMContentLoaded", async () => {
    try {
        latest = await getPosts();

        responsivePosts();
        renderLatestPosts();

        nextBtn.addEventListener('click', () => {
            if (currentIndex + postPerPage < latest.length) {
                currentIndex += postPerPage;
                renderLatestPosts();
            }
        });
        
        previousBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex -= postPerPage;
                renderLatestPosts();
            }
        });
        
        window.addEventListener("resize", () => {
            responsivePosts();
            renderLatestPosts(0);
        });
        

    } catch (error) {
        showError (error.message, ".posts-holder");
    }
})




async function getPlants() {
    try { 
        const plants = await getPosts();
        let cardCounter = 0; 

    for (let i = 0; i < plants.length; i++) {
        const plant = plants[i];

       if (plant.tags && plant.tags.includes(25)) {
            if (cardCounter < 4) {
                createPlantCard(plant);
                cardCounter++;
            }
        }

        if (plant.id === 57) {
            createFeaturedPost(plant);
        }

        if (plant.tags && plant.tags.includes(28)) {
            CreateCareGuide(plant);
        }
    }

    } catch (error) {
        showError(error.message, "#plants");
    }
}

getPlants();
