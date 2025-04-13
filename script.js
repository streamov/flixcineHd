// Array of genres from A to Z
const genres = [
  "Action", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary",
  "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Musical", "Mystery",
  "Romance", "Sci-Fi", "Sport", "Thriller", "War", "Western"
];

// Insert genre buttons dynamically
const genreContainer = document.getElementById("genreList");
genres.forEach(genre => {
  const genreButton = document.createElement("div");
  genreButton.className = "genre";
  genreButton.innerText = genre;
  genreButton.onclick = () => {
    alert(`Filter by ${genre}`);
  };
  genreContainer.appendChild(genreButton);
});

// Dummy Movie Data
const movieData = [
  { title: "Movie 1", poster: "https://via.placeholder.com/200", iframe: "https://playeriframe.lol/iframe.php?url=..." },
  { title: "Movie 2", poster: "https://via.placeholder.com/200", iframe: "https://playeriframe.lol/iframe.php?url=..." },
  // Add more movie objects here
];

// Insert movie cards dynamically
const movieListContainer = document.getElementById("movieList");
movieData.forEach(movie => {
  const movieCard = document.createElement("div");
  movieCard.className = "movie-card";

  const movieImage = document.createElement("img");
  movieImage.src = movie.poster;
  movieCard.appendChild(movieImage);

  const movieTitle = document.createElement("h3");
  movieTitle.innerText = movie.title;
  movieCard.appendChild(movieTitle);

  movieCard.onclick = () => {
    window.location.href = movie.iframe;  // Open movie iframe
  };

  movieListContainer.appendChild(movieCard);
});

fetch('movies.json')
  .then(response => response.json())
  .then(movies => {
    const movieList = document.getElementById('movie-list');
    movies.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.classList.add('movie-card');
      movieCard.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}">
        <div class="content">
          <h3>${movie.title}</h3>
          <a href="${movie.iframe}" target="_blank">Tonton Sekarang</a>
        </div>
      `;
      movieList.appendChild(movieCard);
    });
  })
  .catch(error => console.error('Error loading movie data:', error));
