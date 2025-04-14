const movieData = [
  {
    title: "John Wick",
    genre: ["Action", "Thriller"],
    rating: 4.5,
    year: 2019,
    quality: "1080p",
    image: "poster/johnwick.jpg",
    url: "https://contoh.com/johnwick"
  },
  {
    title: "Avengers: Endgame",
    genre: ["Action", "Adventure", "Sci-Fi"],
    rating: 4.8,
    year: 2019,
    quality: "4K",
    image: "poster/avengersendgame.jpg",
    url: "https://contoh.com/avengersendgame"
  },
  {
    title: "The Lion King",
    genre: ["Animation", "Adventure", "Drama"],
    rating: 4.3,
    year: 2019,
    quality: "1080p",
    image: "poster/lionking.jpg",
    url: "https://contoh.com/lionking"
  }
];

function displayMovies(movies) {
  const movieList = document.getElementById("movie-list");
  movieList.innerHTML = "";

  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    movieCard.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}">
      <div class="movie-info">
        <h3 class="movie-title">${movie.title}</h3>
        <p class="movie-meta">${movie.year} • ${movie.genre.join(", ")} • ${movie.quality}</p>
        <div class="movie-rating">★ ${movie.rating}</div>
      </div>
    `;

    movieCard.addEventListener("click", () => {
      window.open(movie.url, "_blank");
    });

    movieList.appendChild(movieCard);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayMovies(movieData);

  const darkModeToggle = document.getElementById("dark-mode-toggle");
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  const searchBar = document.getElementById("search-bar");
  searchBar.addEventListener("input", (event) => {
    const query = event.target.value.toLowerCase();
    const filteredMovies = movieData.filter(movie =>
      movie.title.toLowerCase().includes(query)
    );
    displayMovies(filteredMovies);
  });
});
