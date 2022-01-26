import { BASE_URL, API_KEY, LANG, IMG_URL } from "./constants.js";

const moviesWrap = document.querySelector(".movie");

//показать кадры фильма
export default async function showBackgroundImages(id) {
  let url = BASE_URL + "movie/" + id + "/images" + API_KEY + LANG + "&include_image_language=ru,en,null";
  // console.log('url: ', url);

  const resp = await fetch(url);
  const respData = await resp.json();

  const imagesWrapper = document.createElement("section");
  imagesWrapper.classList.add("images__wrapper");

  const imagesList = document.createElement("ul");
  imagesList.classList.add("images__list");

  moviesWrap.appendChild(imagesWrapper);
  imagesWrapper.appendChild(imagesList);

  // console.log('respData: ', respData);

  respData.backdrops.forEach((backdrop) => {
    // console.log('backdrop: ', backdrop);
    const { id, file_path, name, character } = backdrop;

    const imagesItem = document.createElement("li");
    imagesItem.classList.add("images__item");

    imagesItem.innerHTML = `
            <img src=${file_path ? IMG_URL + file_path : "img/no.jpg"
      } alt = "" class="images__img" />
    `;

    imagesList.appendChild(imagesItem);
  });
}