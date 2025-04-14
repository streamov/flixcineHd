// Auto run bila page siap load
document.addEventListener('DOMContentLoaded', () => {
  fetchMovies(); // Load semua movie
});

// Fetch movie dari JSON file
function fetchMovies() {
  fetch('data/movies.json')
    .then(response => response.json())
    .then(data => displayMovies(data))
    .catch(error => {
      console.error('Error loading movie data:', error);
      document.getElementById('movieList').innerHTML = '<p>Movie gagal dimuat.</p>';
    });
}

// Paparkan movie dalam HTML
function displayMovies(movies) {
  const container = document.getElementById('movieList');
  container.innerHTML = '';

  movies.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.onclick = () => {
      // Simpan detail untuk halaman seterusnya
      localStorage.setItem('selectedMovie', JSON.stringify(movie));
      window.location.href = 'movie.html';
    };

    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
      <div class="movie-info">
        <h3 class="movie-title">${movie.title}</h3>
      </div>
    `;

    container.appendChild(card);
  });
}

// Fungsi search
function searchMovie() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  fetch('data/movies.json')
    .then(response => response.json())
    .then(data => {
      const filtered = data.filter(movie =>
        movie.title.toLowerCase().includes(input)
      );
      displayMovies(filtered);
    });
}