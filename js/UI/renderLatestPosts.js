import { showError } from "./errorMessage.js";
import { getPosts } from "../data/API.js";
import { showLoadingIndicator } from "./loadingIndicator.js";

const latestContainer = document.querySelector("#posts");
let currentIndex = 0;
let latest; 

const cardHolder = document.createElement("div");
cardHolder.classList.add("card-div");

const prevBtn = document.createElement('button'); 
prevBtn.id = 'prev-btn';;

const prevImg = document.createElement('img');
prevImg.src = "Images/leafleft.png";
prevImg.alt = "Previous";

prevBtn.appendChild(prevImg);
cardHolder.appendChild(prevBtn);

const nextBtn = document.createElement('button');
nextBtn.id = 'next-btn';

const nextImg = document.createElement('img');
nextImg.src = "Images/leafright.png";
nextImg.alt = "Next";

nextBtn.appendChild(nextImg);
cardHolder.appendChild(nextBtn);


async function renderLatestPosts() {
    try { 
        showLoadingIndicator("#posts")
        latest = await getPosts();
 
        latestContainer.innerHTML ="";

        const heading = document.createElement("h1");
        heading.textContent = "Latest Posts";
        latestContainer.appendChild(heading);
        
    for (let i = currentIndex; i < currentIndex + 4 i++) {
        if (i < latest.length) { 
        const post = latest[i];

        const postCard = document.createElement("div");
        postCard.classList.add("card");

        const newestLink = document.createElement("a");
        newestLink.href = "post.html?id=" + post.id; 

        const postImg = document.createElement("img");
        postImg.src = post.jetpack_featured_media_url;
        postImg.alt = post.title.rendered;

        const postTitle = document.createElement("h2");
        postTitle.classList.add("card-h2");
        postTitle.textContent = post.title.rendered;

        const readBtn = document.createElement('button');
        readBtn.classList.add('read-btn');
        readBtn.textContent = 'Read More';

        cardHolder.appendChild(postCard)
        postCard.appendChild(newestLink);
        newestLink.appendChild(postImg);
        newestLink.appendChild(postTitle);
        newestLink.appendChild(readBtn);
    }
        latestContainer.appendChild(cardHolder);
        }
    } 
    catch (error) {
        showError(error.message,"#posts");
    }
}

function showNext() {
    if (currentIndex < latest.length - 4) {
        currentIndex += 1;
        renderLatestPosts();
    }
}
    
    
function showPrev() {
    if (currentIndex > 0) {
        currentIndex -= 1;
        renderLatestPosts();
    }
}
    
nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);

renderLatestPosts();
