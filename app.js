/*  ============================================
*   Author: Faraaz Khhan
*   Date:   22-May-2021
*   Git:    https://www.github.com/FaraazKhhan
*   ===========================================*/


const resultContainer = document.querySelector('.result-container');  
          

const baseURL = 'https://saavn.me/search';
const query = '?song=';

const searchSong = (songName) => {
    const encodedSongName = encodeURI(songName);
    fetch(baseURL + query + encodedSongName)
    .then((res) => {
        res.json().then((data)=>{
            if(data.length) {
                console.log("data:", data);
    
                for(let i = 0; i < data.length; i++) {
                    const song_img = data[i].song_image;
                    const song_name = data[i].song_name;
                    const song_link = data[i].download_links[0];
    
                    const div = document.createElement('div');
                    div.className = 'song-div';
                    const divCreated = resultContainer.appendChild(div);
    
                    const img = new Image();
                    img.src = song_img;
    
                    const audio = new Audio();
                    audio.src = song_link;
                    audio.controls = 'controls';
                    audio.preload = 'none';
                    audio.className = 'audio-player';
    
                    img.onload = () => {
                        divCreated.append(img);
                        
                        p = document.createElement('p');
                        p.className = "result-title";
                        p.innerHTML = song_name;
                        divCreated.appendChild(p);
                        
                        divCreated.append(audio);
                    }
                }

            }

            else {
                console.log("data is empty");

                const p = document.createElement('p');
                p.classList = 'no-data-p';
                p.innerHTML = "No data found...";
                resultContainer.appendChild(p);
            }
        });
    });
}

const search_bar = document.querySelector('#search-song');
const search_btn = document.querySelector('button');

search_btn.addEventListener('click', () => {
    while (resultContainer.firstChild) {
        resultContainer.removeChild(resultContainer.firstChild);
    }
    
    const song_Name = search_bar.value;
    console.log(song_Name);
    searchSong(song_Name);
});

search_bar.addEventListener('keyup', (event) => {
    if(event.keyCode === 13) {
        event.preventDefault();
        search_btn.click();
    }
});







// const displayInfo = () => {
//     for(let i = 0; i < data.length; i++) {
//         const song_name = data[i].song_name;
//         const album_name = data[i].album_name;
//         const song_artist = data[i].song_artist;
//         const song_img = data[i].song_img;
//         const song_label = data[i].song_label;
//         const song_year = data[i].year;
//         const song_link = data[i].download_links[0];

//         const div = document.createElement('div');
//         const p = div.appendChild('p');
//         p.innerHTML = song_name;
//     }
// }