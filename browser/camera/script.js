let video = document.querySelector("video");
let recordBtncont = document.querySelector(".record-btn-cont");
let recordBtn = document.querySelector(".record-btn");
let captureBtncont = document.querySelector(".capture-btn-cont");
let captureBtn = document.querySelector(".capture-btn");

let recoder;
let chunks = []; //media data in chunks
let transparentColor = "transparent";

let constraints={
    video:true,
    audio:true
}

let recordFlag = false;

navigator.mediaDevices.getUserMedia(constraints)
.then((stream)=>{
    video.srcObject = stream;

    recoder = new MediaRecorder(stream);

    recoder.addEventListener("start",(e)=>{
        chunks = [];
    })

    recoder.addEventListener("dataavailable",(e)=>{
        chunks.push(e.data)
    })

    recoder.addEventListener("stop",(e)=>{
        //conversion of media chunks data to video
        let blob = new Blob(chunks,{type:"video/mp4"});

        if(db){
            let videoId = shortid();
            let dbTransaction = db.transaction("video","readwrite")
            let videoStore = dbTransaction.objectStore("video");
            let videoEntry = {
                id:`vid-${videoId}`,
                blobData :blob
            }
            videoStore.add(videoEntry);
        }
        // let videoURL = URL.createObjectURL(blob);
        // let a = document.createElement("a");
        // a.href = videoURL;
        // a.download = "stream.mp4"
        // a.click();
    })
})

recordBtncont.addEventListener("click",(e)=>{
    if(!recoder) return;

    recordFlag = !recordFlag;

    if(recordFlag){
        recoder.start();
        recordBtn.classList.add("scale-record");
        startTimer();
    }else{
        recoder.stop();
        recordBtn.classList.remove("scale-record");
        stopTimer();
    }
})

//timer 
let timer = document.querySelector(".timer");
let counter = 0; //represents total seconds
let timerID;
function startTimer(){
    timer.style.display = "block"
    function displayTimer(){
        let totalSeconds = counter;

        let hours = Number.parseInt(totalSeconds/3600);
        totalSeconds = totalSeconds % 3600;

        let minutes = Number.parseInt(totalSeconds/60);
        totalSeconds = totalSeconds % 60;

        let second = totalSeconds;

        hours = (hours<10)? `0${hours}`:hours;
        minutes = (minutes<10)? `0${minutes}`:minutes;
        second = (second<10)? `0${second}`:second;

        timer.innerText = `${hours}:${minutes}:${second}`;
        counter++;
    }

    timerID = setInterval(displayTimer,1000)
}

function stopTimer(){
    clearInterval(timerID);
    timer.style.display = "none"
    timer.innerText = "00:00:00"
}

//canvas capture

captureBtncont.addEventListener("click",(e)=>{
    captureBtn.classList.add("scale-capture");
    let canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    let tool = canvas.getContext("2d")
    tool.drawImage(video,0,0,canvas.width,canvas.height)

    //filter
    tool.fillstyle = transparentColor;
    tool.fillRect(0,0,canvas.width,canvas.height)

    let imageURL = canvas.toDataURL();

    if(db){
        let imageId = shortid();
        let dbTransaction = db.transaction("image","readwrite");
        let imageStore = dbTransaction.objectStore("image");
        let imageEntry = {
            id:`img-${imageId}`,
            url:imageURL
        }
        imageStore.add(imageEntry)
    }

    setTimeout(()=>{
        captureBtn.classList.add("scale-capture");
    },500)
    // let a = document.createElement("a")
    // a.href = imageURL;
    // a.download = "image.jpg"
    // a.click();
})


//filter logic
let filterLayer = document.querySelector(".filter-layer")
let allFilter = document.querySelectorAll(".filter");
allFilter.forEach((filterElem) =>{
    filterElem.addEventListener("click",(e)=>{
        //get style
        transparentColor = getComputedStyle(filterElem).getPropertyValue("background-color");
        filterLayer.style.backgroundColor = transparentColor;
    })
})