import showMovies from "./showMovies.js";

//показать фильмы актера
export default async function showMoviesActor(url) {
  const resp = await fetch(url);
  const respData = await resp.json();

  showMovies(respData.cast);

  console.log('respData.cast: ', respData.cast);
  console.log('respData.crew: ', respData.crew);
}
