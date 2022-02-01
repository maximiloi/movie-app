import { BASE_URL, API_KEY, LANG, IMG_URL } from "./constants.js";

import showActors from "./showActors.js";

//показать сериал
export default async function showSeriesOne(id_series) {
  const url = BASE_URL + "tv/" + id_series + API_KEY + LANG;

  const resp = await fetch(url);
  const respData = await resp.json();

  const {
    poster_path,
    id,
    name,
    original_name,
    vote_average,
    overview,
    imdb_id,
    tagline,
    first_air_date,
    episode_run_time,
    genres,
    number_of_seasons,
    number_of_episodes,
    seasons,
  } = respData;

  const moviesWrap = document.querySelector(".movie");
  const pagerWrap = document.querySelector(".pager");

  const genresItem = [];
  genres.forEach((item) => {
    genresItem.push(item.name);
  });

  moviesWrap.innerHTML = "";
  pagerWrap.innerHTML = "";

  const movieEl = document.createElement("div");
  movieEl.classList.add("movie__wrapper");

  movieEl.innerHTML = `
        <img class="movie__img" src="${IMG_URL + poster_path}" alt="${name}" />
        <ul class="movie__container">
            <li class="movie__text movie__title">${name}</li>
            <li class="movie__text">Оригинальное название: <span>${original_name}</span>
                <a href="http://imdb.com/title/${imdb_id}" target="_blank">imdb</a>
                <a href="https://4g10.zbr.ovh/item/search?query=${original_name}" target="_blank">kinopub</a>
            </li>
            <li class="movie__text">Слоган: <span>${tagline}</span></li>
            <li class="movie__text">Жанр: <span>${genresItem.join(
    ", "
  )}</span></li>
            <li class="movie__text">Рейтинг: <span>${vote_average}</span></li>
            <li class="movie__text">Выход в эфир: <span>${first_air_date}</span></li>
            <li class="movie__text">Время эпизода: <span>${episode_run_time} мин</span></li>
            <li class="movie__text">Кол-во сезонов: <span>${number_of_seasons}</span></li>
            <li class="movie__text">Кол-во эпизодов: <span>${number_of_episodes}</span></li>
            <li class="movie__text"><span class="movie__overviews">${overview}</span></li>
        </ul>
        `;

  const seasonWrapper = document.createElement("section");
  seasonWrapper.classList.add("season__wrapper");

  const seasonList = document.createElement("ul");
  seasonList.classList.add("season__list");

  seasons.forEach((season) => {
    const seasonItem = document.createElement("li");
    seasonItem.classList.add("season__item");

    seasonItem.innerHTML = `
      <img class="season__img" 
      src="${IMG_URL + season.poster_path}" 
      alt="${name}-${season.name}">
      <div class="season__inner">
        <h3 class="season__number">${season.name}</h3 >
        <p class="season__episode">Кол-во серий: ${season.episode_count}</p>
        <p class="season__onair">Дата выхода: ${season.air_date}</p>
        ${season.overview
        ? '<p class="season__onair">Описание: ' + season.overview + "</p>"
        : ""
      }
      </div>
      `;

    seasonList.appendChild(seasonItem);
  });

  showActors(id);

  moviesWrap.appendChild(movieEl);
  moviesWrap.appendChild(seasonWrapper);
  seasonWrapper.appendChild(seasonList);
}
