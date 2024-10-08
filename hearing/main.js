const pianoKeys = document.querySelectorAll(".pianoKeys .key");
const imageSrc = "/images/";

let allKeys = [];
const audio = new Audio();
let prevKey = null;

// 피아노 누를시 소리남 & 클래스 변경
const playTune = (key) => {

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    const note = document.querySelector(`.doingArea .pianoKeys`);

    // 전에 눌렀었던 키 제거
    if (prevKey) {
        document.querySelector(`[data-key="${prevKey}"]`).classList.remove("active");
        note.classList.remove(`${prevKey}`);
    }

    //키가 c4, a5, aS5, b5 일때에만 stroke 보임
    // if (key == "c4" || key == "a5" || key == "aS5" || key == "b5"){
    //     // document.querySelector(`${note} .stroke`).style.display = "none";
    //     note.querySelector(".stroke").style.display = "block";
    // }else{
    //     note.querySelector(".stroke").style.display = "none";
    // }

    audio.src = `/sounds/${key}.mp3`;
    audio.play();

    clickedKey.classList.add("active");
    note.classList.add(`${key}`);

    prevKey = key;
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));   
});

// pianoKeys.addEventListener('click', (key) => {
//     allKeys.push(key.dataset.key);
//     key.addEventListener("click", () => playTune(key.dataset.key));   
// })
