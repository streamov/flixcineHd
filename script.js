const movies = [
  {
    title: "Polis Evo 3",
    poster: "assets/poster/polis-evo-3.jpg",
    link: "https://drive.google.com/uc?export=preview&id=YOUR_GOOGLE_DRIVE_ID"
  },
  {
    title: "BoBoiBoy Movie 2",
    poster: "assets/poster/boboiboy-2.jpg",
    link: "https://drive.google.com/uc?export=preview&id=YOUR_GOOGLE_DRIVE_ID"
  }
];

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

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = movies.filter(m => m.title.toLowerCase().includes(keyword));
  displayMovies(filtered);
});

displayMovies(movies);
