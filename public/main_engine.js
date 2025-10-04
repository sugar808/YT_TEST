const script = document.createElement('script');
script.src = 'https://www.youtube.com/iframe_api';
document.body.appendChild(script);

const form = document.getElementById('form');
const input = document.getElementById('input');

let player;
let YT_ID = '';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(input.value) {
        socket.emit('send_ID', input.value);
        input.value = '';
    }
});

socket.on('send_ID', (ID) => {
    YT_ID = ID;
    if(player) {
        player.loadVideoById(YT_ID);
    }
});

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', { videoId: YT_ID });
};