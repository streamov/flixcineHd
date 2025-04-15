fetch('videos.json')
  .then(response => response.json())
  .then(data => {
    const movieList = document.getElementById('movieList');
    const genreFilter = document.getElementById('genreFilter');
    const yearFilter = document.getElementById('yearFilter');
    const countryFilter = document.getElementById('countryFilter');

    let allGenres = new Set();
    let allYears = new Set();
    let allCountries = new Set();

    data.forEach(movie => {
      allGenres = new Set([...allGenres, ...movie.genre]);
      allYears.add(movie.tahun);
      allCountries.add(movie.negara);
    });

    allGenres.forEach(g => genreFilter.innerHTML += `<option value="${g}">${g}</option>`);
    Array.from(allYears).sort((a, b) => b - a).forEach(y => yearFilter.innerHTML += `<option value="${y}">${y}</option>`);
    allCountries.forEach(c => countryFilter.innerHTML += `<option value="${c}">${c}</option>`);

    function renderMovies(filterGenre, filterYear, filterCountry) {
      movieList.innerHTML = '';
      data.forEach(movie => {
        const matchGenre = !filterGenre || movie.genre.includes(filterGenre);
        const matchYear = !filterYear || movie.tahun == filterYear;
        const matchCountry = !filterCountry || movie.negara == filterCountry;

        if (matchGenre && matchYear && matchCountry) {
          const card = document.createElement('div');
          card.className = 'movie-card';
          card.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>Genre: ${movie.genre.join(', ')}</p>
            <p>${movie.negara} | ${movie.tahun}</p>
            <a href="watch.html?id=${movie.id}">Watch Now</a>
          `;
          movieList.appendChild(card);
        }
      });
    }

    genreFilter.addEventListener('change', () => renderMovies(genreFilter.value, yearFilter.value, countryFilter.value));
    yearFilter.addEventListener('change', () => renderMovies(genreFilter.value, yearFilter.value, countryFilter.value));
    countryFilter.addEventListener('change', () => renderMovies(genreFilter.value, yearFilter.value, countryFilter.value));

    renderMovies();
  });
