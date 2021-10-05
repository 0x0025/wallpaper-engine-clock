var clockDiv;

window.onload = function(){
    console.log("Hello world");
    clockDiv = document.getElementById('clock');

    setInterval(update, 900);
};

function update(){
    var now = new Date();
    clockDiv.firstChild.data = now.getHours() + ":" + now.getMinutes();
}