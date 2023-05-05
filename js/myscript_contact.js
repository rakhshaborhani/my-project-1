var btn = document.getElementById("btn");
btn.addEventListener('click', function(){ 
    var box = document.getElementById("box").value;
    if(box.length > 0) {
        var txtBox = document.getElementById("txtBox");
        txtBox.innerText = "Your Message Has Been Successfully Sent"
        txtBox.classList.add("styleBox") 
    }   
})

// ---------------------------------------------------------

function locate() {
    const posStatus = document.querySelector('#posStatus');
    const locInfo = document.querySelector('#locInfo');
    posStatus.innerHTML='Locating...'
    locInfo.style.display = "block"
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition((position)=>{
       const lat  = position.coords.latitude;
       const long = position.coords.longitude;
       posStatus.innerHTML='Location';
       // Display Latitude and Logitude
       
       locInfo.innerHTML = "click This Link : " + `Latitude: ${lat}, Longitude: ${long}`;
       // Create the link. Use map=15-19 for zooming out and in
       // Pass lat and long to openstreetmap
       locInfo.href = `https://www.openstreetmap.org/#map=19/${lat}  /${long}`;
       });
    }
 }