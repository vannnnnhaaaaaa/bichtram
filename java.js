document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".icon");
  const pages = document.querySelectorAll(".page");
  


  console.log(sections);
  sections.forEach((element) => {
    element.addEventListener("click", () => {
      if (element.className == "iconhome icon") {
        close("#home");
      }
      if (element.className == "about icon") {
        close("#about");
      }
      if (element.className == "project icon") {
        close("#project");
      }
      if (element.className == "library icon") {
        close("#library");
      }
      if (element.className == "photo icon") {
        close("#photo");
      }
      if (element.className == "writing icon") {
        close("#project");
      }
      if (element.className == "facebook icon") {
        close("#project");
      }
      if (element.className == "instagram icon") {
        close("#project");
      }
      if (element.className == "contact icon") {
        close("#project");
      }
    });
  });

  function close(element) {
    const page = document.querySelector(element);
    
    pages.forEach((page) => {
      page.style.display = "none";
    });
    page.style.display = "block";
  }

 const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const audio = document.getElementById("my-audio");

playBtn.addEventListener("click", () => {
  audio.play(); // phát nhạc
  playBtn.style.display = "none";  // ẩn nút play
  pauseBtn.style.display = "inline"; // hiện nút pause
});

pauseBtn.addEventListener("click", () => {
  audio.pause(); // dừng nhạc
  pauseBtn.style.display = "none";  // ẩn nút pause
  playBtn.style.display = "inline"; // hiện lại nút play
});


});
