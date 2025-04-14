// Sample Movie Data
const movies = [
    {
      title: "Movie 1",
      poster: "poster1.jpg",
      link: "movie1.html",
    },
    {
      title: "Movie 2",
      poster: "poster2.jpg",
      link: "movie2.html",
    },
    {
      title: "Movie 3",
      poster: "poster3.jpg",
      link: "movie3.html",
    },
    {
      title: "Movie 4",
      poster: "poster4.jpg",
      link: "movie4.html",
    },
    // Add more movies as needed
  ];
  
  // Search Functionality
  const searchBar = document.getElementById('search-bar');
  
  searchBar.addEventListener('input', function() {
    const searchQuery = searchBar.value.toLowerCase();  // Get input from user
  
    // Filter movies based on search query
    const filteredMovies = movies.filter(movie => 
      movie.title.toLowerCase().includes(searchQuery)  // Search by movie title
    );
  
    // Update movie grid with filtered results
    generateMovieCards(filteredMovies);
  });
  
  // Function to generate movie cards in the grid
  function generateMovieCards(movieArray) {
    const movieGrid = document.getElementById("movie-grid");
    movieGrid.innerHTML = '';  // Clear previous results
    
    movieArray.forEach(movie => {
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
  }
  