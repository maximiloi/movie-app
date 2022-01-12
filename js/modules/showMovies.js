import { IMG_URL } from "./constants.js";
import changeColorByRating from "./changeColorByRating.js";

const moviesWrap = document.querySelector(".movie");

// показать фильмы
export default function showMovies(movies) {
  moviesWrap.innerHTML = "";

  movies.forEach((movie) => {
    const { poster_path, title, vote_average, overview, id, name } = movie;

    if (poster_path) {
      const movieEl = document.createElement("div");
      movieEl.classList.add("movie__item");

      movieEl.innerHTML = `<img src="${
        IMG_URL + poster_path
      }" alt="${title}" class="movies__img" />
                <div class="movie__shortinfo">
                    <h3 class="movie__title">${title || name}</h3>
                    <span class="movie__vote ${changeColorByRating(
                      vote_average
                    )}">${vote_average}</span>
                </div>
                <div class="movie__overview">
                    <h3 class="movie__overview--title" > Описание:</h3>
                    <p>${overview}</p>
                </div>`;

      movieEl.addEventListener("click", (e) => {
        showMovie(id);
        personEl.innerHTML = "";
      });

      moviesWrap.appendChild(movieEl);
    }
  });
}
