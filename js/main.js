document.addEventListener('DOMContentLoaded', function () {
  const movieGrid = document.getElementById('movieGrid');
  const searchInput = document.getElementById('searchInput');
  const genreFilter = document.getElementById('genreFilter');
  const yearFilter = document.getElementById('yearFilter');

  let movies = [];

  fetch('videos.json')
    .then(res => res.json())
    .then(data => {
      movies = data;
      displayMovies(movies);
    });

  function displayMovies(list) {
    movieGrid.innerHTML = '';
    list.forEach(movie => {
      const card = document.createElement('div');
      card.className = 'movie-card';
      card.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}">
        <h4>${movie.title}</h4>
      `;
      movieGrid.appendChild(card);
    });
  }

  function filterMovies() {
    let keyword = searchInput.value.toLowerCase();
    let genre = genreFilter.value;
    let year = yearFilter.value;

    let filtered = movies.filter(m => {
      let match = m.title.toLowerCase().includes(keyword);
      if (genre !== 'all') match = match && m.genre === genre;
      if (year !== 'all') match = match && m.year == year;
      return match;
    });

    displayMovies(filtered);
  }

  searchInput.addEventListener('input', filterMovies);
  genreFilter.addEventListener('change', filterMovies);
  yearFilter.addEventListener('change', filterMovies);
});
