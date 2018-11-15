$(document).ready(function(){
    var score, goalNumber;
    var wins = 0;
    var losses = 0;
    
    resetGame();
    
    $('.bros').on("click", function(){
        score += Number($(this).val());

        console.log("click");


        $("#score").html(score);

    
        if(score == goalNumber){
            alert("You Win!");
            wins++;
            resetGame();
        }
        if(score > goalNumber){
            alert("You Lose! Boo");
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
        alert("You Lose! Boo");
        losses++;
        resetGame();
    }
    
    
    function resetGame(){
        score = 0;
        goalNumber = Math.floor((Math.random() * 101) + 19);
        $("#Mario").val(Math.floor((Math.random() * 11) + 1));
        $("#boo").val(Math.floor((Math.random() * 11) + 1));
        $("#Browser").val(Math.floor((Math.random() * 11) + 1));
        $("#Waluigi").val(Math.floor((Math.random() * 11) + 1));
        $("#goal").html(goalNumber);
        $("#score").html(score);
        $("#wins").html(wins);
        $("#losses").html(losses);


    }
    resetGame()
    });