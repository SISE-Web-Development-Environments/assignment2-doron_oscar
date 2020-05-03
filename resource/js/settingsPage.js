

function gameControlers(event, id) {

    //var eventKey = event.key;
	if (id === "up") {
        document.getElementById("up").innerHTML = event.key;
        console.log(event.key)

        document.getElementById("up").value = event.code;
	}
	else if (id === "down") {
		document.getElementById("down").innerHTML = event.key;

        document.getElementById("down").value = event.code;

	}
	else if (id === "right") {
		document.getElementById("right").innerHTML = event.key;

        document.getElementById("right").value = event.code;

	}
	else if (id === "left") {
        document.getElementById("left").innerHTML = event.key;
        document.getElementById("left").value = event.code;

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

/////////////////////////////////////////////////////////////////////////////////
    jQuery.validator.addMethod("checkColor", function (value, element) {

        console.log(value.toString())
        return value.toString() !== $("#Ball_5Point").val()
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
                 required: true,
                 checkColor: true
             },
             Ball_15Point: {
                required: true,
                checkColor: true
            },
            Ball_25Point: {
                 required: true,
                 checkColor: true
                }
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
                 required: "Pleasr enter a birthday",
                 checkValidDate: "For every type of ball choose a diffrent color"
             },
             Ball_15Point: {
                required: "Pleasr enter a birthday",
                checkValidDate: "For every type of ball choose a diffrent color"
            },
            Ball_25Point: {
                required: "Pleasr enter a birthday",
                checkValidDate: "For every type of ball choose a diffrent color"
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

            gameTimer = $("#timeOfGame").val();

            monstersNumber = $("#numberOfMonsters").val();
           
        }

    });

})
    
//})

/*random settings by buttom*/
function randomSettings(){

    // document.getElementById("up").innerHTML ="ArrowUp";
    // document.getElementById("down").innerHTML ="ArrowDown";
    // document.getElementById("right").innerHTML ="ArrowRight";
    // document.getElementById("left").innerHTML ="ArrowLeft";

     $("#up").value="ArrowUp";
     $("#down").value="ArrowDown";
     $("#right").value= "ArrowRight";
     $("#left").value= "ArrowLeft";

    gameMoveKeys[0] = $("#up").val();
    gameMoveKeys[1] = $("#down").val();
    gameMoveKeys[2] = $("#right").val();
    gameMoveKeys[3] = $("#left").val();

    $("#Ball_5Point").value=getRandomColor();
    $("#Ball_15Point").value=getRandomColor();
    $("#Ball_25Point").value=getRandomColor();

    ballsNumber = randomNumberOfBalls();

    ballsColor[0] = $("#Ball_5Point").val();
    ballsColor[1] = $("#Ball_15Point").val();
    ballsColor[2] = $("#Ball_25Point").val();

    gameTimer = 60 + Math.floor((Math.random() * 100));

    monstersNumber = randonNumberOfMonsters();
    
}




