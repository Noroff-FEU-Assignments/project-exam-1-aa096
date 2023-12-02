const directory = document.querySelector(".directory");

export function createDirectory(post) {
    
    const homePath = document.createElement("a");
    homePath.href = "/./index.html";
    homePath.textContent = "Home";

    const blogLink = document.createElement("a");
    blogLink.href = "/html/blogposts.html";
    blogLink.textContent = "Blog";

    const categoryLink1 = document.createElement("a");
    categoryLink1.href = "/html/plants.html"
    categoryLink2.textContent = "Plants"

    const categoryLink2 = document.createElement("a");
    categoryLink2.href = "/html/guides.html";
    categoryLink2.textContent = "Guides";

   const postLink = document.createElement ("p");
   postLink.classList.add = (".directory-p");
   postLink.textContent = post.title; 

}

directory.appendChild(homePath);
directory.appendChild(document.createTextNode(' > ')); // Add text between links
directory.appendChild(categoryLink1);
directory.appendChild(document.createTextNode(' > ')); // Add text between links
directory.appendChild(categoryLink2);
directory.appendChild(postLink);
