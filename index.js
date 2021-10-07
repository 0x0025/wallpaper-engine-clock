var clockDiv;

window.onload = function(){
    clockDiv = document.getElementById('clock');

    setInterval(update, 1000);
};

function update(){
    var now = new Date();
    var time = '';

    if(now.getHours() < 10 ){
        time += '0' + now.getHours();
    }else{
        time += now.getHours();
    }

    time += ':';

    if(now.getMinutes() < 10 ){
        time += '0' + now.getMinutes();
    }else{
        time += now.getMinutes();
    }

    clockDiv.firstChild.data = time;
}

update();