let allVideos = [];

fetch('videos.json')
  .then(res => res.json())
  .then(data => {
    allVideos = data;
    renderMovies(data);
  });

function renderMovies(movies) {
  const grid = document.getElementById('movieGrid');
  grid.innerHTML = '';

  movies.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}" />
      <div class="card-title">${movie.title}</div>
    `;
    card.onclick = () => {
      window.open(movie.videoUrl, '_blank');
    };
    grid.appendChild(card);
  });
}

// Filter Function
document.getElementById('genreFilter').addEventListener('change', filterMovies);
document.getElementById('yearFilter').addEventListener('change', filterMovies);
document.getElementById('searchInput').addEventListener('input', filterMovies);

function filterMovies() {
  const genre = document.getElementById('genreFilter').value;
  const year = document.getElementById('yearFilter').value;
  const keyword = document.getElementById('searchInput').value.toLowerCase();

  const filtered = allVideos.filter(movie => {
    const matchGenre = genre === 'all' || movie.genre === genre;
    const matchYear = year === 'all' || movie.year === year;
    const matchKeyword = movie.title.toLowerCase().includes(keyword);
    return matchGenre && matchYear && matchKeyword;
  });

  renderMovies(filtered);
}
