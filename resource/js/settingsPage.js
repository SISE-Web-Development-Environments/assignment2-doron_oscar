

function gameControlers(event, id) {

    //var eventKey = event.key;
	if (id === "up") {
        document.getElementById("up").innerHTML = event.key;
        //console.log(event.key)

        document.getElementById("up").value = event.key;
	}
	else if (id === "down") {
		document.getElementById("down").innerHTML = event.key;

        document.getElementById("down").value = event.key;

	}
	else if (id === "right") {
		document.getElementById("right").innerHTML = event.key;

        document.getElementById("right").value = event.key;

	}
	else if (id === "left") {
        document.getElementById("left").innerHTML = event.key;

        document.getElementById("left").value = event.key;

	}
}

//$(function(){

    
    jQuery.validator.addMethod("goUp", function(value, element) {

        return  value.toString() !== $("#down").val() && 
                value.toString() !== $("#right").val() &&
                value.toString() !== $("#left").val();
    });
    
    jQuery.validator.addMethod("goDown", function(value, element) {
    
        return  value.toString() !== $("#up").val() && 
                value.toString() !== $("#right").val() &&
                value.toString() !== $("#left").val();
    });
    
    jQuery.validator.addMethod("goRight", function(value, element) {
    
        return  value.toString() !== $("#down").val() && 
                value.toString() !== $("#up").val() &&
                value.toString() !== $("#left").val();
    });
    
    jQuery.validator.addMethod("goLeft", function(value, element) {
    
        return  value.toString() !== $("#down").val() && 
                value.toString() !== $("#right").val() &&
                value.toString() !== $("#up").val();
    });

   
    
$().ready(function(){

    $('#settingsForm').validate({
        errorElement: 'div',
        rules: {
            up:{
                required: true,
                goUp: true
            },
            down:{
                required: true,
                goDown: true
            },
            right: {
                required: true,
                goRight: true
            },
            left: {
                required: true,
                goLeft: true
            },
            Ball_5Point: {
                // checkColor: true
             },
             Ball_15Point: {
               // checkColor: true
            },
            Ball_25Point: {
                 //checkColor: true
                },
        },
        messages: {
           up: {
               required: "Click and Press key for move up",
               goUp: "This button is already selected for a different direction"
            },
            down: {
                required: "Click and Press key for move down",
                goDown: "This button is already selected for a different direction"
             },
            right: {
                required: "Click and Press key for move right",
                goRight: "This button is already selected for a different direction"
            },
            left: {
                required: "Click and Press key for move left",
                goLeft: "This button is already selected for a different direction"
            },
            Ball_5Point: {
                // checkColor: "For every type of ball choose a diffrent color"
             },
             Ball_15Point: {
               // checkColor: "For every type of ball choose a diffrent color"
            },
            Ball_25Point: {
               // checkColor: "For every type of ball choose a diffrent color"
            }
        },

        submitHandler: function (form, event) {
          
            gameMoveKeys[0] = $("#up").val();
            gameMoveKeys[1] = $("#down").val();
            gameMoveKeys[2] = $("#right").val();
            gameMoveKeys[3] = $("#left").val();
            
            ballsNumber = $("#ballsNumber").val();

            ballsColor[0] = $("#Ball_5Point").val();
            ballsColor[1] = $("#Ball_15Point").val();
            ballsColor[2] = $("#Ball_25Point").val();

            gameTimer = $("#gameTimer").val();

            monstersNumber = $("#monstersNumber").val();
            
            startGame();
            
        }
        
        

    });

});


/*random settings by buttom*/
function randomSettings(){

    $("#up")[0].value="ArrowUp";
    $("#down")[0].value="ArrowDown";
    $("#right")[0].value= "ArrowRight";
    $("#left")[0].value= "ArrowLeft";

    gameMoveKeys[0] = $("#up")[0].value;
    gameMoveKeys[1] = $("#down")[0].value;
    gameMoveKeys[2] = $("#right")[0].value;
    gameMoveKeys[3] = $("#left")[0].value;

    $("#Ball_5Point")[0].value=getRandomColor();
    $("#Ball_15Point")[0].value=getRandomColor();
    $("#Ball_25Point")[0].value=getRandomColor();

    ballsColor[0] = $("#Ball_5Point")[0].value;
    ballsColor[1] = $("#Ball_15Point")[0].value;
    ballsColor[2] = $("#Ball_25Point")[0].value;

    $("#ballsNumber")[0].value = getRandomNumber(50,90);
    ballsNumber = $("#ballsNumber")[0].value;

    $("#gameTimer")[0].value = getRandomNumber(60,159);
    gameTimer = $("#gameTimer")[0].value;

    $("#monstersNumber")[0].value = getRandomNumber(1,4);
    monstersNumber = $("#monstersNumber")[0].value ;

    //return false;
    
}


function getRandomNumber(min ,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
    let characters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += characters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function startGame(){

    Start();
    // $('#mainWindow').children().hide()
    // $('#logo').show()
    // $('#nav').show()
    // $('#gamePage').show()
    // $('#gameUser').text("Welcome "  + username + " !");
    // //$('#settingsBoard').show()
    // $('#footer').show() 

  }

  