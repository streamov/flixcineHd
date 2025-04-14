const moviesPerPage = 4;
let currentPage = 1;
let allMovies = [];

async function loadMovies() {
  const res = await fetch('data/movies.json');
  allMovies = await res.json();
  displayMovies();
  setupPagination();
}

function displayMovies() {
  const start = (currentPage - 1) * moviesPerPage;
  const end = start + moviesPerPage;
  const paginatedMovies = allMovies.slice(start, end);

  const container = document.getElementById('movieList');
  container.innerHTML = "";

  paginatedMovies.forEach(movie => {
    const div = document.createElement('div');
    div.className = 'movie-card';
    div.onclick = () => {
      localStorage.setItem('selectedMovie', JSON.stringify(movie));
      window.location.href = 'movie.html';
    };
    div.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
      <div class="movie-info">
        <h3 class="movie-title">${movie.title}</h3>
        <p>${movie.genre.join(', ')}</p>
      </div>
    `;
    container.appendChild(div);
  });
}

function setupPagination() {
  const totalPages = Math.ceil(allMovies.length / moviesPerPage);
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.innerText = i;
    btn.className = (i === currentPage) ? 'active-page' : '';
    btn.onclick = () => {
      currentPage = i;
      displayMovies();
      setupPagination();
    };
    pagination.appendChild(btn);
  }
}

function viewMovie(movie) {
  localStorage.setItem('selectedMovie', JSON.stringify(movie));
  window.location.href = 'movie.html';
}

loadMovies();