import getPosts from "./services/getPosts.js";
import sortArray from "./services/sortArray.js";
import render from "./services/renderCard.js";
import filerArray from "./services/filterArray.js";



class AcyncFunctions {
    async renderPosts() {
        try {
            const posts = await getPosts();
            const sorted = sortArray(posts, "title");
            render.renderCard(sorted);

        } catch (err) {
            render.renderError(err);
        }
    }

    async renderFilterPosts(searchWord) {
        try {
            const posts = await getPosts();
            const sorted = sortArray(posts, 'title');
            const filtrated = filerArray(sorted, "title", 'category', searchWord);
            render.renderCard(filtrated);

        } catch (err) {
            render.renderError(err);
        }
    }

    async renderSelectPosts(selectWord) {
        try {
            const posts = await getPosts();
            const sorted = sortArray(posts, "title");
            const filtrated = filerArray(sorted, "title", 'category', selectWord);
            render.renderCard(filtrated);

        } catch (err) {
            render.renderError(err);
        }
    }
}

export default new AcyncFunctions();