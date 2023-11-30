import { showError } from "./UI/errorMessage.js"; 
import { getPosts } from "./data/API.js";
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
    if (window.innerWidth >= 1410) {
        postPerPage = 4;
    } else if (window.innerWidth >= 1021) {
        postPerPage = 3;
    } else if (window.innerWidth >= 715) {
        postPerPage = 2;
    } else {
        postPerPage = 1;
    }
}

async function renderLatestPosts() {
    try { 
        latest = await getPosts();

        const latestPosts = latest.slice(0, 9);

        postsDiv.innerHTML = "";
        
        for (let i = currentIndex; i < currentIndex + postPerPage && i < latestPosts.length; i++) {
            const post = latest[i];
            createPostCards(post);
        }
        
        carouselWrap.appendChild(nextBtn);

    } catch (error) {
        showError(error.message,"#posts");
    }

    // nextBtn.diabled = currentIndex + postPerPage >= latestPosts.length;
}



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

responsivePosts();
renderLatestPosts(0);


async function getPlants() {
    try { 
        const plants = await getPosts();

    for (let i = 0; i < plants.length; i++) {
        const plant = plants[i];

       if(plant.tags && plant.tags.includes(25)) {
            createPlantCard(plant);
        }

        if(plant.id === 57) {
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
