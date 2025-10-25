const playerOverlay = document.getElementById('playerOverlay');
const playerVideo = document.getElementById('playerVideo');
const loginModal = document.getElementById('loginModal');
const userPanel = document.getElementById('userPanel');
const searchInput = document.getElementById('searchInput');

// Reproductor
document.querySelectorAll('.video-card').forEach(card=>{
    card.addEventListener('click', ()=>{
        playerVideo.src = card.dataset.video;
        playerOverlay.style.display = "flex";
        playerVideo.play();
    });
});

function closePlayer(){
    playerVideo.pause();
    playerOverlay.style.display = "none";
}

// Login simulado
function openLogin(e){
    e.preventDefault();
    loginModal.style.display='flex';
}
function login(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if(username && password){
        loginModal.style.display='none';
        if(userPanel) userPanel.style.display='block';
        alert('Login exitoso (simulado)!');
    } else alert('Introduce usuario y contraseña.');
}

// Buscador global
function filterVideos(){
    const filter = searchInput.value.toLowerCase();
    document.querySelectorAll('.video-card').forEach(card=>{
        const title = card.querySelector('h3').innerText.toLowerCase();
        card.style.display = title.includes(filter)?'block':'none';
    });
}
