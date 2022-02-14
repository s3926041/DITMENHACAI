let time = 5;
let time1 = time;
var sum_tai = 0;
var sum_xiu = 0;
var not0 = true;
var curbet_tai_player = 0;
var curbet_xiu_player = 0;
const countdownvar = document.getElementById('countdown');

var start_clock = setInterval(updatecountdown,1000);


function updatecountdown() {
    countdownvar.innerHTML = time;
    if(not0){
        time1 = time;
    }
    if (time >0){
        console.log(time);
        time--;

        sum_tai += randomRangeWithIncrements(10000, 10000000,1000);
        document.getElementById("curbet-tai").innerHTML = sum_tai;

        sum_xiu += randomRangeWithIncrements(10000, 10000000,1000);
        document.getElementById("curbet-xiu").innerHTML = sum_xiu;
        
    } else {
        not0 = false;
        time1--;
        console.log(time1);
        if (time1 <= -5){
            if (sum_tai > sum_xiu){
                document.getElementById("curbet-tai").innerHTML = sum_xiu;
            }
            else{
                document.getElementById("curbet-xiu").innerHTML = sum_tai;
            }
            document.getElementById("countdown").id = "countdown-off";
            clearInterval(start_clock);
        }
       
    }
}



function randomRangeWithIncrements(min, max, inc) {
    min = min || 0;
    inc = inc || 1;
    if(!max) { return new Error('need to define a max');}

    return Math.floor(Math.random() * (max - min) / inc) * inc + min;
}

document.getElementById("decide-bet-tai").addEventListener("click",change_tai);  
function change_tai() {
    curbet_xiu_player = 0;
    document.getElementById("decide-bet-tai").id = "decide-bet-tai-off";
    document.getElementById("amount-tai-off").id = "amount-tai-on";
    document.getElementById("confirm-tai-off").id = "confirm-tai-on";
    document.getElementById("final-amount-tai-off").id = "final-amount-tai-on"
    
    document.getElementById("decide-bet-xiu-off").id = "decide-bet-xiu";
    document.getElementById("amount-xiu-on").id = "amount-xiu-off";
    document.getElementById("confirm-xiu-on").id = "confirm-xiu-off";
    document.getElementById("final-amount-xiu-on").id = "final-amount-xiu-off";
  }

document.getElementById("decide-bet-xiu").addEventListener("click", change_xiu);  
function change_xiu() {
    curbet_tai_player =0;
    document.getElementById("decide-bet-xiu").id = "decide-bet-xiu-off";
    document.getElementById("amount-xiu-off").id = "amount-xiu-on";
    document.getElementById("confirm-xiu-off").id = "confirm-xiu-on";
    document.getElementById("final-amount-xiu-off").id = "final-amount-xiu-on";

    document.getElementById("decide-bet-tai-off").id = "decide-bet-tai";
    document.getElementById("amount-tai-on").id = "amount-tai-off";
    document.getElementById("confirm-tai-on").id = "confirm-tai-off";
    document.getElementById("final-amount-tai-on").id = "final-amount-tai-off"
  }
  
