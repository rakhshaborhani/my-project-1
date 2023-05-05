var picBox = document.getElementById("picBox");
picBox.style.background = "#87CEFA"
picBox.style.borderRadius = "10px"


var btn = document.getElementById("btn");
var fname = document.getElementById("fname").value;
var lname = document.getElementById("lname").value;
var cname = document.getElementById("cname").value;
var mech = document.getElementById("problem1");
var dateee = document.getElementById("date").value;
var timeee = document.getElementById("time").value
var resBox = document.getElementById("resBox");



btn.addEventListener('click', function(){

    localStorage.setItem('name', fname);
    localStorage.setItem('family', lname)
    var fName = localStorage.getItem('name')
    var lName = localStorage.getItem('family')  
    
    
    localStorage.setItem('carname', cname);
    var cName = localStorage.getItem('carname');

    
    localStorage.setItem('date', dateee);
    localStorage.setItem('time', timeee);
    var dateRepair = localStorage.getItem('date');
    var timeRepair = localStorage.getItem('time');

    resultBox(fName, lName, dateRepair, timeRepair)
})

function resultBox(fName, lName, dateRepair, timeRepair){
    resBox.style.background = "#87CEFA"
    resBox.style.width = "100%"
    resBox.style.height = "40px"
    resBox.style.lineHeight = "2.5"
    resBox.style.textAlign = "center"
    resBox.style.borderRadius = "10px"
    resBox.style.marginTop = "-80px"
    resBox.innerText = "Mr" + " " + fName + " " + lName + " " + "The Date And Time Of Your Visit To The Repair Shop For The Day :" + " " + dateRepair + " " + "And Time :" + " " + timeRepair + " " + "Has Been Successfuly Registered In The System"
}

// --------------------------------------------------------------------------------

// Drag & Drop

var leftBox = document.getElementById("leftBox");
var itemDrag = document.getElementById("itemDrag");

var pic1 = document.getElementById("pic10")
var pic2 = document.getElementById("pic11")
var pic3 = document.getElementById("pic20")
var pic4 = document.getElementById("pic21")
var pic5 = document.getElementById("pic30")
var pic6 = document.getElementById("pic31")
var pic7= document.getElementById("pic40")
var pic8 = document.getElementById("pic41")
var pic9 = document.getElementById("pic50")
var pic10 = document.getElementById("pic51")
var pic11 = document.getElementById("pic60")
var pic12 = document.getElementById("pic61")
var pic13 = document.getElementById("pic70")
var pic14 = document.getElementById("pic71")
var pic15 = document.getElementById("pic80")
var pic16 = document.getElementById("pic81")
var pic17 = document.getElementById("pic90")
var pic18 = document.getElementById("pic91")

leftBox.classList.add("style1")
rightBox.classList.add("style2")

pic1.setAttribute("src", "../images/car/42.png")
pic2.setAttribute("src", "../images/brand/benz.png")
pic1.setAttribute("ondragstart", "dragStart(event)")
pic3.setAttribute("src", "../images/car/32.png")
pic4.setAttribute("src", "../images/brand/bmw.png")
pic3.setAttribute("ondragstart", "dragStart(event)")
pic5.setAttribute("src", "../images/car/23.png")
pic6.setAttribute("src", "../images/brand/audi.png")
pic5.setAttribute("ondragstart", "dragStart(event)")
pic7.setAttribute("src", "../images/car/19.png")
pic8.setAttribute("src", "../images/brand/chev.png")
pic7.setAttribute("ondragstart", "dragStart(event)")
pic9.setAttribute("src", "../images/car/17.png")
pic10.setAttribute("src", "../images/brand/nissan.png")
pic9.setAttribute("ondragstart", "dragStart(event)")
pic11.setAttribute("src", "../images/car/mazdapng.png")
pic12.setAttribute("src", "../images/brand/mazda.png")
pic11.setAttribute("ondragstart", "dragStart(event)")
pic13.setAttribute("src", "../images/car/fer.png")
pic14.setAttribute("src", "../images/brand/fer.png")
pic13.setAttribute("ondragstart", "dragStart(event)")
pic15.setAttribute("src", "../images/car/56.png")
pic16.setAttribute("src", "../images/brand/toyo.png")
pic15.setAttribute("ondragstart", "dragStart(event)")
pic17.setAttribute("src", "../images/car/reno.png")
pic18.setAttribute("src", "../images/brand/reno.png")
pic17.setAttribute("ondragstart", "dragStart(event)")


function dragStart(event){
    event.dataTransfer.setData('text/plain', event.target.id);
}



function allowDrop(event){
    event.preventDefault()
}


function onDrop(event){
    var itemId = event.dataTransfer.getData('text/plain');
    var item = document.getElementById(itemId);
    var dropZone = document.getElementById("dropBox");

    item.style.left = event.pageX - 35 +"px";
    item.style.top = event.pageY - 42 +"px";
    item.style.transition="all 0.5s linear";

    dropZone.appendChild(item);
}


