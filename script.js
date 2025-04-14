// Dummy data kalau localStorage kosong
const defaultMovies = [
  {
    title: "The Hacker Shadow",
    description: "Penggodam bayangan muncul dari sistem",
    url: "https://contoh.com/shadow"
  },
  {
    title: "Nova Origin",
    description: "Asal usul entiti Nova bermula",
    url: "https://contoh.com/nova"
  },
  {
    title: "Cyber Reboot",
    description: "Revolusi AI dalam dunia kilang",
    url: "https://contoh.com/reboot"
  }
];

// Save dummy data kalau tiada data sedia ada
if (!localStorage.getItem("movies")) {
  localStorage.setItem("movies", JSON.stringify(defaultMovies));
}

// Load movies
function getMovies() {
  return JSON.parse(localStorage.getItem("movies"));
}

// Tunjuk senarai movie
function displayMovies(movies) {
  const list = document.getElementById("movieList");
  list.innerHTML = "";
  movies.forEach(movie => {
    const div = document.createElement("div");
    div.className = "movie-card";
    div.innerHTML = `
      <h3>${movie.title}</h3>
      <p>${movie.description}</p>
    `;
    div.onclick = () => window.open(movie.url, "_blank");
    list.appendChild(div);
  });
}

// Filter ikut carian
document.getElementById("searchInput").addEventListener("input", e => {
  const keyword = e.target.value.toLowerCase();
  const allMovies = getMovies();
  const filtered = allMovies.filter(movie => 
    movie.title.toLowerCase().includes(keyword) || 
    movie.description.toLowerCase().includes(keyword)
  );
  displayMovies(filtered);
});

// Toggle dark mode
document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Start
displayMovies(getMovies());
