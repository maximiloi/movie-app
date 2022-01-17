import {
  BASE_URL,
  NOW_PLAYING_URL,
  FAV_URL,
  FAV_URL_TV,
  API_KEY,
  LANG,
} from "./modules/constants.js";

import showMovies from "./modules/showMovies.js";
import showSeries from "./modules/showSeries.js";
import showPagination from "./modules/showPagination.js";
import searchFn from "./modules/search.js";

const personEl = document.querySelector(".person");
const nowPlaying = document.querySelector(".now_playing");
const discover = document.querySelector(".discover");
const discoverTv = document.querySelector(".discover__tv");
const form = document.querySelector(".search__form");
export const searchInput = document.querySelector(".search__input");

function init() {
  getData(BASE_URL + NOW_PLAYING_URL + API_KEY + LANG);
}

export default async function getData(url) {
  const resp = await fetch(url);
  const respData = await resp.json();

  showMovies(respData.results);
  showPagination(respData, url);
}

async function getDataSeries(url) {
  const resp = await fetch(url);
  const respData = await resp.json();

  showSeries(respData.results);
  showPagination(respData, url);
}

// Запуск приложения
init();

// Прослушивание событий

// поиск
form.addEventListener("submit", (e) => {
  const searchTerm = searchInput.value;
  e.preventDefault();
  searchFn(searchTerm);
});

nowPlaying.addEventListener("click", () => {
  getData(BASE_URL + NOW_PLAYING_URL + API_KEY + LANG);
  personEl.innerHTML = "";
});

discover.addEventListener("click", () => {
  getData(BASE_URL + FAV_URL + API_KEY + LANG);
  personEl.innerHTML = "";
});

discoverTv.addEventListener("click", () => {
  getDataSeries(BASE_URL + FAV_URL_TV + API_KEY + LANG);
  personEl.innerHTML = "";
});
