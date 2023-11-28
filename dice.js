
var randomNumber ;
randomNumber = Math.floor(Math.random()*6 + 1);

var randomImage = "dice" + randomNumber+".png";

var randomImageSource = "images/" + randomImage;

var image1 = document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);


var randomNumber2 = Math.floor(Math.random()*6 + 1);

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if(randomNumber<randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "DRAWSSS!";
}
