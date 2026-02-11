const music = document.getElementById("global-music");

if (music) {

    // kalau pernah diputar, lanjut dari waktu terakhir
    const savedTime = localStorage.getItem("musicTime");
    if (savedTime) {
        music.currentTime = savedTime;
    }

    music.play();

    // simpan posisi tiap 1 detik
    setInterval(() => {
        localStorage.setItem("musicTime", music.currentTime);
    }, 1000);
}
