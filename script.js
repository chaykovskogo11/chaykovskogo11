let nav_button = document.querySelector(".nav-button");
let list_of_contents = document.querySelector(".list-of-contents");
let list_of_articles = document.querySelector(".list-of-articles");

nav_button.addEventListener('click', function () {
    if (list_of_articles.style.display === 'none') {
        list_of_contents.style.display = 'block'
        list_of_articles.style.display = 'block'
    } else {
        list_of_contents.style.display = 'none'
        list_of_articles.style.display = 'none'
    }
});