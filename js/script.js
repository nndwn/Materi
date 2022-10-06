

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

let animaNumber = 0;

function AnimaCount(){
    let i;
    let countA = document.querySelectorAll("#countT span");
    for (i = 0; i < countA.length; i++) {
        countA[i].style.display = "none";
    }
    animaNumber++;
    if (animaNumber < countA.length) { animaNumber = 1 }
    countA[animaNumber-1].style.display ="block";
    setTimeout(AnimaCount, 1000);


}


function buttonS(){
    console.log("test");
    let timesCount = document.getElementById("mySelect").value;
    let startbutton = document.getElementsByTagName("button")[0];
    const att = document.createAttribute("disabled");
  
    if (timesCount > 0 ){
        startbutton.removeAttribute("disabled");
    } else {
        startbutton.setAttributeNode(att);
    }
}


// function times () {
//     let i;
//     let start = document.getElementById("n").value;
//     let waktu = document.getElementById("countT");
//     waktu.style.display ="block";
//     if (start > 0){
//         for (i = 0; i < start; i++){
//                 waktu.innerHTML +=( "<span>"+ i +"</span>");
//             }
//     } 
// };


function selectCount() {
    let timesCount = document.getElementById("mySelect").value;
    let waktu = document.getElementById("countT");

    if (timesCount > 0){
        for (i = 0; i < timesCount; i++){
                waktu.innerHTML +=( "<span>"+ i +"</span>");
            }
            AnimaCount();
    } 
 

}

