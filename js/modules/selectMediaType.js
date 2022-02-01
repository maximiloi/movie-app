import showMovie from "./showMovie.js";
import showSeriesOne from "./showSeriesOne.js";

export default function selectMediaType(id, media_type) {
  console.log('media_type: ', media_type);
  if (media_type == undefined) {
    showMovie(id);
  } else if (media_type === 'movie') {
    showMovie(id);
  } else if (media_type === 'tv') {
    showSeriesOne(id);
  }
}