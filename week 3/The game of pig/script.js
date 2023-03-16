(function(){
               'use strict';

	const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const score = document.getElementById('score');
    const   actionArea = document.getElementById('actions');

    const gameData = {
            dice: ['1die.jpg','2die.jpg','3die.jpg','4die.jpg','5die.jpg','6die.jpg'],
            players: ['player 1','player2'],
            score: [0,0],
            roll1:0,
            roll2:0,
            rollSum:0,
            index:0,
            gameEnd:29

        };

        startGame.addEventListener('click',function () {
            gameData.index = Math.round (Math.random());

            gameControl.innerHTML = '<h2>The game has started</h2>';
            gameControl.innerHTML +='<button id="quit">Do you want to quit?</button>';
            document.getElementById('quit').addEventListener('click',function(){
                location.reload();
            });

            //console.log(gameData.index);
            setUpTurn();


        });

        function setUpTurn(){
            game.innerHTML = `<p>Roll the dice for player ${gameData.players[gameData.index]}</p>`;
            actionArea.innerHTML = '<button id="roll">Roll the dice!</button>';
            document.getElementById('roll').addEventListener('click',function(){
                throwDice();
            });


        }

        function throwDice(){
            actionArea.innerHTML = '';
            gameData.roll1 = Math.floor( Math.random()*6)+1;
            gameData.roll2 = Math.floor( Math.random()*6)+1;
            game.innerHTML =`<p>Roll the dice for player ${gameData.players[gameData.index]}</p>`;
            game.innerHTML += `<img src="${gameData.dice[gameData.roll1 -1]}"alt="die">`;
            game.innerHTML += `<img src="${gameData.dice[gameData.roll2 -1]}"alt="die">`;
            gameData.rollSum = gameData.roll1 + gameData.roll2;
            console.log(gameData.rollSum);


            if ( gameData.rollSum ===2){
                game.innerHTML += "<p>Oh snap, You got snake eyes!</p>";
                gameData.score[gameData.index] = 0;
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                showCurrentScore();
                setTimeout(setUpTurn, 2000);
            }

            else if( gameData.roll1 ===1 || gameData.roll2 ===1){ 
                gameData.index? (gameData.index=0):(gameData.index=1);
                game.innerHTML += `<p>You rolled a 1, switching to ${gameData.players[gameData.index]}</p>`;
                setTimeout(setUpTurn, 2000);

            }

            else{
                gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
                actionArea.innerHTML = '<button id="rollagain">Roll Again</button> or <button id="pass">Pass</button>';
                document.getElementById('rollagain').addEventListener('click',function(){
                    throwDice();
                });

                document.getElementById('pass').addEventListener('click',function(){
                    gameData.index? (gameData.index=0):(gameData.index=1);
                    setUpTurn();
                });

                checkWinningCondition();
            }
        }

        function checkWinningCondition(){
            if (gameData.score[gameData.index] > gameData.gameEnd){
                score.innerHTML = `<h2> ${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;
                actionArea.innerHTML = '';
                document.getElementById('quit').innerHTML = 'Start a New Game?';
            }

            else{
                showCurrentScore();
            }
        }

        function showCurrentScore (){
            score.innerHTML = `<p>the score for <strong> ${gameData.players[0]} is ${gameData.score[0]} </strong> and the score for <strong> ${gameData.players[1]} is ${gameData.score[1]}</strong></p>`;
        }
    
})();