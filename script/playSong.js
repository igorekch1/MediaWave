let tracks = [{
    id : 1,
    name : "Kodak Black - Tunnel Vision",
    src : "Kodak Black - Tunnel Vision.mp3"
},{
    id : 2,
    name : "A Boogie Wit da Hoodie - I Did It",
    src : "A Boogie Wit da Hoodie - I Did It.mp3"
},{
    id : 3,
    name : "21 Savage - No Advance",
    src : "21 Savage - No Advance.mp3"
},{
    id : 4,
    name : "Lil Skies - Kill4u",
    src : "Lil Skies - Kill4u.mp3"
}]

let audio = document.querySelector("audio");
let playSong = document.querySelectorAll("div.playSong");
let close = document.querySelector("div.close");
let songName = document.querySelector("div.songName");
var up = document.querySelector(".up");

up.addEventListener("mouseover", () => {
    up.style.color ="#21c0c0";
})

up.addEventListener("mouseout", () => {
    up.style.color ="#fff";
})

close.addEventListener("click", () => {
    console.log("stopped")
    audio.pause();
    audio_bottom.style = "display:none;"
    audio_bottom.classList.remove("audio_active");
    up.style.color = "#fff"

    if (matchMedia) {
        const mq = window.matchMedia("(max-width: 320px)");
        mq.addListener(moveUp);
        moveUp(mq);
    }
})

function audioPlay(track) {
    console.log("playing ... ", track.src)
    if (audio.canPlayType("audio/mpeg")) {
        audio.setAttribute("src",`./media/${track.src}`)
    }
    songName.innerHTML = `${track.name}`
}

for (let i = 0; i < playSong.length; i++) {
    playSong[i].addEventListener("click", () => {
        audioPlay(tracks[i])
        audio_bottom.style="display:block;"
        audio_bottom.classList.add("audio_active");
        audio.play()
        up.style.color = "#fff"
    }) 

    playSong[i].addEventListener("click", () => {
        if (matchMedia) {
            const mq = window.matchMedia("(max-width: 320px)");
            mq.addListener(moveUp);
            moveUp(mq);
        }
    })
}

// media query change
function moveUp(mq) {
    // debugger;
     if (mq.matches) {
        if (!audio_bottom.classList.contains("audio_active")) {
            up.style.bottom = "0px"
        } else {
            up.style.bottom = "33px"
        }
    } else {
        console.log("Not matches")
    }
}

   

