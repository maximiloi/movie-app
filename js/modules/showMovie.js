import { BASE_URL, API_KEY, LANG, IMG_URL } from "./constants.js";

import showActors from "./showActors.js";

const moviesWrap = document.querySelector(".movie");
const pagerWrap = document.querySelector(".pager");

// показать фильм
export default async function showMovie(id_movie) {
  const url = BASE_URL + "movie/" + id_movie + API_KEY + LANG;

  const resp = await fetch(url);
  const respData = await resp.json();

  const {
    poster_path,
    id,
    title,
    original_title,
    vote_average,
    overview,
    imdb_id,
    tagline,
    budget,
    release_date,
    runtime,
    genres,
    revenue,
  } = respData;

  const genresItem = [];
  genres.forEach((item) => {
    genresItem.push(item.name);
  });

  moviesWrap.innerHTML = "";
  pagerWrap.innerHTML = "";

  const movieEl = document.createElement("div");
  movieEl.classList.add("movie__wrapper");

  movieEl.innerHTML = `
        <img class="movie__img" src="${IMG_URL + poster_path}" alt="${title}" />
        <ul class="movie__container">
            <li class="movie__text movie__title">${title}</li>
            <li class="movie__text">Оригинальное название: <span>${original_title}</span>
                <a href="http://imdb.com/title/${imdb_id}" target="_blank">imdb</a>
                <a href="https://4g10.zbr.ovh/item/search?query=${original_title}" target="_blank">kinopub</a>
            </li>
            <li class="movie__text">Слоган: <span>${tagline}</span></li>
            <li class="movie__text">Жанр: <span>${genresItem.join(
              ", "
            )}</span></li >
            <li class="movie__text">Рейтинг: <span>${vote_average}</span></li>
            <li class="movie__text">Премьера в мире: <span>${release_date}</span></li>
            <li class="movie__text">Время: <span>${runtime} мин</span></li>
            <li class="movie__text">Бюджет: <span>${budget.toLocaleString()} $</span></li>
            <li class="movie__text">Доход: <span>${revenue.toLocaleString()} $</span></li>
            <li class="movie__text"><span class="movie__overviews">${overview}</span></li>
        </ul >
    `;

  showActors(id);

  moviesWrap.appendChild(movieEl);
}
