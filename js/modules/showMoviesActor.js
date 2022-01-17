import showMovies from "./showMovies.js";

//показать фильмы актера
export default async function showMoviesActor(url) {
  const resp = await fetch(url);
  const respData = await resp.json();

  showMovies(respData.cast);
}
