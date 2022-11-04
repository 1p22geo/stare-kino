$(function(){
  $(".covers").mouseover(function(){
    $(this).animate({
      scale: "105%",}, 400);
  });
  $(".covers").mouseout(function(){
    $(this).animate({
      scale: "100%",}, 400);
  });
});

//  hamburger activation on mobile
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })

  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }))

// links
function setContentToMain() {
    document.getElementById("content").src = "something.html";
}
function setContentToAbc() {
    document.getElementById("content").src = "abc.html";
}
function setContentToRpt() {
  document.getElementById("content").src = "rpt.html";
}
function setContentToMovie1() {
  location.replace("movie1.html");
}




