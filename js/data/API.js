import { showLoadingIndicator } from "../UI/loadingIndicator.js";

export async function getPosts() {
    const url = "https://aashild-rasmussen.no/wp-json/wp/v2/posts?per_page=100";
    
try { 
    showLoadingIndicator();

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Error, unable to fetch posts");
    }
    const result = await response.json();
    return result; 

    } catch (error) {
    throw error;
    }
}