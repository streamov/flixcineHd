// Fetch data movie dari movies.json
fetch('movies.json')
  .then(response => response.json())
  .then(data => {
    const movieList = document.getElementById('movie-list'); // Ambil tempat untuk senarai movie

    // Loop setiap movie dalam array
    data.forEach(movie => {
      const card = document.createElement('div'); // Create div untuk setiap movie
      card.className = 'movie-card'; // Set class

      // Masukkan HTML untuk movie card (gambar, tajuk, iframe)
      card.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <div class="video-wrapper">
          ${movie.iframe} <!-- Masukkan iframe -->
        </div>
      `;

      // Tambah movie card dalam movie-list
      movieList.appendChild(card);
    });
  });
