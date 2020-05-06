        // consts
        const pac_down = [0.65, 2.35, 5, -15]
        const pac_up = [1.65, 3.35, -5, 15]
        const pac_left = [1.15, 2.85, -5, -15]
        const pac_right = [0.15, 1.85, 5, -15]
        const BLANK = 0;
        const PACMAN = 2;
        const FIVE_POINT = 5;
        const TEN_POINT = 10;
        const FIFTEEN_POINT = 15;
        const TWENTYFIVE_POINT = 25;
        // const SPECIAL_FOOD = 50;
        const WALL = 4;
        // const GHOST_BOSS = 6;
        const GHOST = 7;
        const canvas_width = 12;
        const canvas_height = 12;
        const PLUS = 1;
        const TIME = 3;



        // Const
        const UP_DIRECTION = 1;
        const DOWN_DIRECTION = 2;
        const LEFT_DIRECTION = 3;
        const RIGHT_DIRECTION = 4;


        var context
        var shape = new Object();
        var board;
        var score = 0;
        var pac_color;
        var start_time;
        var time_elapsed;
        var interval;
        var pac_direction = pac_right;
        var init_start = true; // התחלת משחק חדש
        var interval_counter = 0;
        var set_plus; //init plus food
        var set_time;//init time food

		var lives = 5;
		var winGame=false;
		var audio;
		var loseToghosts=false;

        var food_remain = 90; // כמות כדורים

        var ghosts_remain = 4; // כמות מפלצות
   
        var game_time = 10; // זמן משחק משתמש

        //Ghost
        let ghosts = new Array();

		//settings
		var gameMoveKeys =[];
		var ballsNumber=50;
		var ballsColor = ["#55aecc" , "#d275d5", "#43e45b"];
		var gameTimer=60;
		var monstersNumber=1;
		var pacmanSong;

		function resetGame(){
            window.clearInterval(interval);
            interval_counter = 0;
            lives = 5;
            food_remain = ballsNumber;
            game_time= gameTimer;
            start_time =  new Date();
            score = 0;
            init_start=true;
            ghosts = new Array();
            context = canvas.getContext("2d");
			ghosts_remain = monstersNumber;
			
			
            $("#pacmanSong").get(0).pause();
            document.getElementById("pacmanSong").muted=true;
            $("#pacmanDeathSong").get(0).pause();
            document.getElementById("pacmanDeathSong").muted=true;
        }

        function restartGame(){
           // $("#myModal").modal('hide');
           $.modal.close();
            startNewGame();
        }
        

		function startNewGame(){
           // $("#myModal").modal('hide');
            resetGame();
			Start();
			playAudio();
		}
		
		function playAudio(){
			audio = $("#pacmanSong").get(0);
			audio1 = $("#pacmanDeathSong").get(0);
			if(audio.paused){
				audio.play();
            }
            if(audio1.paused){
                audio1.play()
            }
			
			
		}

		function gameBoard(){
			$('#mainWindow').children().hide();
			$('#logo').show();
			$('#nav').show();
			setSettingsBoard();
			$('#gameUser').text("Welcome "  + username + " !");
			$('#gamePage').show()
			$('#footer').show() 
		}

		function setSettingsBoard(){
			lblScore.value = score;
			lblTime.value =  Math.floor(game_time- time_elapsed);
			lblLive.value = lives;
			ballsNumber_settingsBoard.value = ballsNumber;
			gameTimer_settingsBoard.value = gameTimer;
			monstersNumber_settingsBoard.value = monstersNumber;
            up_settingsBoard.value = $("#up")[0].value;
            down_settingsBoard.value = $("#down")[0].value;
            right_settingsBoard.value = $("#right")[0].value;
            left_settingsBoard.value = $("#left")[0].value;
            Ball_5Point_settingsBoard.value = ballsColor[0];
            Ball_15Point_settingsBoard.value = ballsColor[1];
            Ball_25Point_settingsBoard.value = ballsColor[2];
        }

		window.addEventListener("keydown", function(e) {
			if([gameMoveKeys[0], gameMoveKeys[1],gameMoveKeys[3] , gameMoveKeys[2]].indexOf(e.keyCode) > -1) {
				e.preventDefault();
			}
		}, false);

        $(document).ready(function () {
			context = canvas.getContext("2d");
            //Start();
            
		});

        // intialize the board 
        function Start() {
            console.log(gameMoveKeys[0]+","+gameMoveKeys[1]+","+gameMoveKeys[2]+","+gameMoveKeys[3])
			gameBoard();
			//pacmanSong  = document.getElementById("pacmanSong").muted=false;
			document.getElementById("pacmanSong").muted=false;
            board = new Array();
            pac_color = "purple";
            var cnt = 100; // אפשרות להגדיר אחוזים מסויימים
            let five_point_remain = Math.round(food_remain * 0.60)
            let fifteen_point_remain = Math.round(food_remain * 0.30)
            let twnteeyfive_point_remain = Math.round(food_remain * 0.15)
            set_plus = true;
            set_time = true;
            setBoard(board);
            setPlusLive();
            setTimeAdder();
            setFood(board, five_point_remain, fifteen_point_remain, twnteeyfive_point_remain);
            if (init_start == true) { // לטיפול במשחק חדש
                start_time = new Date(); // כמה זמן נשאר במשחק
                setGhosts();
                keysDown = {};
                addEventListener(
                    "keydown",
                    function (e) {
                        keysDown[e.keyCode] = true;
                    },
                    false
                );
                addEventListener(
                    "keyup",
                    function (e) {
                        keysDown[e.keyCode] = false;
                    },
                    false
                );
                init_start = false;
            }
            else {
                resetGhosts();
            }
            interval = setInterval(UpdatePosition, 200);

        }


        function setBoard(board) {
            for (var i = 0; i < 12; i++) {
                board[i] = new Array();
                //put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
                for (var j = 0; j < 12; j++) {
                    if (//Walls
                         (i == 3 && j == 3) ||
                         (i == 3 && j == 4) ||
                         (i == 3 && j == 5) ||
                         (i == 6 && j == 1) ||
                         (i == 6 && j == 2)
                        
                    ) {
                        board[i][j] = WALL;
                    }
                    else if (//Ghost
                         (i == 0 && j == 0) ||
                         (i == 11 && j == 11) ||
                         (i == 11 && j == 0) ||
                         (i == 0 && j == 11)
                        
                    ) {
                        continue;
                    }
                    else if (i == 4 && j == 5 && init_start == true) {
                        shape.i = i;
                        shape.j = j;
                        board[i][j] = PACMAN;
                    }
                    else {
                        board[i][j] = BLANK;
                    }
                }

            }
        }

        function setPlusLive() {
            let emptyCell = findRandomEmptyCell(board);
            board[emptyCell[0]][emptyCell[1]] = PLUS;
        }

        function setTimeAdder() {
            let emptyCell = findRandomEmptyCell(board);
            board[emptyCell[0]][emptyCell[1]] = TIME;
        }

        function setFood(board, five_point_remain, fifteen_point_remain, twnteeyfive_point_remain) {
            while (five_point_remain > 0) {
                let emptyCell = findRandomEmptyCell(board);
                board[emptyCell[0]][emptyCell[1]] = FIVE_POINT;
                five_point_remain--;

            }
            while (fifteen_point_remain > 0) {
                let emptyCell = findRandomEmptyCell(board);
                board[emptyCell[0]][emptyCell[1]] = FIFTEEN_POINT;
                fifteen_point_remain--;

            }
            while (twnteeyfive_point_remain > 0) {
                let emptyCell = findRandomEmptyCell(board);
                board[emptyCell[0]][emptyCell[1]] = TWENTYFIVE_POINT;
                twnteeyfive_point_remain--;
            }
        }

        function findRandomEmptyCell(board) {
            var i = Math.floor(Math.random() * 12);
            var j = Math.floor(Math.random() * 12);
            while (board[i][j] != BLANK) {
                i = Math.floor(Math.random() * 12);
                j = Math.floor(Math.random() * 12);
            }
            return [i, j];
        }

        function GetKeyPressed() {
            if (keysDown[gameMoveKeys[0]]) { //up
                pac_direction = pac_up
                return 1;
            }
            if (keysDown[gameMoveKeys[1]]) { //down
                pac_direction = pac_down
                return 2;
            }
            if (keysDown[gameMoveKeys[3]]) { //left
                pac_direction = pac_left
                return 3;
            }
            if (keysDown[gameMoveKeys[2]]) { //right
                pac_direction = pac_right
                return 4;
            }
        }

        function Draw() {
            canvas.width = canvas.width; //clean board
            lblScore.value = score;
            lblTime.value =  Math.floor(game_time- time_elapsed);
            lblLive.value = lives;
            for (var i = 0; i < 12; i++) {
                for (var j = 0; j < 12; j++) {
                    var center = new Object();
                    center.x = i * 50 + 25;
                    center.y = j * 50 + 25;
                    if (board[i][j] == PACMAN) {
                        context.beginPath();
                        context.arc(center.x, center.y, 20, pac_direction[0] * Math.PI, pac_direction[1] * Math.PI); // half circle
                        context.lineTo(center.x, center.y);
                        context.fillStyle = pac_color; //color
                        context.fill();
                        context.beginPath();
                        context.arc(center.x + pac_direction[2], center.y + pac_direction[3], 3, 0, 2 * Math.PI); // circle
                        context.fillStyle = "black"; //color
                        context.fill();
                    } else if (board[i][j] == FIVE_POINT) {
                        context.beginPath();
                        context.arc(center.x, center.y, 5, 0, 2 * Math.PI); // circle
                        context.fillStyle = ballsColor[0]; //color
                        context.fill();
                    } else if (board[i][j] == FIFTEEN_POINT) {
                        context.beginPath();
                        context.arc(center.x, center.y, 10, 0, 2 * Math.PI); // circle
                        context.fillStyle = ballsColor[1]; //color
                        context.fill();
                    } else if (board[i][j] == TWENTYFIVE_POINT) {
                        context.beginPath();
                        context.arc(center.x, center.y, 13, 0, 2 * Math.PI); // circle
                        context.fillStyle = ballsColor[2]; //color
                        context.fill();
                    } else if (board[i][j] == WALL) {
                        context.beginPath();
                        context.rect(center.x - 30, center.y - 30, 60, 60);
                        context.fillStyle = "grey"; //color
                        context.fill();
                    } else if (board[i][j] == GHOST) {
                        var img = document.getElementById("imgMonster");
						context.drawImage(img,center.x-20, center.y-20, 40,40);
                    } else if (board[i][j] == PLUS) {
                        var img = document.getElementById("imgPlus");
						context.drawImage(img,center.x-20, center.y-20, 40,40);
                    } else if (board[i][j] == TIME) {
                        var img = document.getElementById("imgTime");
						context.drawImage(img,center.x-20, center.y-20, 40,40);
					}
					
					
					
                }
            }
        }
        function UpdatePosition() {
            interval_counter++;
            var x = GetKeyPressed();
            board[shape.i][shape.j] = BLANK;
            if (x == 1) {
                if (shape.j > 0 && board[shape.i][shape.j - 1] != WALL) {
                    shape.j--;
                }
            }
            if (x == 2) {
                if (shape.j < 11 && board[shape.i][shape.j + 1] != WALL) {
                    shape.j++;
                }
            }
            if (x == 3) {
                if (shape.i > 0 && board[shape.i - 1][shape.j] != WALL) {
                    shape.i--;
                }
            }
            if (x == 4) {
                if (shape.i < 11 && board[shape.i + 1][shape.j] != WALL) {
                    shape.i++;
                }
            }
            if (board[shape.i][shape.j] == FIVE_POINT) {
                score += 5;
            }
            if (board[shape.i][shape.j] == FIFTEEN_POINT) {
                score += 15;
            }
            if (board[shape.i][shape.j] == TWENTYFIVE_POINT) {
                score += 25;
            }
            if (interval_counter % 2 === 0) {
                ghosts.forEach(ghost => moveEachGhost(ghost));
            }
            console.log(lives);
            caughtByGhost();
            if (set_plus && board[shape.i][shape.j] == PLUS) {
                console.log("Caught life");
                caughtPlus();
                
            }
            if (set_time && board[shape.i][shape.j] == TIME) {
                console.log("got");
                caughTime();
            }
            board[shape.i][shape.j] = PACMAN;
            var currentTime = new Date();
            time_elapsed = (currentTime - start_time) / 1000;
            if (time_elapsed >= game_time) {
                if (score >= 100) {
					pac_color = "green";
					winGame=true;
                } else {
                    pac_color = "red";
                }
                game_over = true;
                Draw();
                gameOver();

            } else {
                Draw();
            }
        }

        function caughtPlus() {
            set_plus = false;
            lives = lives+1;
            console.log("Caught life " + lives)
        }
        function caughTime() {
            set_time = false;
            console.log("Current time " + Math.floor(game_time- time_elapsed))
            //game_time += 10;
            console.log(game_time);
            game_time =parseInt(game_time) + parseInt(10);
            console.log(game_time);
            console.log("Caught time " + Math.floor(game_time- time_elapsed))
        }
        function gameOver() {
			//pacmanSong  = document.getElementById("pacmanSong").muted=true;
			document.getElementById("pacmanSong").muted=true;
			//pacmanSong.pause();
			//window.alert("you lost");
			resetGame();
            //window.clearInterval(interval);
            //interval_counter = 0;
            //ghosts.length = 0 // לבדוק
			//endGame();
			
			//show button
			$('#mainWindow').children().hide();
    		$('#logo').show();
    		$('#nav').show();
			//$('#newGame').show();
			//$('#endGame').show();
			$('#footer').show();
			console.log(winGame);
			if(winGame){
                $("#modal_win").modal('show');
                $('.scoreUser').text( "You'r score "+ lblScore.value + " !");
				// $('#loseGameGhosts').hide();
				// $('#loseGameScore').hide();				
				// $('#winGame').show();
				
			}else if(loseToghosts){
                $("#modal_loseGhosts").modal('show');
                $('.scoreUser').text( "You'r score "+ lblScore.value );
                $("#pacmanDeathSong").get(0).play();
                document.getElementById("pacmanDeathSong").muted=false;
				// $('#winGame').hide();
				// $('#loseGameScore').hide();				
				// $('#loseGameGhosts').show();
				
				//לא נפסל 5 פעמים ולא צבר יותר מ 100 נקודות
			}else{ 
                $("#modal_loseScore").modal('show');
                $('.scoreUser').text( "You are better than "+ lblScore.value + " points!");
                $("#pacmanDeathSong").get(0).play();
                document.getElementById("pacmanDeathSong").muted=false;
				// $('#winGame').hide();
				// $('#loseGameGhosts').hide();
				// $('#loseGameScore').show();
				
			}
			winGame=false;
            loseToghosts=false;
            $("#pacmanDeathSong").get(0).pause();
    		
        }

        function endGame() {
            //create your shape data in a Path2D object
            const path = new Path2D()
            path.rect(250, 350, 200, 100)
            path.rect(25, 72, 32, 32)
            path.closePath()

            //draw your shape data to the context
            context.fillStyle = "#FFFFFF"
            context.fillStyle = "rgba(225,225,225,0.5)"
            context.fill(path)
            context.lineWidth = 2
            context.strokeStyle = "#000000"
            context.stroke(path)

            function getXY(canvas, event) { //adjust mouse click to canvas coordinates
                const rect = canvas.getBoundingClientRect()
                const y = event.clientY - rect.top
                const x = event.clientX - rect.left
                return { x: x, y: y }
            }

            document.addEventListener("click", function (e) {
                const XY = getXY(canvas, e)
                //use the shape data to determine if there is a collision
                if (context.isPointInPath(path, XY.x, XY.y)) {
                    // Do Something with the click
                    alert("clicked in rectangle")
                }
            }, false)
        }


        // Ghost object בתאכלס
        function Ghost(x, y) {
            this.x = x;
            this.y = y;
            this.food_place;
        }


        function setGhosts() {
            let num_ghosts = ghosts_remain;
            let ghost;
            board[0][0] = GHOST;
            ghost = new Ghost(0, 0);
            ghosts.push(ghost);
            if (num_ghosts > 1) {
                board[0][canvas_height - 1] = GHOST;
                ghost = new Ghost(0, canvas_height - 1, null);
                ghosts.push(ghost)
                if (num_ghosts > 2) {
                    board[canvas_width - 1][0] = GHOST;
                    ghost = new Ghost(canvas_width - 1, 0, null);
                    ghosts.push(ghost)
                }
                if (num_ghosts > 3) {
                    board[canvas_width - 1][canvas_height - 1] = GHOST;
                    ghost = new Ghost(canvas_width - 1, canvas_height - 1, null);
                    ghosts.push(ghost)
                }
            }
        }

        function shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        }


        function resetGhosts() {
            let ghostPlace = [1, 2, 3, 4];
            ghostPlace = shuffleArray(ghostPlace);
            ghosts.forEach(function (ghost) {
                board[ghost.x][ghost.y] = 0;
                let number = ghostPlace.pop();
                if (number === 1) {
                    board[0][0] = GHOST;
                    ghost.x = 0;
                    ghost.y = 0;
                } else if (number === 2) {
                    board[0][canvas_height - 1] = GHOST;
                    ghost.x = 0;
                    ghost.y = canvas_height - 1;
                } else if (number === 3) {
                    board[canvas_width - 1][0] = GHOST;
                    ghost.x = canvas_width - 1;
                    ghost.y = 0;
                } else {
                    board[canvas_width - 1][canvas_height - 1] = GHOST;
                    ghost.x = canvas_width - 1;
                    ghost.y = canvas_height - 1;
                }
            })
        }


        function caughtByGhost() {
            if (board[shape.i][shape.j] === GHOST) {
                score -= 10;
                lives--;
                if (lives === 0) {
					pac_color = "red";
					loseToghosts=true;
                    gameOver();
                } else {
                    // mySound.stop();
                    // let ghost = new sound("resources/ghost.mp3");
                    // ghost.play();
                    // mySound.play();
                    window.clearInterval(interval);
                    Start();
                    // resetMovingScore();
                    var emptyCell = findRandomEmptyCell(board);
                    shape.i = emptyCell[0];
                    shape.j = emptyCell[1];
                }
            }
        }

        function calculateDistance(x1, y1, x2, y2) {
            return Math.sqrt((Math.pow(x1 - x2, 2)) + Math.pow(y1 - y2, 2));
        }

        // ghosts movment
        function moveEachGhost(ghost) {
            let maxDistance = Infinity;
            let currDistance;
            let dir = false;
            if (ghost.x < (canvas_width - 1) && board[ghost.x + 1][ghost.y] != WALL
                && board[ghost.x + 1][ghost.y] != GHOST) {
                currDistance = calculateDistance(ghost.x + 1, ghost.y, shape.i, shape.j);
                if (currDistance < maxDistance) {
                    dir = RIGHT_DIRECTION;
                    maxDistance = currDistance;
                }
            }

            //Left
            if (ghost.x > 0 && board[ghost.x - 1][ghost.y] != WALL
                && board[ghost.x - 1][ghost.y] != GHOST) {
                currDistance = calculateDistance(ghost.x - 1, ghost.y, shape.i, shape.j);
                if (currDistance < maxDistance) {
                    dir = LEFT_DIRECTION;
                    maxDistance = currDistance;
                }
            }
            //Up
            if (ghost.y > 0 && board[ghost.x][ghost.y - 1] != WALL
                && board[ghost.x][ghost.y - 1] != GHOST) {
                currDistance = calculateDistance(ghost.x, ghost.y - 1, shape.i, shape.j);
                if (currDistance < maxDistance) {
                    dir = UP_DIRECTION;
                    maxDistance = currDistance;
                }

            }
            //Down
            if (ghost.y < (canvas_height - 1) && board[ghost.x][ghost.y + 1] != WALL
                && board[ghost.x][ghost.y + 1] != GHOST) {
                currDistance = calculateDistance(ghost.x, ghost.y + 1, shape.i, shape.j);
                if (currDistance < maxDistance) {
                    dir = DOWN_DIRECTION;
                    maxDistance = currDistance;
                }
            }


            if (ghost.food_place !== null) {
                board[ghost.x][ghost.y] = ghost.food_place;

            }

            //Move
            if (dir === UP_DIRECTION) {
                ghost.y -= 1;
            } else if (dir === DOWN_DIRECTION) {
                ghost.y += 1;
            } else if (dir === LEFT_DIRECTION) {
                ghost.x -= 1;
            } else if (dir === RIGHT_DIRECTION) {
                ghost.x += 1;
            }

            if (board[ghost.x][ghost.y] == FIVE_POINT
                || board[ghost.x][ghost.y] == FIFTEEN_POINT
                || board[ghost.x][ghost.y] == TWENTYFIVE_POINT
                || board[ghost.x][ghost.y] == PLUS
                || board[ghost.x][ghost.y] == TIME) {
                ghost.food_place = board[ghost.x][ghost.y];
            }
            else {
                ghost.food_place = BLANK;
            }

            board[ghost.x][ghost.y] = GHOST;
        }

