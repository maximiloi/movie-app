import { BASE_URL, API_KEY, LANG, IMG_URL } from "./constants.js";

const moviesWrap = document.querySelector(".movie");

//показать биографию актера
export default async function showActor(id) {
  let url = BASE_URL + "person/" + id + API_KEY + LANG;

  window.scrollTo(0, 0);

  const resp = await fetch(url);
  const respData = await resp.json();

  const personEl = document.createElement("section");
  personEl.classList.add("person");

  moviesWrap.appendChild(personEl);

  const { profile_path, name, birthday, place_of_birth, biography } = respData;

  personEl.innerHTML = `
        <img src="${IMG_URL + profile_path}" alt="" class="person__img" />
        <div class= "person__wrapper" >
            <p class="person__name">${name}</p>
            <p class="person__birthday">${birthday}</p>
            <p class="person__place_of_birth">${place_of_birth}</p>
            <p class="person__biography">${biography}</p>
        </div >
    `;

  moviesWrap.before(personEl);
}
