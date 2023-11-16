import { showError } from "./errorMessage.js";
import { getPosts } from "../data/API.js";
import { showLoadingIndicator } from "./loadingIndicator.js";

const latestContainer = document.querySelector("#posts");
const loaderHere = document.querySelector(".loader-here");
const previousBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const cardDiv = document.querySelector(".card-div");

let currentIndex = 0;
let latest; 
let postPerPage;

const postsDiv = document.createElement("div");
postsDiv.classList.add("posts-holder");

const btnImgPriv = document.createElement("img");
btnImgPriv.src = "Images/Leafleft.png";
btnImgPriv.alt = "Previous";

previousBtn.appendChild(btnImgPriv);

const btnImgNext = document.createElement("img");
btnImgNext.src = "Images/Leafright.png";
btnImgNext.alt = "Next";

nextBtn.appendChild(btnImgNext);


cardDiv.appendChild(postsDiv);


function responsivePosts () {
    if (window.innerWidth >= 1400) {
        postPerPage = 4;
    } else if (window.innerWidth >= 900) {
        postPerPage = 3;
    } else if (window.innerWidth >= 600) {
        postPerPage = 2;
    } else {
        postPerPage = 1;
    }
}

async function renderLatestPosts(startIndex) {
    try { 
        showLoadingIndicator(".loader-here")
        latest = await getPosts();
 
        loaderHere.innerHTML = "";

        postsDiv.innerHTML = "";
        
        for (let i = startIndex; i < startIndex + postPerPage && i < latest.length; i++) {
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

            postsDiv.appendChild(postCard);
            postCard.appendChild(newestLink);
            newestLink.appendChild(postImg);
            newestLink.appendChild(postTitle);
            newestLink.appendChild(readBtn);
        }
        
        postsDiv.appendChild(previousBtn);
        postsDiv.appendChild(nextBtn);

    } catch (error) {
        showError(error.message,"#posts");
    }
}

function updateButtons () {
    previousBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex + postPerPage >= latest.length;
}

nextBtn.addEventListener('click', () => {
    if (currentIndex + postPerPage < latest.length) {
        currentIndex += postPerPage;
        renderLatestPosts(currentIndex);
        updateButtons();
    }
});

previousBtn.addEventListener('click', () => {
    if (currentIndex - postPerPage >= 0) {
        currentIndex -= postPerPage;
        renderLatestPosts(currentIndex);
        updateButtons();
    }
});

responsivePosts ();
renderLatestPosts(0);
updateButtons();