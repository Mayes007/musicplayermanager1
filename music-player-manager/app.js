const songList = document.getElementById("songList");
const player = document.getElementById("player");
const addSongBtn = document.getElementById("addSongBtn");

let songs = JSON.parse(localStorage.getItem("songs")) || [];

// Save songs to "database"
function saveSongs() {
  localStorage.setItem("songs", JSON.stringify(songs));
}

// Display songs
function loadSongs() {
  songList.innerHTML = "";

  songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.textContent = `${song.title} - ${song.artist}`;

    li.addEventListener("click", () => {
      player.src = song.file;
      player.play();
    });

    songList.appendChild(li);
  });
}

// Add new song
addSongBtn.addEventListener("click", () => {
  const title = document.getElementById("title").value;
  const artist = document.getElementById("artist").value;
  const file = document.getElementById("file").value;

  if (!title || !artist || !file) {
    alert("Please fill in all fields");
    return;
  }

  songs.push({ title, artist, file });
  saveSongs();
  loadSongs();

  document.getElementById("title").value = "";
  document.getElementById("artist").value = "";
  document.getElementById("file").value = "";
});

// Load on startup
loadSongs();
