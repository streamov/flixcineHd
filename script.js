function applyFilters() {
  const genre = document.getElementById("genreFilter").value;
  const year = document.getElementById("yearFilter").value;
  const country = document.getElementById("countryFilter").value;
  const rating = document.getElementById("ratingFilter").value;

  const cards = document.querySelectorAll(".movie-card");
  cards.forEach(card => {
    const matchGenre = !genre || card.dataset.genre === genre;
    const matchYear = !year || card.dataset.year === year;
    const matchCountry = !country || card.dataset.country === country;
    const matchRating = !rating || parseFloat(card.dataset.rating) >= parseFloat(rating);

    if (matchGenre && matchYear && matchCountry && matchRating) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
