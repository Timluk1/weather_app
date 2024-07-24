import { Api } from "./api.js";
import { API_KEY } from "./config.js";
import { getElementInformation } from "./information.js";

const cityPrompt = document.querySelector(".city-prompt");
const searchContainer = document.querySelector(".search-container");
const searchButton = document.querySelector("#search-btn");
const cityInput = document.querySelector("#city-input");

const api = new Api(API_KEY);

searchButton.addEventListener("click", async () => {
    const information = document.querySelector(".information");
    searchContainer.insertAdjacentHTML(
        "afterend",
        `<div class="loader"></div>`
    );

    cityPrompt.textContent = "";
    if (information) information.remove();

    const city = cityInput.value;
    const data = await api.getCityData(city);
    const parseData = await api.cityDataParse(data);
    const loader = document.querySelector(".loader");
    setTimeout(() => {
        if (parseData) {
            loader.remove();
            cityPrompt.insertAdjacentHTML(
                "afterend",
                getElementInformation(parseData)
            );
            cityPrompt.textContent = "";
        } else {
            loader.remove();
            cityPrompt.textContent = "Enter the correct name in English!";
        }
    }, 2000);
});
