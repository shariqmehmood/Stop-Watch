var min=0;
var sec=0;
var msec=0;


var mints=document.getElementById('min')
var second=document.getElementById('sec')
var milisec=document.getElementById('msec') 
var interval;


function start(){
    document.getElementById('str').disabled=true
interval=setInterval (function (){

    msec++
    milisec.innerHTML=msec
    if(msec>=100){
        sec++
        second.innerHTML=sec
        msec=0
    }
    else if(sec>=60){
        min++
        mints.innerHTML=mins
        sec=0
    
    }
    
},10)

}


function pause(){
    document.getElementById('str').disabled=false;

    clearInterval(interval)
    
}
 function reset(){
     min=0;
     sec=0;
     msec=0;
     mints.innerHTML=min;
     second.innerHTML=sec;
     milisec.innerHTML=msec;
     document.getElementById('str').disabled=false;
     clearInterval(interval)
 }