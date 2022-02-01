import { BASE_URL, API_KEY, LANG, IMG_URL } from "./constants.js";

import showActor from "./showActor.js";
import showMoviesActor from "./showMoviesActor.js";

const moviesWrap = document.querySelector(".movie");

// показать актеров
export default async function showActors(id) {
  let url = BASE_URL + "movie/" + id + "/credits" + API_KEY + LANG;

  const resp = await fetch(url);
  const respData = await resp.json();

  const castWrapper = document.createElement("section");
  castWrapper.classList.add("cast__wrapper");

  const castTitle = document.createElement("h2");
  castTitle.classList.add("cast__title");
  castTitle.innerText = "Актеры";

  const castList = document.createElement("ul");
  castList.classList.add("cast__list");

  moviesWrap.appendChild(castWrapper);
  castWrapper.appendChild(castTitle);
  castWrapper.appendChild(castList);

  respData.cast.forEach((cast) => {
    const { id, profile_path, name, character } = cast;

    const castItem = document.createElement("li");
    castItem.classList.add("cast__item");

    castItem.innerHTML = `
            <img src=${profile_path ? IMG_URL + profile_path : "img/no.jpg"
      } alt = "" class="cast__img" />
            <p class="cast__name">${name}</p>
            <p class="cast__role">${character}</p>
    `;

    castList.appendChild(castItem);

    castItem.addEventListener("click", () => {
      showActor(id);

      showMoviesActor(
        "https://api.themoviedb.org/3/person/" +
        id +
        "/combined_credits" +
        API_KEY +
        LANG
      );
    });
  });
}
