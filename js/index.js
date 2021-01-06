var btn = document.querySelector(".button1");
var txt = document.querySelector(".para1");

btn.addEventListener('click', function(){
    if(btn.textContent === "Start Machine"){
        btn.textContent = "Stop Machine"
        txt.textContent = "The Machine is ON right now"
    }else{
        btn.textContent = "Start Machine"
        txt.textContent = "The Machine is Stopped right now!"
    }
})


var btn2 = document.querySelector(".button2");
var btn3 = document.querySelector(".button3");

btn2.addEventListener('click',function(){
    document.querySelector(".image").src = "images/pic_bulbon.gif"
})

btn3.addEventListener('click',function(){
    document.querySelector(".image").src = "images/pic_bulboff.gif"
})