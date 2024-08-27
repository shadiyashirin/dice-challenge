function play()
{
var n1=Math.floor(Math.random()*6)+1;
var n2=Math.floor(Math.random()*6)+1;
randomImg1="dice" + n1 + ".png";
randomImg2="dice" + n2 + ".png";

document.querySelector(".image1").setAttribute("src","images/"+randomImg1);
document.querySelector(".image2").setAttribute("src","images/"+randomImg2);

if(n1>n2)
{
    document.querySelector("h1").innerHTML="🚩 Player 1 wins";
}
else if(n2>n1)
{
    document.querySelector("h1").innerHTML="Player 2 wins 🚩";
}
else{
    document.querySelector("h1").innerHTML="Tie";
}
}