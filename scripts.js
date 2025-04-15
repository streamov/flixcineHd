// script.js
async function loadVideos() {
  const res = await fetch("videos.json");
  const videos = await res.json();
  const container = document.getElementById("video-list");

  container.innerHTML = "";

  videos.forEach(video => {
    const card = document.createElement("div");
    card.className = "video-card";
    card.innerHTML = `
      <a href="video.html?url=${encodeURIComponent(video.url)}">
        <img src="${video.thumbnail}" alt="${video.title}" />
        <div class="video-title">${video.title}</div>
      </a>
    `;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadVideos();

  document.getElementById("search").addEventListener("input", async (e) => {
    const keyword = e.target.value.toLowerCase();
    const res = await fetch("videos.json");
    const videos = await res.json();
    const filtered = videos.filter(v => v.title.toLowerCase().includes(keyword));

    const container = document.getElementById("video-list");
    container.innerHTML = "";

    filtered.forEach(video => {
      const card = document.createElement("div");
      card.className = "video-card";
      card.innerHTML = `
        <a href="video.html?url=${encodeURIComponent(video.url)}">
          <img src="${video.thumbnail}" alt="${video.title}" />
          <div class="video-title">${video.title}</div>
        </a>
      `;
      container.appendChild(card);
    });
  });
});
