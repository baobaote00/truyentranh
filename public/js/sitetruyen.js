const fixed = document.querySelector('.fixed');
const pause = document.querySelector('.pause');
const x2 = document.querySelector('.x2');
const x175 = document.querySelector('.x175');
const chap = document.querySelectorAll('a');
const next = document.querySelector('.next');
const pre = document.querySelector('.pre');
const chaper = document.querySelector('.chaper');

let audio = new Audio('audio/2128.mp3');

chaper.innerHTML = audio.getAttribute('src').split('/')[1].split('.')[0];

fixed.style.setProperty('left', `${(screen.width-250)/2}px`);

pause.addEventListener('click', () => {
    if (pause.classList.contains('fa-pause-circle')) {
        audio.play();
    } else {
        audio.pause();
    }
});

function setTime() {
    let time = Math.ceil(audio.currentTime);
    let timer = document.querySelector('.time');
    timer.innerHTML = `${(time-time%60)/60}:${time%60}`
    setTimeout(setTime, 1000);
};

setTimeout(setTime, 0);

x2.addEventListener('click', () => {
    audio.playbackRate = 2;
});

x175.addEventListener('click', () => {
    audio.playbackRate = 1.75;
});

chap.forEach(e => {
    e.addEventListener('click', () => {
        audio.pause();
        audio.src = `audio/${e.innerHTML}.mp3`;
        chaper.innerHTML = e.innerHTML;
        document.title = `võ luyện đỉnh phong - ${e.innerHTML}`;
        audio.play();
    });
});

next.addEventListener('click',nexts);

pre.addEventListener('click', () => {
    audio.pause();

    let a = audio.playbackRate;

    let currentChap = Number(audio.getAttribute('src').split('/')[1].split('.')[0]);
    audio.src = `audio/${currentChap-1}.mp3`;
    chaper.innerHTML = currentChap - 1;

    document.title = `võ luyện đỉnh phong - ${currentChap-1}`;

    audio.play();
    audio.playbackRate = a;
});

audio.addEventListener('pause', () => {
    pause.classList.remove('fa-play-circle');
    pause.classList.add('fa-pause-circle');
})

audio.addEventListener('play', () => {
    pause.classList.remove('fa-pause-circle');
    pause.classList.add('fa-play-circle');
})

audio.addEventListener('ended',nexts);

function nexts(){
    audio.pause();

    let a = audio.playbackRate;

    let currentChap = Number(audio.getAttribute('src').split('/')[1].split('.')[0]);
    audio.src = `audio/${currentChap+1}.mp3`;
    chaper.innerHTML = currentChap + 1;

    document.title = `võ luyện đỉnh phong - ${currentChap+1}`;

    audio.play();
    audio.playbackRate = a;
}