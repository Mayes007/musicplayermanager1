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

  const song = {
    title: title.value,
    artist: artist.value,
    audioUrl: audioUrl.value
  };

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(song)
  });

  songForm.reset();
  loadSongs();
});

loadSongs();
