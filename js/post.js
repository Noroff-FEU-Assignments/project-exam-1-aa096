import { showError } from "./UI/errorMessage.js";
import { createSpesificPost } from "./UI/createBlogSpesificPost.js";


const postDiv = document.getElementById("post-container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const title = params.get("name")

const url = "https://aashild-rasmussen.no/wp-json/wp/v2/posts/"+ id;

async function getPost() {
    try { 
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Error, unable to fetch posts");
        }

        postDiv.innerHTML = '';

        const result = await response.json();
            getTitle(result);
            createSpesificPost(result);
        } 

        catch (error) {
            showError (error.message, "#post-container");
        }
}

function getTitle (result) {
    const titleContainer = document.getElementById("title");    
    titleContainer.textContent = result.title.rendered;
}

getPost();