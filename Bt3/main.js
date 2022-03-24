
function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString(); 
    document.getElementById("seconds").src=`./images/0${t.charAt(6)}.gif`
  document.getElementById("miliseconds").src=`./images/0${t.charAt(7)}.gif`
}
setInterval(myTimer, 1000);
