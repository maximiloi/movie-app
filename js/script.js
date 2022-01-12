import {
  BASE_URL,
  NOW_PLAYING_URL,
  API_KEY,
  LANG,
} from "./modules/constants.js";

import showPage from "./modules/pagination.js";

const personEl = document.querySelector(".person");
const nowPlaying = document.querySelector(".now_playing");
const discover = document.querySelector(".discover");
const discoverTv = document.querySelector(".discover__tv");
const form = document.querySelector(".search__form");
const searchInput = document.querySelector(".search__input");

getMovies(BASE_URL + NOW_PLAYING_URL + API_KEY + LANG);

async function getMovies(url) {
  const resp = await fetch(url);
  const respData = await resp.json();
  console.log("respData: ", respData);

  showMovies(respData.results, url);
  showPage(respData, url);
}

import showMovies from "./modules/showMovies.js";

// async function getMoviesCredits(url) {
//     const resp = await fetch(url);
//     const respData = await resp.json();

//     showMovies(respData.cast);
// }

// //показать актера
// async function showPerson(id) {
//     let url = BASE_URL + 'person/' + id + API_KEY + LANG;

//     const resp = await fetch(url);
//     const respData = await resp.json();

//     const { profile_path, name, birthday, place_of_birth, biography } = respData;

//     personEl.innerHTML = `
//         <img src="${IMG_URL + profile_path}" alt="" class="person__img" />
//         <div class= "person__wrapper" >
//             <p class="person__name">${name}</p>
//             <p class="person__birthday">${birthday}</p>
//             <p class="person__place_of_birth">${place_of_birth}</p>
//             <p class="person__biography">${biography}</p>
//         </div >
//     `;

//     moviesWrap.before(personEl);
// }

// // показать актеров
// async function showCredits(id) {
//     let url = BASE_URL + 'movie/' + id + '/credits' + API_KEY + LANG;

//     const resp = await fetch(url);
//     const respData = await resp.json();

//     const castWrapper = document.createElement('section');
//     castWrapper.classList.add('cast__wrapper');

//     const castList = document.createElement('ul');
//     castList.classList.add('cast__list');

//     moviesWrap.appendChild(castWrapper);
//     castWrapper.appendChild(castList);

//     respData.cast.forEach(cast => {
//         const { id, profile_path, name, character } = cast;

//         const castItem = document.createElement('li');
//         castItem.classList.add('cast__item');

//         castItem.innerHTML = `
//             <img src=${profile_path ? IMG_URL + profile_path : 'img/no.jpg'} alt = "" class="cast__img" />
//             <p class="cast__name">${name}</p>
//             <p class="cast__role">${character}</p>
//     `;

//         castList.appendChild(castItem);

//         castItem.addEventListener('click', () => {
//             showPerson(id);
//             getMoviesCredits('https://api.themoviedb.org/3/person/' + id + '/movie_credits' + API_KEY + LANG);
//         });
//     });
// }

// // показать фильм
// async function showMovie(id_movie) {
//     const url = BASE_URL + 'movie/' + id_movie + API_KEY + LANG;

//     const resp = await fetch(url);
//     const respData = await resp.json();

//     const { poster_path, id, title, original_title, vote_average, overview, imdb_id, tagline,
//         budget, release_date, runtime, genres, revenue } = respData;

//     const genresItem = [];
//     genres.forEach(item => {
//         genresItem.push(item.name);
//     });

//     moviesWrap.innerHTML = '';
//     pagerWrap.innerHTML = '';

//     const movieEl = document.createElement('div');
//     movieEl.classList.add('movie__wrapper');

//     movieEl.innerHTML = `
//         <img class="movie__img" src="${IMG_URL + poster_path}" alt="${title}" />
//         <ul class="movie__container">
//             <li class="movie__text movie__title">${title}</li>
//             <li class="movie__text">Оригинальное название: <span>${original_title}</span>
//                 <a href="http://imdb.com/title/${imdb_id}" target="_blank">imdb</a>
//             </li>
//             <li class="movie__text">Слоган: <span>${tagline}</span></li>
//             <li class="movie__text">Жанр: <span>${genresItem.join(', ')}</span></li >
//             <li class="movie__text">Рейтинг: <span>${vote_average}</span></li>
//             <li class="movie__text">Премьера в мире: <span>${release_date}</span></li>
//             <li class="movie__text">Время: <span>${runtime} мин</span></li>
//             <li class="movie__text">Бюджет: <span>${budget.toLocaleString()} $</span></li>
//             <li class="movie__text">Доход: <span>${revenue.toLocaleString()} $</span></li>
//             <li class="movie__text"><span class="movie__overviews">${overview}</span></li>
//         </ul >
//     `;
//     // <a href="https://4g10.zbr.ovh/item/search?query=${original_title}" target="_blank">kinopub</a>

//     showCredits(id);

//     moviesWrap.appendChild(movieEl);
// }

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

// // поиск
// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const searchTerm = searchInput.value;

//     if (searchTerm) {
//         getMovies(BASE_URL + SEARCH_URL + API_KEY + '&query=' + searchTerm + LANG);

//         searchInput.value = '';
//     }
// });

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
