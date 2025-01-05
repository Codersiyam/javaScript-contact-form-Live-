var msg = document.getElementById("msg");
var chart = document.getElementById("chart");
var count = document.getElementById("count");

msg.addEventListener('keyup', function(){
    chart.innerHTML= msg.value.length;
    if(msg.value.length>5000){
        msg.style.border="2px solid red";
        chart.style.color="red";
        count.style.color="red";
    }else{
        msg.style.border="2px solid ac-blue";
        chart.style.color="ac-blue";
        count.style.color="ac-blue";
    }
    
})