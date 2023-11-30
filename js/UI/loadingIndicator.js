export function showLoadingIndicator() {
    const loaderDiv = document.createElement("div");
    loaderDiv.classList.add("loader-div");

    const spinner = document.createElement("div");
    spinner.classList.add("loader");

    document.body.appendChild(loaderDiv);
    loaderDiv.appendChild(spinner);
}