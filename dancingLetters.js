let word = document.querySelector("h1");
let originalWord = word.innerHTML;
let dance = document.querySelector("button:first-of-type");
let thakgya = document.querySelector("button:last-of-type");
let interval = '';

dance.onclick = () => {
    let wordSplitted = word.innerHTML.split("");
    interval = setInterval(() => {
        let lastLetter = wordSplitted.pop();
        wordSplitted.unshift(lastLetter);
        word.innerHTML = wordSplitted.join("");
    },1000);
}

thakgya.onclick = () => {
    clearInterval(interval);
    word.innerHTML = originalWord;
}