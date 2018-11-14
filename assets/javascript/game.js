$(document).ready(function(){
    var score, goalNumber;
    var wins = 0;
    var losses = 0;
    
    resetGame();
    
    $('.bros').on("click", function(){
        score += parseInt($(this).val());
        $("#score").html(score);
    
        if(score == goalNumber){
            alert("You Win!");
            wins++;
            resetGame();
        }
        if(score > goalNumber){
            alert("You Lose! Haha");
            losses++;
            resetGame();
        }
    });
    
    if(score == goalNumber){
        alert("You Win!");
        wins++;
        resetGame();
    }
    if(score > goalNumber){
        alert("You Lose! Haha");
        losses++;
        resetGame();
    }
    
    
    function resetGame(){
        score = 0;
        goalNumber = Math.floor((Math.random() * 15) + 40);
        $("#Mario").val(Math.floor((Math.random() * 7) + 3));
        $("#Boo").val(Math.floor((Math.random() * 7) + 3));
        $("#Browser").val(Math.floor((Math.random() * 7) + 3));
        $("#Wauligi").val(Math.floor((Math.random() * 7) + 3));
        $("#goal").html(goalNumber);
        $("#score").html(score);
        $("#wins").html(wins);
        $("#losses").html(losses);
    }
    });