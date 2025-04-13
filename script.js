const jsonUrl = "movies.json";

async function fetchMovies() {
  const res = await fetch(jsonUrl);
  const movies = await res.json();
  return movies;
}

const movieList = document.getElementById("movie-list");
const searchInput = document.getElementById("search");

function displayMovies(data) {
  movieList.innerHTML = "";
  data.forEach(movie => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <a href="movie.html?video=${encodeURIComponent(movie.link)}">Tonton</a>
    `;
    movieList.appendChild(card);
  });
}

searchInput.addEventListener("input", async () => {
  const keyword = searchInput.value.toLowerCase();
  const movies = await fetchMovies();
  const filtered = movies.filter(m => m.title.toLowerCase().includes(keyword));
  displayMovies(filtered);
});

fetchMovies().then(displayMovies);
