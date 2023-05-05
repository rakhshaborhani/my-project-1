// Delay Function
function delay(milisec){
    let promise = new Promise(function(resolve, reject){
        setTimeout(resolve,milisec);
    })
    return promise
}

async function fun1(){
    var aksss = document.getElementById("aks");
    aksss.style.border = "5px solid #0000CD"
    aksss.style.borderRadius = "10px"
    aksss.style.opacity = "1"
    await delay(2000)
    aksss.style.border = "none"
    aksss.style.borderRadius = "0"
    aksss.style.opacity = "0.8"
    await delay(2000)
    fun1()
}

fun1()

// End Delay Function

//----------------------------------------------------------------

// slider

var slides = document.getElementsByClassName("slide");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var n = 0;

function displayNone(){
    for(let i=0; i<slides.length; i++){
        slides[i].style.display = 'none'
    }
}

function noActive(){
    for(let i=0; i<slides.length; i++){
        slides[i].classList.remove('active')
    }
}

next.addEventListener("click", function(){
    n++;
    if(n > slides.length-1){
        n = 0;
    }
    displayNone();
    noActive();
    slides[n].style.display = 'block';
    slides[n].classList.add('active')
})

prev.addEventListener("click", function(){
    n--;
    if(n < 0){
        n = slides.length-1;
    }
    displayNone()
    noActive()
    slides[n].style.display = 'block';
    slides[n].classList.add('active')
})

setInterval(function(){
    n++;
    if(n > slides.length-1){
        n = 0;
    }
    displayNone();
    noActive();
    slides[n].style.display = 'block';
    slides[n].classList.add('active')
},4000)

// End slider


var box1 = document.getElementById("box1");

box1.addEventListener("mouseover", function(){
    box1.style.transition = "all 1s"
    box1.style.height = "300px"
    
})

box1.addEventListener("mouseleave", function(){
    box1.style.transition = "all 1s"
    box1.style.height = "75px"
})

box2.addEventListener("mouseover", function(){
    box2.style.transition = "all 1s"
    box2.style.height = "300px"
})

box2.addEventListener("mouseleave", function(){
    box2.style.transition = "all 1s"
    box2.style.height = "75px"
})

box3.addEventListener("mouseover", function(){
    box3.style.transition = "all 1s"
    box3.style.height = "300px"
})

box3.addEventListener("mouseleave", function(){
    box3.style.transition = "all 1s"
    box3.style.height = "75px"
})

box4.addEventListener("mouseover", function(){
    box4.style.transition = "all 1s"
    box4.style.height = "300px"
})

box4.addEventListener("mouseleave", function(){
    box4.style.transition = "all 1s"
    box4.style.height = "75px"
})

box5.addEventListener("mouseover", function(){
    box5.style.transition = "all 1s"
    box5.style.height = "300px"
})

box5.addEventListener("mouseleave", function(){
    box5.style.transition = "all 1s"
    box5.style.height = "75px"
})

box6.addEventListener("mouseover", function(){
    box6.style.transition = "all 1s"
    box6.style.height = "300px"
})

box6.addEventListener("mouseleave", function(){
    box6.style.transition = "all 1s"
    box6.style.height = "75px"
})


// Load Data

var mydata;

function loadData(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "./json/repair.json");
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState == 4 && xhttp.status == 200){
            var jsObject = JSON.parse(xhttp.responseText);
            valueCallback(jsObject);
        }
    };
    xhttp.send();
}

function valueCallback(jsObject){
    mydata = jsObject;
}


document.addEventListener("DOMContentLoaded", function(){
    loadData() 
  })

var searchBox = document.querySelector("#searchBox");
searchBox.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        var word = event.target.value
        search(word);
        searchBox.value = "";
    }
});

function search(word) {
    var searchResultBox = document.getElementById("search-result-box");

    searchResultBox.innerHTML = "";
    searchResultName = []
    searchResultLink = []
    
    for(let i=0; i<mydata.repair_groups.length; i++){
        if (mydata.repair_groups[i].group_repair === word || mydata.repair_groups[i].group_repair.includes(word)) {
            var repairName = mydata.repair_groups[i].group_repair
            var linkAddres = mydata.repair_groups[i].group_link
            searchResultName.push(repairName);

        }
    }
    if (searchResultName.length > 0) {
        let h1 = document.createElement("h1");
        h1.appendChild(document.createTextNode("Your Search Result :"));
        h1.classList.add("search-box-title");
        searchResultBox.appendChild(h1);
        searchResultName.forEach(repairName=> {
            searchResultBox.appendChild(createRepairBox(repairName));
        });
        searchResultLink.forEach(linkAddres=> {
            searchResultBox.appendChild(createRepairBox(linkAddres));
        });
    } else {
        let h1 = document.createElement("h1");
        h1.appendChild(document.createTextNode("Not Results Found"));
        h1.classList.add("search-box-title");
        searchResultBox.appendChild(h1);
    }
    
}

function createRepairBox(repairName, linkAddres){
    
    var repairLink = document.createElement("a");
    var repairTitle = document.createElement("h5");
    var repairLink_txt = document.createTextNode(repairName);
    repairLink.appendChild(repairLink_txt);
    repairLink.setAttribute("href", linkAddres);
    repairLink.classList.add("link")
    repairTitle.appendChild(repairLink)
    
    return repairTitle
}

// End Load Data

// Background Title

var bgs = document.querySelectorAll(".title");
for(i=0; i<bgs.length; i++){
    const bg = bgs[i];
    bg.addEventListener("mouseenter", function(){
        bg.style.borderRadius = "0"
        bg.style.background = "#0000CD"
        bg.style.color = "#87CEFA"
    })
    bg.addEventListener("mouseleave", function(){
        bg.style.borderRadius = "15px 0 15px 0"
        bg.style.color = "#0000CD"
        bg.style.background = "#87CEFA"
    })
}

// End Background Title

// Images

var imgs = document.querySelectorAll(".img");
for(i=0; i<bgs.length; i++){
    const img = imgs[i];
    img.addEventListener("mouseenter", function(){
       img.style.border = "5px solid #0000CD"
       img.style.opacity = "1"
    })
    img.addEventListener("mouseleave", function(){
        img.style.border = "2px solid #87CEFA"
        img.style.opacity = "0.8"
    })
}


// End Images


// Animation

var animationBox = document.getElementById("animationBox");

var img = document.createElement("img");
img.setAttribute("src", "../images/car/7.png")
img.style.marginTop = "30px"
img.style.width = "300px";
img.style.height = "150px";
img.style.marginLeft = "50px"
img.style.marginRight = "50px"
img.style.position= 'relative'; 
img.id = "img"
animationBox.appendChild(img)

function moveToLeftRight(){
    $(document).ready(function(){
        $("#img").animate({left:'1130px'},4000)
        $("#img").animate({left:'0'},4000)
    })
    moveToLeftRight()
}

moveToLeftRight()

// End Animation

// ----------------------------------------------------------------------------------------




