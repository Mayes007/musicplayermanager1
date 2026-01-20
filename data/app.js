fetch("data/songs.json")
  .then(response => response.json())
  .then(songs => {
    const songList = document.getElementById("songList");
    const player = document.getElementById("player");

    songs.forEach(song => {
      const li = document.createElement("li");
      li.textContent = `${song.title} - ${song.artist}`;

      li.onclick = () => {
        player.src = song.file;
        player.play();
      };

      songList.appendChild(li);
    });
  });
