document.addEventListener("DOMContentLoaded", () => {
  const movie = JSON.parse(localStorage.getItem('selectedMovie'));
  if (!movie) {
    document.getElementById('movieDetail').innerHTML = "<p>Tiada info ditemui.</p>";
    return;
  }

  document.getElementById('movieDetail').innerHTML = `
    <div class="detail-container">
      <img src="${movie.poster}" class="detail-poster" alt="${movie.title}">
      <div class="detail-info">
        <h2>${movie.title}</h2>
        <p><strong>Genre:</strong> ${movie.genre.join(', ')}</p>
        <p><strong>Tahun:</strong> ${movie.year}</p>
        <p><strong>Negara:</strong> ${movie.country}</p>
        <p>${movie.description}</p>
        <a href="${movie.link}" class="watch-button" target="_blank">Tonton Sekarang</a>
      </div>
    </div>
  `;
});