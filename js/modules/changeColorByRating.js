// цвет рейтинга
export default function changeColorByRating(vote) {
  if (vote >= 7.5) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}
