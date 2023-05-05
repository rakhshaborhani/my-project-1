// Create Image With Js

var image = document.createElement("img");
var imageBox = document.getElementById("imgBox")

image.setAttribute("src", "../images/about/1.png");
image.style.width = "200px"
image.style.height = "200px"
image.style.marginTop = "20px"
imageBox.appendChild(image);

// End Create Image With Js

// Change Opacity

var backBox = document.getElementById("backBox");
backBox.addEventListener("mouseenter", function(){
    backBox.style.opacity = "1"
})

backBox.addEventListener("mouseleave", function(){
    backBox.style.opacity = "0.8"
})

// End Change Opacity


// ------------------------------------------------------------------------------

// Change Background Color

var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");

changeBg1()

function changeBg1(){
    box1.style.background = "#00BFFF"
    box2.style.background = "#87CEFA"
    box3.style.background = "#00BFFF"
    box4.style.background = "#87CEFA"
    setTimeout(() =>{
        window.requestAnimationFrame(changeBg2)
    },3000)
}



function changeBg2(){
    box1.style.background = "#87CEFA"
    box2.style.background = "#00BFFF"
    box3.style.background = "#87CEFA"
    box4.style.background = "#00BFFF"
    setTimeout(() =>{
        window.requestAnimationFrame(changeBg1)
    },3000)
}

// End Change Background Color


    
    