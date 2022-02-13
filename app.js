const startingsecond = 5;
let time = startingsecond;

const countdownvar = document.getElementById('countdown');
setInterval(updatecountdown,1000);
function updatecountdown() {
    countdownvar.innerHTML = time;
    if (time >0){time--;} else {
        document.getElementById("countdown").id = "countdown-off";
    }
}
document.getElementById("decide-bet-tai").addEventListener("click", change_tai);   
function change_tai() {
    document.getElementById("decide-bet-tai").id = "decide-bet-tai-off";
    document.getElementById("amount-tai-off").id = "amount-tai-on";
    document.getElementById("confirm-tai-off").id = "confirm-tai-on";
  }
 
function change_xiu() {
    document.getElementById("decide-bet-xiu").id = "decide-bet-xiu-off";
    document.getElementById("amount-xiu-off").id = "amount-xiu-on";
    document.getElementById("confirm-xiu-off").id = "confirm-xiu-on";
  }