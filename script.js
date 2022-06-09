//Initialize the variables
let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myprogressbar");
let gif = document.getElementById("gif");
let songsItems = Array.from(document.getElementsByClassName("songItem"));
let masterSongName = document.getElementById("masterSongName");
let songItemPlayy = document.querySelector(".songItemPlay");
let skip = document.getElementById("skipsec");
let back = document.getElementById("moveback");
let vihar1 = document.querySelector(".vihar1");
let vihar2 = document.querySelector(".vihar2");
let songconta = document.querySelector(".songitemcontainer");

let songs = [
  {
    songName: "Shiddat Title Track - Manan Bhardwaj",
    filePath: "1.mp3",
    coverPath: "1.jpg",
  },
  {
    songName: "Jannat Jahan - Pritam Chakraborty",
    filePath: "2.mp3",
    coverPath: "2.jpg",
  },
  {
    songName: "Aaj Ro Len de - Shaarib Sabri",
    filePath: "3.mp3",
    coverPath: "3.jpg",
  },
  {
    songName: "Ae Mere Humsafar-Alka Yagnik, Udit Narayan",
    filePath: "4.mp3",
    coverPath: "4.jpg",
  },
  {
    songName: "Me yahan tu wahan-Amitabh Bacchan,Alka Yagnik",
    filePath: "5.mp3",
    coverPath: "5.jpg",
  },
  {
    songName: "Agar Tum Mil Jao - Shreya Ghoshal",
    filePath: "6.mp3",
    coverPath: "6.jpg",
  },
  {
    songName: "Bheed Main - Shreya Ghoshal , Udit Narayan",
    filePath: "7.mp3",
    coverPath: "7.jpg",
  },
  {
    songName: "Dil Diya Hai - Anand Raaj Anand",
    filePath: "8.mp3",
    coverPath: "8.jpg",
  },
  {
    songName: "Abhi Abhi - KK , Akriti Kakar",
    filePath: "9.mp3",
    coverPath: "9.jpg",
  },
  {
    songName: "Yeh Jism Hai - Ali Azmat",
    filePath: "10.mp3",
    coverPath: "10.jpg",
  },
];

//audioElement.play();

//Handle play/pause click

vihar1.addEventListener("click", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100 - 10;
});
vihar2.addEventListener("click", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100 + 10;
});

const makeAllPlay = ()=>{
  Array.from(document.getElementsByClassName("songitem")).forEach((element) =>{
      element.classList.remove("whenhover");
  })}
   var dd=-1; var count = 0;var count2= 0;
Array.from(document.getElementsByClassName("songitem")).forEach((element) => {
  element.addEventListener("click", (e) => {
    songIndex = parseInt(e.target.id);
    
    if (audioElement.paused || audioElement.currentTime <= 0 || audioElement.played) {
       
      if(dd == songIndex && count==0)
      {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        element.classList.add("songitem")
        element.classList.remove("whenhover")
        count = 1;
        count2 =1;    
      }
      else{
      makeAllPlay();
      element.classList.add("whenhover");
        dd = songIndex;
      audioElement.src = `${songIndex+1}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
      masterSongName.innerHTML = songs[songIndex].songName;
      if(count2==1)
      count=0;
      }
    } 
  });
});

 
masterPlay.addEventListener("click", (element) => {
  
    
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    document.getElementById(`${songIndex}`).classList.add("whenhover");
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
    document.getElementById(`${songIndex}`).classList.remove("whenhover");
    document.getElementById(`${songIndex}`).classList.add("songitem");
  }

});
//Listen to Events
audioElement.addEventListener("timeupdate", () => {
  //update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime = myProgressBar.value; //aam na karay kemke myProgressbar ni value percentage ma che
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100; //audioElement.currentTime ne sutra no karta banavyo
});

skip.addEventListener("click", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100 + 10;
});

back.addEventListener("click", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100 - 10;
});

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  makeAllPlay();
  audioElement.src = `${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
  masterSongName.innerHTML = songs[songIndex].songName;
   
  document.getElementById(`${songIndex}`).classList.add("whenhover");
  //gif.style.opacity = 1;
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 9;
  } else {
    songIndex -= 1;
  }
  makeAllPlay();
  audioElement.src = `${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
  masterSongName.innerText = songs[songIndex].songName;
   
  document.getElementById(`${songIndex}`).classList.add("whenhover");
  //  gif.style.opacity = 1;
});
