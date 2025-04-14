const movies = [
    { title: "Movie 1", poster: "assets/images/sample-poster.jpg", link: "movie1.html" },
    { title: "Movie 2", poster: "assets/images/sample-poster.jpg", link: "movie2.html" },
    { title: "Movie 3", poster: "assets/images/sample-poster.jpg", link: "movie3.html" },
    // Tambah banyak movie lagi...
  ];
  
  window.onload = function() {
    const movieGrid = document.getElementById("movie-grid");
    
    movies.forEach(movie => {
      const movieCard = document.createElement("div");
      movieCard.classList.add("movie-card");
      
      movieCard.innerHTML = `
        <a href="${movie.link}">
          <img src="${movie.poster}" alt="${movie.title}" />
          <h3>${movie.title}</h3>
        </a>
      `;
      
      movieGrid.appendChild(movieCard);
    });
  };
  