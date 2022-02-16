let dices_img = ["Dice/1.png","Dice/2.png","Dice/3.png","Dice/4.png","Dice/5.png","Dice/6.png"];
let dices = document.querySelectorAll(".dice");
var rolled = false;

var result;
var time = 10, duringroll_time = time;
// var iscountdown_on = true;
var datcuoctai_using = false, datcuocxiu_using = false;
var decide_bet_using = false;
const bets= document.querySelectorAll(".bet"),
confirms = document.querySelectorAll(".confirm"),
huys = document.querySelectorAll(".huy"),
bet_levels = document.querySelectorAll(".bet-level");
var player_money = 200000;

var curbet_tai = 0, curbet_xiu = 0;
var curbet_player_tai = 0, curbet_player_xiu = 0;
var final_tai = 0, final_xiu = 0;


var check_for_confirm = -1;


var clock = setInterval(loop,1000);
decide_bet();
bet_levels_func();
confirm();
huy();


function loop(){
    if(time>=0){
        // if(!decide_bet_using){
        //     decide_bet_using = true;
        //     decide_bet();
        // }
        document.getElementById("pop-up-on").innerHTML = "Bắt đầu đặt cược";
        document.getElementById("countdown-on").innerHTML = time;
        time--;
        duringroll_time = time;

        //random bet cua nguoi choi
        curbet_tai += ran(1000,5000000,1000);
        curbet_xiu += ran(1000,5000000,1000);
        document.getElementById("curbet-tai").innerHTML = curbet_tai;
        document.getElementById("curbet-xiu").innerHTML = curbet_xiu;
    }
    else{
        //pop-up
        document.getElementById("pop-up-on").innerHTML = "Trả tiền cân cửa";
        //thoi gian roll dice
        duringroll_time--;
        //can cua
        if(curbet_tai>curbet_xiu){
            curbet_tai = curbet_xiu;
        }
        else{
            curbet_xiu = curbet_tai;
        }
        document.getElementById("curbet-tai").innerHTML = curbet_tai;
        document.getElementById("curbet-xiu").innerHTML = curbet_xiu;

        // khong cho dat nua
        if(decide_bet_using){
            decide_bet_using = false;
        }

        //check countdown clock va tat no di
        // if(iscountdown_on){
        //     document.getElementById("countdown-on").id = "countdown";
        //     iscountdown_on = false;
        // }
        if(!rolled){
            roll();
            rolled = true;
        }
        
        //reset phien moi
        if(duringroll_time == -10){
            rolled = false;
            //reset time
            // iscountdown_on = true;
            // document.getElementById("countdown").id = "countdown-on";
            time = 10;
            duringroll_time = 10;

            //reset nut dat cuoc
            if(datcuoctai_using){
                reset_tai();
            }
            if(datcuocxiu_using){
                reset_xiu();
            }

            //reset random bet nguoi choi
            curbet_tai = 0;
            curbet_xiu = 0;
            document.getElementById("curbet-tai").innerHTML = curbet_tai;
            document.getElementById("curbet-xiu").innerHTML = curbet_xiu;
            final_tai = 0;
            final_xiu =0;
            
            if(check_for_confirm != -1){
                if(check_for_confirm == 0){
                    document.getElementById("confirm-bet-tai-on").id= "confirm-bet-tai";
                    
                }
                else{
                    document.getElementById("confirm-bet-xiu-on").id= "confirm-bet-xiu";
                }
                check_for_confirm = -1;
            }
            //update money
           

        }
    }
    
}
function ran(min, max, inc) {
    min = min || 0;
    inc = inc || 1;
    if(!max) { return new Error('need to define a max');}

    return Math.floor(Math.random() * (max - min) / inc) * inc + min;
}


function decide_bet(){
    Array.from(bets).forEach(function(bet){
        
        if(bet.id =="bet-tai"){
            bet.addEventListener("click",function(){
            datcuoctai_using = true;
            if(datcuocxiu_using){
                reset_xiu();
                
            }
            document.getElementById("decide-bet-tai").id += "-off"
            document.getElementById("final-amount-tai").id += "-on";
            document.getElementById("confirm-tai").id +="-on";
            document.getElementById("huy-tai").id +="-on";
            });
        }
        if(bet.id =="bet-xiu"){
            
            bet.addEventListener("click",function(){
            datcuocxiu_using = true;
            if(datcuoctai_using){
                reset_tai();
                
            }
            document.getElementById("decide-bet-xiu").id +="-off"
            document.getElementById("final-amount-xiu").id += "-on";
            document.getElementById("confirm-xiu").id +="-on";
            document.getElementById("huy-xiu").id +="-on";
            });
        }
    });
    
}

var count;

