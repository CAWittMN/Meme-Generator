const memeContainer = document.querySelector("#memes");
const topText = document.querySelector("#top-text");
const bottomText = document.querySelector("#bottom-text");
const memeImage = document.querySelector("#image-url");
const previewTopText = document.querySelector(".preview-upper-text");
const previewBottomText = document.querySelector(".preview-lower-text");
const previewImage = document.querySelector(".preview-image-acual");

document.querySelector("form").addEventListener("submit", function (submit) {
  submit.preventDefault();
  if (memeImage.value == "") {
    alert("Please enter a url.");
  } else {
    createMeme(submit);
  }
});
memeImage.addEventListener("change", function (updateURL) {
  if (updateURL.target.value != "") {
    try {
      previewImage.setAttribute("src", updateURL.target.value);
    } catch (error) {
      console.log(error);
      previewImage.setAttribute("src", "/assets/preview.png");
    }
  }
});
topText.addEventListener("keyup", function (textChange) {
  previewTopText.innerHTML = textChange.target.value;
});
bottomText.addEventListener("keyup", function (textChange) {
  previewBottomText.innerHTML = textChange.target.value;
});
memeContainer.addEventListener("click", function (click) {
  if (click.target.classList.contains("delete-button") == true) {
    deleteMeme(click);
  }
});

function createMeme() {
  const newImage = document.createElement("img");
  const newTopText = document.createElement("div");
  const newBottomText = document.createElement("div");
  const newMemeBox = document.createElement("div");
  const newMeme = document.createElement("div");
  const newDeleteButton = document.createElement("button");

  newMemeBox.classList.add("meme-box");
  newImage.setAttribute("src", memeImage.value);
  newImage.classList.add("meme-image");
  newTopText.innerHTML = topText.value;
  newTopText.classList.add("top-text");
  newBottomText.innerHTML = bottomText.value;
  newBottomText.classList.add("bottom-text");
  newDeleteButton.classList.add("delete-button");
  newDeleteButton.innerHTML = "X";
  newMemeBox.append(newImage, newBottomText, newTopText);
  newMeme.append(newMemeBox, newDeleteButton);
  newMeme.classList.add("meme");
  memeContainer.append(newMeme);

  document.querySelector("form").reset();
}

function deleteMeme(targetMeme) {
  document.querySelector(".meme").classList.add("deleting");
  setTimeout(() => {
    targetMeme.target.parentElement.remove();
  }, 500);
}
