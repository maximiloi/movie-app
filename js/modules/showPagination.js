import getData from "../script.js";

const pagerWrap = document.querySelector(".pager");

// показать пагинацию
export default function showPage(respData, url) {
  pagerWrap.innerHTML = "";
  const pageEL = document.createElement("div");
  pageEL.classList.add("pager__wrapper");

  pageEL.innerHTML = `
        <div class="counter">
            <span class="number">0${respData.page}</span>
            <div class="background"></div>
            <span class="number">0${respData.total_pages}</span>
        </div>
    `;

  pagerWrap.appendChild(pageEL);

  if (respData.page > 1) {
    pageEL.insertAdjacentHTML(
      "afterbegin",
      '<div class="text page__previous">Предыдущая страница</div>'
    );

    const pagePrevious = pageEL.querySelector(".page__previous");
    pagePrevious.addEventListener("click", () => {
      let prevPage = url + "&page=" + (respData.page - 1);
      getData(prevPage);
    });
  }

  if (respData.page < respData.total_pages) {
    pageEL.insertAdjacentHTML(
      "beforeEnd",
      '<div class="text page__next">Следующая страница</div>'
    );

    const pageNext = document.querySelector(".page__next");
    pageNext.addEventListener("click", () => {
      let nextPage = url + "&page=" + (respData.page + 1);
      getData(nextPage);
    });
  }
}
