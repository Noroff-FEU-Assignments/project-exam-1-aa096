import { showError } from "./utils/errorMessage.js";
import { createSpesificPost } from "./UI/createBlogSpesificPost.js";
import { showLoadingIndicator, hideLoadingIndicator } from "./utils/loadingIndicator.js";

const postDiv = document.getElementById("post-container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const title = params.get("name");

const url = "https://aashild-rasmussen.no/wp-json/wp/v2/posts/"+ id;

async function getPost() {
    try { 
        showLoadingIndicator();
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Error, unable to fetch post");
        }

        postDiv.innerHTML = '';

        const result = await response.json();
            hideLoadingIndicator();
            getTitle(result);
            createSpesificPost(result);
        } 

        catch (error) {
            hideLoadingIndicator();
            showError (error.message, "#post-container");
        }
}

function getTitle (result) {
    const titleContainer = document.getElementById("title");    
    titleContainer.textContent = result.title.rendered + " | Leaf at Home";
}

getPost();