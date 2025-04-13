
fetch('movies.json')
  .then(res => res.json())
  .then(data => {
    const trending = data.slice(0, 3);
    const trendingList = document.getElementById('trending-list');
    trending.forEach(movie => {
      const card = document.createElement('div');
      card.className = 'movie-card';
      card.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <button onclick="playMovie('${movie.iframe}')">Tonton</button>
      `;
      trendingList.appendChild(card);
    });

    const container = document.getElementById('movie-list');
    const filter = document.getElementById('filter');
    const search = document.getElementById('search');

    function renderMovies(movies) {
      container.innerHTML = '';
      movies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
          <img src="${movie.poster}" alt="${movie.title}">
          <h3>${movie.title}</h3>
          <button onclick="playMovie('${movie.iframe}')">Tonton</button>
        `;
        container.appendChild(card);
      });
    }

    renderMovies(data);

    filter.addEventListener('change', () => {
      const genre = filter.value;
      const filtered = genre === 'all' ? data : data.filter(m => m.genre === genre);
      renderMovies(filtered);
    });

    search.addEventListener('input', () => {
      const keyword = search.value.toLowerCase();
      const filtered = data.filter(m => m.title.toLowerCase().includes(keyword));
      renderMovies(filtered);
    });
  });

function playMovie(link) {
  document.getElementById('player-iframe').src = link;
}
