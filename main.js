const twlt = document.getElementById("tlwt");
const progress = document.getElementById("progress");
const ctrlIcon = document.getElementById("ctrlIcon");
const backward = document.getElementById("backward");
const forward = document.getElementById("forward");

twlt.onloadedmetadata = function () {
    progress.max = twlt.duration;
    progress.value = twlt.currentTime;
}

ctrlIcon.addEventListener("click",()=>{
    if (ctrlIcon.classList.contains("fa-pause")) {
        twlt.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else{
        twlt.play();

        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
})

if (twlt.play()) {
    setInterval(() => {
        progress.value = twlt.currentTime;
    }, 500);
}

progress.onchange = function () {
    twlt.play();
    twlt.currentTime = progress.value;

    ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
}

backward.addEventListener("click",()=>{
   
    twlt.currentTime -=progress.value;
    twlt.play();
})

forward.addEventListener("click",()=>{
    twlt.currentTime += progress.value;
    twlt.play();
})