

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
    let slide = document.querySelectorAll("#slide");
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
};
function plusSlides(n) {
    showSlides(slideIndex += n);
};



function buttonS(){
    let start = document.getElementById("n").value;
    let startbutton = document.getElementsByTagName("button")[0];
    const att = document.createAttribute("disabled");

    if (start > 0 ){
        startbutton.removeAttribute("disabled");
    } else {
        startbutton.setAttributeNode(att);
    }
}


function times () {
    let i;
    let start = document.getElementById("n").value;
    let waktu = document.getElementById("countT");
    waktu.style.display ="block";
    if (start > 0){
        for (i = 0; i < start; i++){
                waktu.innerHTML +=( "<span>"+ i +"</span>");
            }
    } 
};
