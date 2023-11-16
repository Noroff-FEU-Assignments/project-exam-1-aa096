export function showLoadingIndicator(target) {
    const loaderPlace = document.querySelector(target);

    const loaderDiv = document.createElement("div");
    loaderDiv.classList.add("loader-div");

    const spinner = document.createElement("div");
    spinner.classList.add("loader");

    loaderPlace.appendChild(loaderDiv);
    loaderDiv.appendChild(spinner);
}