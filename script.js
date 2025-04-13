const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSoA8jgZVHNOH-yB-VGP5wx3jHP8-aZYsHSJnKLIFlD8m_CgvRkEp4DUFtL6FENVkEgUg0F-bC6IxFr/pub?output=csv";

async function fetchMovies() {
  const res = await fetch(csvUrl);
  const data = await res.text();
  const rows = data.split("\n").slice(1);
  const movies = rows.map(row => {
    const [title, poster, link] = row.split(",");
    return { title, poster, link };
  });
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
