const nav_button = document.querySelector(".nav-button");
const list_of_contents = document.querySelector(".list-of-contents");
const list_of_articles = document.querySelector(".list-of-articles");

nav_button.addEventListener('click', function () {
    if (list_of_articles.style.display === 'none') {
        list_of_contents.style.display = 'block'
        list_of_articles.style.display = 'block'
    } else {
        list_of_contents.style.display = 'none'
        list_of_articles.style.display = 'none'
    }
});

const card = document.querySelector(".card");
const main_link = document.querySelector(".main-link")
card.addEventListener("click", function () {
    main_link.click();
});