function confirm(){
    Array.from(confirms).forEach(function(confirm){
        confirm.addEventListener("click",function(){
            if(time>0){
                if(datcuoctai_using && curbet_player_tai>0 ){
                    if(check_for_confirm == 1){
                        document.getElementById("pop-up-tai").id += "-on";
                        count = 0;
                        var fivesec = setInterval(function(){
                            count++;
                            if(count==1){
                                document.getElementById("pop-up-tai-on").id = "pop-up-tai";
                                clearInterval(fivesec);
                            }
                        },500)
                    }
                    else{
                    final_tai += curbet_player_tai;
                    player_money -= curbet_player_tai;
                    document.getElementById("player-money").innerHTML = player_money;
                    if(check_for_confirm == -1){
                        check_for_confirm = 0;
                        document.getElementById("confirm-bet-tai").id+="-on";
                    }
                    document.getElementById("confirm-bet-tai-on").innerHTML = final_tai;
                    curbet_player_tai = 0;
                    document.getElementById("final-amount-tai-on").innerHTML =0 ;
                    }
                    
                }
                if(datcuocxiu_using && curbet_player_xiu>0 ){
                    if(check_for_confirm == 0){
                        document.getElementById("pop-up-xiu").id += "-on";
                        count = 0;
                        var fivesec = setInterval(function(){
                            count++;
                            if(count==1){
                                document.getElementById("pop-up-xiu-on").id = "pop-up-xiu";
                                clearInterval(fivesec);
                            }
                        },500)
                    }
                    else{
                    final_xiu += curbet_player_xiu;
                    player_money -= curbet_player_xiu;
                    document.getElementById("player-money").innerHTML = player_money;
                    if(check_for_confirm == -1){
                        check_for_confirm = 1;
                        document.getElementById("confirm-bet-xiu").id+="-on";
                    }
                    document.getElementById("confirm-bet-xiu-on").innerHTML = final_xiu;
                    curbet_player_xiu = 0;
                    document.getElementById("final-amount-xiu-on").innerHTML =0 ;
                    }
                    
                }
            }
        });
        }
    )}

function huy(){
    Array.from(huys).forEach(function(huy){
       huy.addEventListener("click",function(){
        if(huy.id=="huy-tai-on"){
            reset_tai();
        }
        else{
            reset_xiu();
        }
       });
    });
}

function bet_levels_func(){
    Array.from(bet_levels).forEach(function(bet_level){

        bet_level.addEventListener("click",function(){
            
                if(datcuoctai_using){
                    curbet_player_tai += parseInt(bet_level.id,10)*1000;
                    if(curbet_player_tai > player_money)
                        curbet_player_tai = player_money;
                    document.getElementById("final-amount-tai-on").innerHTML = curbet_player_tai;
                }
                if(datcuocxiu_using){
                    curbet_player_xiu += parseInt(bet_level.id,10)*1000;
                    if(curbet_player_xiu > player_money)
                        curbet_player_xiu = player_money;
                    document.getElementById("final-amount-xiu-on").innerHTML = curbet_player_xiu;
                }
            
            
        })
    })

}

function reset_tai(){
    curbet_player_tai = 0;
    datcuoctai_using = false;
    document.getElementById("decide-bet-tai-off").id ="decide-bet-tai";
    document.getElementById("final-amount-tai-on").innerHTML = 0;
    document.getElementById("final-amount-tai-on").id =  "final-amount-tai";
    document.getElementById("confirm-tai-on").id ="confirm-tai";
    document.getElementById("huy-tai-on").id = "huy-tai";
}

function reset_xiu(){
    curbet_player_xiu = 0;
    datcuocxiu_using = false;
    document.getElementById("decide-bet-xiu-off").id ="decide-bet-xiu";
    document.getElementById("final-amount-xiu-on").innerHTML = 0;
    document.getElementById("final-amount-xiu-on").id =  "final-amount-xiu";
    document.getElementById("confirm-xiu-on").id ="confirm-xiu";
    document.getElementById("huy-xiu-on").id = "huy-xiu";
}

function roll(){
    dices.forEach(function(dice){
        dice.classList.add("shake");
    });
    
    setTimeout(function(){
        dices.forEach(function(dice){
            dice.classList.remove("shake");
        });
        let dice_1_value = Math.floor(Math.random()*6);
        let dice_2_value = Math.floor(Math.random()*6);
        let dice_3_value = Math.floor(Math.random()*6);
        document.querySelector("#dice-1").setAttribute("src",dices_img[dice_1_value]);
        document.querySelector("#dice-2").setAttribute("src",dices_img[dice_2_value]);
        document.querySelector("#dice-3").setAttribute("src",dices_img[dice_3_value]);
        result = dice_1_value+dice_2_value+dice_3_value+3;
        if(result>10){
            if(final_tai > 0){
                player_money += final_tai*2;
                document.getElementById("player-money").innerHTML =player_money;
            }
            
        }
        else{
            if(final_xiu >0){
                player_money += final_xiu*2;
                document.getElementById("player-money").innerHTML =player_money;
            }
        }
        console.log(result);
    },2000);
   
}