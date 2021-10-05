var clockDiv;

window.onload = function(){
    console.log("Hello world");
    clockDiv = document.getElementById('clock');

    setInterval(update, 900);
};

var i = 1

function update(){
    i++;
    clockDiv.firstChild.data = i;
}