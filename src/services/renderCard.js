/** a class with afunction that receive an array of object and render a bootstrap cards to the HTML file & a function that render an error to the HTML file **/
class Render {
  renderCard(posts) {
    const $elem = document.getElementById("posts-row");
    $elem.innerHTML = "";

    posts.forEach((post) => {
      $elem.innerHTML += `
<div class="col-xl-4 col-lg-6 my-2">
      <div class="card post-card-wrap">
        <img
          src="${post.imageUrl}"
          alt="${post.imageDescription}"
          class="card-img-top image-fluid"
        />
        <div class="card-body">
          <h5 class="card-title mb-0">${post.title}</h5>
          <small>
            <span><i class="fa fa-tag"></i> ${post.category}</span>
            <span class="ml-2">
              <i class="fa fa-calendar"></i> ${post.publishDate}
            </span>
            <span class="ml-2">
              <i class="fa fa-user-circle"></i> ${post.writtenBy}
            </span>
          </small>
          <p class="card-text mt-2">${post.article}</p>
        </div>
      </div>
    </div>
         `;
    });
  }

  renderError(error) {
    const $elem = document.getElementById("posts-row");
    $elem.innerHTML = `<div ><i>${error}</i></div>`;
  }
}

export default new Render();