import acyncFunctions from './asyncFunctions.js'

const $searchWord = document.getElementById("search-posts-field");
const $selectWord = document.getElementById("category-picker");


acyncFunctions.renderPosts();

$searchWord.addEventListener("input", (event) => {
    const searchTerm = event.target.value.trim();

    if (searchTerm.length > 0) {
        return acyncFunctions.renderFilterPosts(searchTerm);
    }
    acyncFunctions.renderPosts();
});

$selectWord.addEventListener("input", (event) => {
    const searchTerm = event.target.value.trim();
    if (searchTerm.length > 0) {
        return acyncFunctions.renderSelectPosts(searchTerm);
    }
    acyncFunctions.renderPosts();
});