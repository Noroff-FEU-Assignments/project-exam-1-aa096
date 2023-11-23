export async function getPosts() {
    const url = "https://aashild-rasmussen.no/wp-json/wp/v2/posts?per_page=100";
    
try { 
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

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const title = params.get("name")

const url = "https://aashild-rasmussen.no/wp-json/wp/v2/posts/"+ id;

export async function getPost() {
    try { 
        showLoadingIndicator (target);
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Error, unable to fetch posts");
        }
        const result = await response.json();
            getTitle (result);
        } 

        catch (error) {
            showError (error.message, target);
        }
}

export function getTitle (result) {
    const titleContainer = document.getElementById("name");    
    titleContainer.textContent = result.title.rendered;
}