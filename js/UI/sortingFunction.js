import { getPost } from "../data/API.js";

let selectedCategory = '';
let selectedTag = '';

const firstPost = allPosts[0];
const tags = firstPost.tags;

const tagFilterDropdown = document.getElementById('tagFilter');


tags.forEach(tag => {
    const option = document.createElement('option');
    option.value = tag;
    option.textContent = `Tag ${tag}`;
    tagFilterDropdown.appendChild(option);
});


function filterPosts() {
    selectedTag = tagFilterDropdown.value;

    displayBlogPosts();
}

async function displayBlogPosts() {
    try {
        showLoadingIndicator('.load-holder');
        allPosts = await getPosts();

        if (selectedTag) {
            allPosts = allPosts.filter(post => post.tags.includes(parseInt(selectedTag)));
        }

        loadHolder.innerHTML = '';

        visablePosts = allPosts.slice(0, postsToShow);
        visablePosts.forEach(post => {
            createBlogPosts(post);
        });

        if (allPosts.length > postsToShow) {
            const buttonDiv = document.createElement('div');
            buttonDiv.classList.add('button-div');
            postHolder.appendChild(buttonDiv);
            buttonDiv.appendChild(loadMoreBtn);
        }
    } catch (error) {
        showError(error.message, '#posts');
    }
}
async function loadMore() {
    const remainingPosts = allPosts.length - postsToShow;

    if (remainingPosts > 0) {
        postsToShow += 10;
        updateVisiblePosts();
    }
    if (allPosts.length <= postsToShow) {
        const buttonDiv = document.querySelector('.button-div');
        if (buttonDiv) {
            buttonDiv.remove();
        }
    }
}

displayBlogPosts();
