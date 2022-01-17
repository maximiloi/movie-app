import { BASE_URL, API_KEY, LANG, SEARCH_URL } from "./constants.js";
import { searchInput } from "../script.js";

import getData from "../script.js";

// поиск
export default function search(searchTerm) {
  if (searchTerm) {
    getData(BASE_URL + SEARCH_URL + API_KEY + "&query=" + searchTerm + LANG);

    searchInput.value = "";
  }
}
