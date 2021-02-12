// function for search songs
const searchSongs = () => {
    const searchText = document.getElementById("search-feild").value;
    const url = `https://api.lyrics.ovh/suggest/${searchText}`;
    // load data
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.data))
}


// function for display songs
const displayData = songs => {
    songs.forEach(song => {
        const songsContainer = document.getElementById("songs-container");
        const songDiv = document.createElement('div');
        songDiv.className = "single-result row align-items-center my-3 p-3";
        songDiv.innerHTML = `
            
            <div class="col-md-9">
                <h3 class="lyrics-name">${song.album.title}</h3>
                <p class="author lead">Album by <span>${song.artist.name}</span></p>
                <audio controls>
                    <source src="${song.preview}" type="audio/mpeg">
                </audio>
            </div>
            <div class="col-md-3 text-center">
                <button onclick="getLyric('${song.artist.name}' , '${song.album.title}')" class="btn btn-success">Get Lyrics</button>
            </div>
        `
        songsContainer.appendChild(songDiv)
    });

}

// function for show lyrics
const getLyric = (artist, title) => {
    // const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
    //get lyric
    // fetch(url)
    // .then(res => res.json())
    // .then(data => {
    //     const detail = document.getElementById('lyrics');
    //     if(!data.error){
    //         detail.innerHTML = 
    //         ` <h2 class="text-success mb-4">${artist}</>
    //         <pre class="lyric text-white">${data.lyrics}</pre>`;
    //     }
    // })

    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            const detail = document.getElementById("lyrics");
            if (!data.error) {
                detail.innerHTML = ` <h2 class="text-success mb-4">${artist}</>
                <pre class="lyric text-white">${data.lyrics}</pre>`;
            }
            else {
                detail.innerHTML = ` <h2 class="text-success mb-4">${artist}</>
                      <pre class="lyric text-white">Lyrics not found!!</pre>`;
            }
        })
}


// function for display lyrics{
const displayLyrics = lyrics => {
        const lyricsDiv = document.getElementById("song-lyrics");
        // const songLyrics = document.createElement('pre');
        lyricsDiv.innerText = lyrics;

        // lyricsDiv.appendChild(songLyrics);
    }