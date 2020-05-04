
const keyCodes = {
    0: 'That key has no keycode',
    3: 'break',
    8: 'backspace / delete',
    9: 'tab',
    12: 'clear',
    13: 'enter',
    16: 'shift',
    17: 'ctrl',
    18: 'alt',
    19: 'pause/break',
    20: 'caps lock',
    21: 'hangul',
    25: 'hanja',
    27: 'escape',
    28: 'conversion',
    29: 'non-conversion',
    32: 'spacebar',
    33: 'page up',
    34: 'page down',
    35: 'end',
    36: 'home',
    37: 'left arrow',
    38: 'up arrow',
    39: 'right arrow',
    40: 'down arrow',
    41: 'select',
    42: 'print',
    43: 'execute',
    44: 'Print Screen',
    45: 'insert',
    46: 'delete',
    47: 'help',
    48: '0',
    49: '1',
    50: '2',
    51: '3',
    52: '4',
    53: '5',
    54: '6',
    55: '7',
    56: '8',
    57: '9',
    58: ':',
    60: '<',
    63: 'ß',
    65: 'a',
    66: 'b',
    67: 'c',
    68: 'd',
    69: 'e',
    70: 'f',
    71: 'g',
    72: 'h',
    73: 'i',
    74: 'j',
    75: 'k',
    76: 'l',
    77: 'm',
    78: 'n',
    79: 'o',
    80: 'p',
    81: 'q',
    82: 'r',
    83: 's',
    84: 't',
    85: 'u',
    86: 'v',
    87: 'w',
    88: 'x',
    89: 'y',
    90: 'z',
    96: 'numpad 0',
    97: 'numpad 1',
    98: 'numpad 2',
    99: 'numpad 3',
    100: 'numpad 4',
    101: 'numpad 5',
    102: 'numpad 6',
    103: 'numpad 7',
    104: 'numpad 8',
    105: 'numpad 9',
    106: 'multiply',
    112: 'f1',
    113: 'f2',
    114: 'f3',
    115: 'f4',
    116: 'f5',
    117: 'f6',
    118: 'f7',
    119: 'f8',
    120: 'f9',
    121: 'f10',
    122: 'f11',
    123: 'f12',
    124: 'f13',
    125: 'f14',
    126: 'f15',
    127: 'f16',
    128: 'f17',
    129: 'f18',
    130: 'f19',
    131: 'f20',
    132: 'f21',
    133: 'f22',
    134: 'f23',
    135: 'f24',
    136: 'f25',
    137: 'f26',
    138: 'f27',
    139: 'f28',
    140: 'f29',
    141: 'f30',
    142: 'f31',
    143: 'f32',
   
  };

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

    // jQuery.validator.addMethod("goLeft", function(value, element) {
    
    //     return  
    // });

   
    
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

    startNewGame();
    // $('#mainWindow').children().hide()
    // $('#logo').show()
    // $('#nav').show()
    // $('#gamePage').show()
    // $('#gameUser').text("Welcome "  + username + " !");
    // //$('#settingsBoard').show()
    // $('#footer').show() 

  }

  