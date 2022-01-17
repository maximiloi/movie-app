import {
  BASE_URL,
  NOW_PLAYING_URL,
  API_KEY,
  LANG,
} from "./modules/constants.js";

import showMovies from "./modules/showMovies.js";
import showPagination from "./modules/showPagination.js";
import searchFn from "./modules/search.js";

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

init();

// //показать сериал
// async function showSeries(id_series) {
//     const url = BASE_URL + 'tv/' + id_series + API_KEY + LANG;

//     const resp = await fetch(url);
//     const respData = await resp.json();

//     const { poster_path, id, name, original_name, vote_average, overview, imdb_id,
//         tagline, first_air_date, episode_run_time, genres, number_of_seasons, number_of_episodes, seasons } = respData;

//     const genresItem = [];
//     genres.forEach(item => {
//         genresItem.push(item.name);
//     });

//     moviesWrap.innerHTML = '';
//     pagerWrap.innerHTML = '';

//     const movieEl = document.createElement('div');
//     movieEl.classList.add('movie__wrapper');

//     // const el = '';
//     // const seasonItem = document.createElement('li');
//     // seasonItem.classList.add('season__item');

//     // seasons.forEach(season => {
//     //     seasonItem.innerHTML =
//     //         `
//     //       <ul class="season__list">
//     //     <img src="${IMG_URL + season.poster_path}" alt="name + season.name">
//     //     <h3 class= "season__number">${season.name}</h3 >
//     //     <p class="season__episode">Кол-во: ${season.episode_count}</p>
//     //     <p class="season__onair">Дата выхода: ${season.air_date}</p>
//     // </ul>
//     //     `;
//     // });

//     // el.appendChild(seasonItem);

//     movieEl.innerHTML = `
//         <img class="movie__img" src="${IMG_URL + poster_path}" alt="${name}" />
//         <ul class="movie__container">
//             <li class="movie__text movie__title">${name}</li>
//             <li class="movie__text">Оригинальное название: <span>${original_name}</span>
//                 <a href="http://imdb.com/title/${imdb_id}" target="_blank">imdb</a>
//                 <a href="https://4g10.zbr.ovh/item/search?query=${original_name}" target="_blank">kinopub</a>
//             </li>
//             <li class="movie__text">Слоган: <span>${tagline}</span></li>
//             <li class="movie__text">Жанр: <span>${genresItem.join(', ')}</span></li>
//             <li class="movie__text">Рейтинг: <span>${vote_average}</span></li>
//             <li class="movie__text">Выход в эфир: <span>${first_air_date}</span></li>
//             <li class="movie__text">Время эпизода: <span>${episode_run_time} мин</span></li>
//             <li class="movie__text">Кол-во сезонов: <span>${number_of_seasons}</span></li>
//             <li class="movie__text">Кол-во эпизодов: <span>${number_of_episodes}</span></li>
//             <li class="movie__text"><span class="movie__overviews">${overview}</span></li>
//         </ul>
//         `;
//     // showCredits(id);

//     moviesWrap.appendChild(movieEl);

// }

// Прослушивание событий

// поиск
form.addEventListener("submit", (e) => {
  const searchTerm = searchInput.value;
  e.preventDefault();
  searchFn(searchTerm);
});

// nowPlaying.addEventListener('click', () => {
//     getMovies(BASE_URL + NOW_PLAYING_URL + API_KEY + LANG);
//     personEl.innerHTML = '';
// });

// discover.addEventListener('click', () => {
//     getMovies(BASE_URL + FAV_URL + API_KEY + LANG);
//     personEl.innerHTML = '';
// });

// discoverTv.addEventListener('click', () => {
//     getMovies(BASE_URL + FAV_URL_TV + API_KEY + LANG);
//     personEl.innerHTML = '';
// });
