"use strict";

const titleClickHandler = function (event) {
  event.preventDefault();
  const clickedElement = this;
  console.log("Link was clicked!");

  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll(".titles a.active");

  for (let activeLink of activeLinks) {
    activeLink.classList.remove("active");
  }

  /* [IN PROGRESS] add class 'active' to the clicked link */

  console.log("clickedElement:", clickedElement);
  clickedElement.classList.add("active");

  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll("article.active");

  /* get 'href' attribute from the clicked link */
  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove("active");
  }

  /* find the correct article using the selector (value of 'href' attribute) */
  const articleSelector = clickedElement.getAttribute("href");
  const targetArticleToShow = document.querySelector(articleSelector);

  /* add class 'active' to the correct article */
  targetArticleToShow.classList.add("active");
};

const optArticleSelector = ".post",
  optTitleSelector = ".post-title",
  optTitleListSelector = ".titles";

function generateTitleLinks() {
  /* remove contents of titleList */
  const titleList = document.querySelector(".list.titles");
  titleList.innerHTML = "";
  /* for each article */
  const articles = document.querySelectorAll("article");
  for (let article of articles) {
    const articleId = article.getAttribute("id");
    const titleElement = article.querySelector(".post-title");
    const title = titleElement.innerHTML;
    const linkHTML =
      '<li><a href="#' + articleId + '"><span>' + title + "</span></a></li>";
    titleList.innerHTML = titleList.innerHTML + linkHTML;
  }
  const links = document.querySelectorAll(".titles a");

  for (let link of links) {
    link.addEventListener("click", titleClickHandler);
  }
  /* get the article id */
  /* find the title element */
  /* get the title from the title element */
  /* create HTML of the link */
  /* insert link into titleList */
}
generateTitleLinks();
