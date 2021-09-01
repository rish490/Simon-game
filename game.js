
var buttoncolors=["red","blue","green","yellow"];
var count=1;
var flag=false;
var check=1;
//alert(Math.floor(Math.random()*4));
var userclickedpattern=[];
var gamepattern=[];
$(document).keypress(function(event){
    if(count===1){
        count++;
       // alert(event.key);
        $("#dil").text("game starts");
        
        nextsequence();
    }
}); 
$(".common").click(function(){
    var userchosencolor=this.id;
   // alert(gamepattern.length);
    
    userclickedpattern.push(userchosencolor);
  //  alert(userclickedpattern.length);
    playsound(userchosencolor);
    animate(userchosencolor);
    checkanswer(userclickedpattern.length-1);
});
function nextsequence(){
    if(flag===false||gamepattern===[]){
        flag=false;
    var randomnumber=Math.floor(Math.random()*4);
   // alert(randomnumber);
   userclickedpattern=[];
var randomchosencolor=buttoncolors[randomnumber];
gamepattern.push(randomchosencolor);
$('#'+randomchosencolor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
playsound(randomchosencolor);
$("#main").text("level"+" "+check);
check++;
}
}
function playsound(name){
    
    var audio = new Audio("soundss/" + name + ".mp3");
    audio.play();
}
function animate(temp){
    $('#'+temp).addClass("pressed");
    setTimeout(function(){
        $('#'+temp).removeClass("pressed");

    },100);
}
function checkanswer(name){
    if(userclickedpattern[name]===gamepattern[name]){
        if(userclickedpattern.length===gamepattern.length){
            setTimeout(function(){
                nextsequence();
            },1000);
        }
    
    }
    else{
        $("#chura").addClass("game-over");
        setTimeout(function(){
        $("#main").text("sorry game over");
        $("#dil").text("press any key to restart");
        var audio = new Audio("soundss/wrong.mp3");
         audio.play();
         $("#chura").removeClass("game-over");
        },200);
       flag=true;
        startover();
    }

}
function startover(){
    count=1;
flag=false;
check=1;
userclickedpattern=[];
gamepattern=[];

}