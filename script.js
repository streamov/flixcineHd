fetch('movies.json')
  .then(response => response.json())
  .then(data => {
    const movieList = document.getElementById('movie-list'); 

    data.forEach(movie => {
      const card = document.createElement('div'); 
      card.className = 'movie-card';

      card.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <div class="video-wrapper">
          ${movie.iframe} <!-- Masukkan iframe -->
        </div>
      `;

      movieList.appendChild(card);
    });
  });
