(function () {
    'use strict';
    const myVideo = document.querySelector('#myVideo');
    const fs = document.querySelector('.fa-expand');
    const volToggle = document.querySelector('.fa-volume-mute');
    const loading = document.querySelector('.fa-tree');
    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const line3 = document.querySelector('#line3');
    const line4 = document.querySelector('#line4');
    const line5 = document.querySelector('#line5');
    const line6 = document.querySelector('#line6');

   // const intervalID = setInterval(checkTime, 1000);

    

    const poem = {
        start: [2, 7, 11, 17, 21, 27],
        stop: [8, 12, 16, 22, 28, 33],
        line: [line1, line2, line3, line4, line5, line6]
    };

//try to let text stay when mouse move in (unfinished)
    // for(let i = 0; i < poem.line.length; i++){
    //     poem.line[0].addEventListener("mouseenter",function(){
    //         poem.line[0].className = "stay";
    //     })
    //     poem.line[0].addEventListener("mouseleave",function(){
    //         poem.line[0].className = "hidden";
    //     })
    // }
    for(let i = 0; i < poem.line.length; i++){
            poem.line[i].addEventListener("mousedown",function(){
                myVideo.className = "lightsOff";
            })
            poem.line[i].addEventListener("mouseup",function(){
                myVideo.className = "lightsOn";
            })
        }



    function checkTime() {
        for (let i = 0; i < poem.start.length; i++) {
            if (poem.start[i] < myVideo.currentTime && myVideo.currentTime < poem.stop[i]) {
                poem.line[i].className = "showing";
            } else if(myVideo.currentTime > poem.stop[i]){
                poem.line[i].className = "hidden";
            } else{
                poem.line[i].className = "prepare";
            }
            console.log(i);
        }
    }
    setInterval(checkTime, 1000);

    fs.addEventListener('click', function () {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            fs.className = "fas fa-compress";
        } else {
            document.exitFullscreen();
            fs.className = "fas fa-expand";
        }
    })

    volToggle.addEventListener('click',function(){
        if(volToggle.className === 'fas fa-volume-up'){
            volToggle.className = 'fas fa-volume-mute';
            myVideo.muted = true;
        }else{
            volToggle.className = 'fas fa-volume-up';
            myVideo.muted = false;
        }
    })

    myVideo.addEventListener('playing',function(){
        loading.style.display = 'none';
    })


    // function checkTime(){
    //     if( 1 < myVideo.currentTime && myVideo.currentTime < 3){
    //         line1.className = "showing";
    //     }else{
    //         line1.className = "hidden";
    //     }
    //     if( 5 < myVideo.currentTime && myVideo.currentTime < 7){
    //         img1.className = "showing";
    //     }else{
    //         img1.className = "hidden";
    //     }
    // }

})();