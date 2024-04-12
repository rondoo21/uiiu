const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I love you too! 😘";
  gif.src =
    "https://www.bing.com/th/id/OGC.bf86e362b098872009951aa039cf86eb?pid=1.7&rurl=https%3a%2f%2fwww.gifcen.com%2fwp-content%2fuploads%2f2021%2f05%2fminions-gif.gif&ehk=kGWjAwwFfEFd2s1YDMdE4uvEtGCPmH6r5ogSYRS15NI%3d";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});