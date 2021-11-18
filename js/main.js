var ota = document.querySelector(".card__box")

for (var i = 0; i < 10; i++) {
    var div = document.createElement("div")
    div.innerHTML = `
    <div class="card" style="width: 21rem;">
    <img src="${movies[i].smallThumbnail}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title" >${movies[i].title}</h5>
        <p><i class="fas fa-calendar"></i>${movies[i].year}</p>
        <p><i class="fas fa-star text-warning"></i>${movies[i].imdbRating}</p>
        <div>
            <button type="button" class="btn btn-outline-primary btn-sm">watch trailer</button>
            <button type="button" class="btn btn-outline-primary btn-sm">More info</button>
            <button type="button" class="btn btn-outline-primary btn-sm">Bookmark</button>
        </div>
    </div>
    </div>

    `
    div.classList.add("card")
    ota.appendChild(div)
}