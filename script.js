let opening = document.querySelector(".story-opening");
let optionOne = document.querySelector(".option-one");
let optionTwo = document.querySelector(".option-two");
let screenOne = document.querySelector(".option-one-screen");
let screenTwo = document.querySelector(".option-two-screen");
let endOne= document.querySelector(".option-one-end");
let endTwo = document.querySelector(".option-two-end");
let imgOne = document.querySelector(".one-img");
let imgTwo = document.querySelector(".two-img");
let vidEnd = document.querySelector(".ending");
let title = document.querySelector(".title");
let subButton = document.querySelector(".submit-button");
let tEnd = document.querySelector(".true-ending");
var audio = new Audio("SingFry.mp3")
var audio2 = new Audio("https://vgmsite.com/soundtracks/face-raiders-nintendo-3ds/ayvjqfiswg/08.%20Stage%201.flac")
let aButton = document.querySelector(".apologize")
var audio3 = new Audio("GuitarEnd.mp3")
let guitarEnd = document.querySelector(".guitar")


optionOne.onclick=function(){ 
  title.innerHTML = "Something's Wrong"
  opening.style.display="none";
  optionOne.style.display="none";
  optionTwo.style.display="none";
  screenOne.style.display="block"
};

optionTwo.onclick=function(){
  title.innerHTML = "What's Wrong?"
  opening.style.display="none";
  optionOne.style.display="none";
  optionTwo.style.display="none";
  screenTwo.style.display="block";
};

imgOne.onclick=function(){
  title.innerHTML = "Hungry Ending"
  screenOne.style.display="none";
  endOne.style.display="block"
  audio2.play()
};

imgTwo.onclick=function(){
  title.innerHTML = "Violent Ending"
  screenTwo.style.display="none";
  endTwo.style.display="block"
};

aButton.onclick=function(){
  audio2.pause()
  audio3.play()
  title.innerHTML = "Guitar Ending"
  guitarEnd.style.display = "block"
  endOne.style.display = "none"
};

subButton.onclick=function(){
  
  let  endInput = document.querySelector(".end-input").value

if (endInput === "9578"){
  
title.innerHTML = "TRUE ENDING";
  tEnd.style.display = "block";
  endTwo.style.display = "none";
  audio.play()

  
  
};

 

};

