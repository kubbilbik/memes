const meme = document.querySelector('.meme__img');
const title = document.querySelector('.meme__title');
const button = document.querySelector('.meme__button');

const url = "https://meme-api.com/gimme/";

const subreddits = ["catmemes", "wholesomemes", "dogmemes", "me_irl"];

let getMeme = () => {
  let randomSubreddit =
    subreddits[Math.floor(Math.random() * subreddits.length)];
  fetch(url + randomSubreddit)
    .then((respond) => respond.json())
    .then((data) => {
      let memeImg = new Image();
      memeImg.onload = () => {
        meme.src = data.url;
        title.innerHTML = data.title;
      };
      memeImg.src = data.url;
    });
};

button.addEventListener("click", getMeme);
window.addEventListener("load", getMeme);