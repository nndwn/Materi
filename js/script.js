

window.addEventListener("keydown", function(event) {
    if (event.defaultPrevented) {
      return;
    }
    if (event.code === "ArrowLeft"){
        plusSlides(-1);
    }
    else if (event.code === "ArrowRight"){
        plusSlides(1);
    }
}, true);

let slideIndex = 1;
showSlides(slideIndex);
function showSlides(n) {
    let i;
    let slide = document.querySelectorAll("section > div");
    if (n > slide.length) {
        slideIndex = 1
    }
    if (n < 1){
        slideIndex = slide.length
    }
    for (i = 0; i < slide.length; i++){
        slide[i].style.display = "none";
    }
    slide[slideIndex-1].style.display ="block";
}
function plusSlides(n) {
    showSlides(slideIndex += n);
    console.log(slideIndex);
}