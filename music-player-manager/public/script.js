const API_URL = "http://localhost:3000/songs";

const songForm = document.getElementById("songForm");
const songList = document.getElementById("songList");

async function loadSongs() {
  const res = await fetch(API_URL);
  const songs = await res.json();

  songList.innerHTML = "";
  songs.forEach(song => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${song.title}</strong> - ${song.artist}<br/>
      <audio controls src="${song.audioUrl}"></audio>
    `;
    songList.appendChild(li);
  });
}

songForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(songForm);

  await fetch("http://localhost:3000/songs", {
    method: "POST",
    body: formData
  });

  songForm.reset();
  loadSongs();
});
