!(function(){
	// game.js
		function Game(players){
			this.players = players;
			this.start = function(){ // sets original values
				this.players[0].boxes = [];
				this.players[1].boxes = [];
				this.winner = 0;
				this.currentPlayer = this.players[0];
				this.boxes = [0,1,2,3,4,5,6,7,8];
				this.usedBoxes = [];
				$('body').html('<div class="board" id="board"><header><h1>Tic Tac Toe</h1><ul><li class="players active" id="player1"><small>'+this.players[0].name+'</small><svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-200.000000, -60.000000)" fill="#000000"><g transform="translate(200.000000, 60.000000)"><path d="M21 36.6L21 36.6C29.6 36.6 36.6 29.6 36.6 21 36.6 12.4 29.6 5.4 21 5.4 12.4 5.4 5.4 12.4 5.4 21 5.4 29.6 12.4 36.6 21 36.6L21 36.6ZM21 42L21 42C9.4 42 0 32.6 0 21 0 9.4 9.4 0 21 0 32.6 0 42 9.4 42 21 42 32.6 32.6 42 21 42L21 42Z"/></g></g></g></svg></li><li class="players" id="player2"><small>'+this.players[1].name+'</small><svg xmlns="http://www.w3.org/2000/svg" width="42" height="43" viewBox="0 0 42 43" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-718.000000, -60.000000)" fill="#000000"><g transform="translate(739.500000, 81.500000) rotate(-45.000000) translate(-739.500000, -81.500000) translate(712.000000, 54.000000)"><path d="M30 30.1L30 52.5C30 53.6 29.1 54.5 28 54.5L25.5 54.5C24.4 54.5 23.5 53.6 23.5 52.5L23.5 30.1 2 30.1C0.9 30.1 0 29.2 0 28.1L0 25.6C0 24.5 0.9 23.6 2 23.6L23.5 23.6 23.5 2.1C23.5 1 24.4 0.1 25.5 0.1L28 0.1C29.1 0.1 30 1 30 2.1L30 23.6 52.4 23.6C53.5 23.6 54.4 24.5 54.4 25.6L54.4 28.1C54.4 29.2 53.5 30.1 52.4 30.1L30 30.1Z"/></g></g></g></svg></li></ul></header><ul class="boxes"><li class="box"></li><li class="box"></li><li class="box"></li><li class="box"></li><li class="box"></li><li class="box"></li><li class="box"></li><li class="box"></li> <li class="box"></li></ul></div>');
			};
			this.end = function(outcome){ // render victory screen
				$('body').html('<div class="screen screen-win" id="finish"><header><h1>Tic Tac Toe</h1><p class="message"></p><a href="#" class="button">New game</a></header></div>');
				if( outcome === this.players[0].name ) {
					$('.screen').addClass('screen-win-one');
					$('.screen p').html( '<small>' + this.players[0].name + '</small> wins!' );
				} else if( outcome === this.players[1].name ) {
					$('.screen').addClass('screen-win-two');
					$('.screen p').html( '<small>' + this.players[1].name + '</small> wins!' );
				} else {
					$('.screen').addClass('screen-win-tie');
					$('.screen p').text('It\'s a tie!');
				}
			};
		}

	// player.js
		function Player(name){ // Player constructor
			this.name = name;
			this.boxes = [];
		}

		Player.prototype.choose = function(boxIndex){ // Player choose prototype
			// push clicked box into game.usedBoxes to know if there are any left	
				game.usedBoxes.push(boxIndex);
			// remove clicked box from game.boxes to give computer empty options to choose from
				var index = game.boxes.indexOf(boxIndex);
				(index >= 0) ? game.boxes.splice(index,1) : 0;
				console.log(game.boxes);
			// check for three in a row on .click()
				switch( boxIndex ){
					case 0:
						if( (this.boxes.indexOf(1) >= 0 && this.boxes.indexOf(2) >= 0) ||
							(this.boxes.indexOf(3) >= 0 && this.boxes.indexOf(6) >= 0) ||
							(this.boxes.indexOf(4) >= 0 && this.boxes.indexOf(8) >= 0) ){
							game.winner = this.name;
						}
						break;
					case 1:
						if( (this.boxes.indexOf(0) >= 0 && this.boxes.indexOf(2) >= 0) ||
							(this.boxes.indexOf(4) >= 0 && this.boxes.indexOf(7) >= 0) ){
							game.winner = this.name;
						}
						break;
					case 2:
						if( (this.boxes.indexOf(0) >= 0 && this.boxes.indexOf(1) >= 0) ||
							(this.boxes.indexOf(4) >= 0 && this.boxes.indexOf(6) >= 0) ||
							(this.boxes.indexOf(5) >= 0 && this.boxes.indexOf(8) >= 0) ){
							game.winner = this.name;
						}
						break;
					case 3:
						if( (this.boxes.indexOf(0) >= 0 && this.boxes.indexOf(6) >= 0) ||
							(this.boxes.indexOf(4) >= 0 && this.boxes.indexOf(5) >= 0) ){
							game.winner = this.name;
						}
						break;
					case 4:
						if( (this.boxes.indexOf(0) >= 0 && this.boxes.indexOf(8) >= 0) ||
							(this.boxes.indexOf(1) >= 0 && this.boxes.indexOf(7) >= 0) ||
							(this.boxes.indexOf(2) >= 0 && this.boxes.indexOf(6) >= 0) ||
							(this.boxes.indexOf(3) >= 0 && this.boxes.indexOf(5) >= 0) ){
							game.winner = this.name;
						}
						break;
					case 5:
						if( (this.boxes.indexOf(2) >= 0 && this.boxes.indexOf(8) >= 0) ||
							(this.boxes.indexOf(3) >= 0 && this.boxes.indexOf(4) >= 0) ){
							game.winner = this.name;
						}
						break;
					case 6:
						if( (this.boxes.indexOf(0) >= 0 && this.boxes.indexOf(3) >= 0) ||
							(this.boxes.indexOf(2) >= 0 && this.boxes.indexOf(4) >= 0) ||
							(this.boxes.indexOf(7) >= 0 && this.boxes.indexOf(8) >= 0) ){
							game.winner = this.name;
						}
						break;
					case 7:
						if( (this.boxes.indexOf(1) >= 0 && this.boxes.indexOf(4) >= 0) ||
							(this.boxes.indexOf(6) >= 0 && this.boxes.indexOf(8) >= 0) ){
							game.winner = this.name;
						}
						break;
					case 8:
						if( (this.boxes.indexOf(0) >= 0 && this.boxes.indexOf(4) >= 0) ||
							(this.boxes.indexOf(2) >= 0 && this.boxes.indexOf(5) >= 0) ||
							(this.boxes.indexOf(6) >= 0 && this.boxes.indexOf(7) >= 0) ){
							game.winner = this.name;
						}
						break;
				}
			// check game new state
				if( game.winner === 0 && game.usedBoxes.length < 9 ) { // no winner + free boxes
					// push choice to current player's boxes[]
						if( game.currentPlayer.name === game.players[0].name ){ // player1
							game.players[0].boxes.push( boxIndex );
							$('li.box').eq(boxIndex).addClass('box-filled-1');
							// if playing vs computer
								if( game.players[1].name === 'notSoBrightPlayer' ){
									setTimeout(function(){
										var item = game.boxes[Math.floor(Math.random()*game.boxes.length)];
										game.players[1].choose(item);
									},300);
								}
						} else { // player2
							game.players[1].boxes.push( boxIndex );
							$('li.box').eq(boxIndex).addClass('box-filled-2');
						}
					// change currentPlayer
						game.currentPlayer = ( game.currentPlayer.name === game.players[0].name ) ? game.players[1] : game.players[0];
						$('li.players').toggleClass('active');
				} else if( game.winner === 0 ) { // no winner + all boxes occupied
					game.end( game.draw );
				} else { // winner
					game.end( game.winner );
				}
		}

	// ui.js
		// render start.txt
			$('body').html('<div class="screen screen-start" id="start"><header><h1>Tic Tac Toe</h1><div class="inputs"><p>Enter players\' names:</p><input id="name1" type="text" value="Player 1"><input id="name2" type="text" placeholder="Player 2 (computer if empty)"></div><a href="#" class="button start">Start game</a></header></div>');
		// buttons' click
			$(document).on('click','a.button',function(){
				// if is start button, set player's names
					if( $(this).is('.start') ){
						var playerOneName = ($('#name1').val().length) ? $('#name1').val() : 'Player 1';
						var playerTwoName = ($('#name2').val().length) ? $('#name2').val() : 'notSoBrightPlayer';
						game.players[0].name = playerOneName;
						game.players[1].name = playerTwoName;
					}
				// start game
					game.start();
			});

	// app.js
		var game = new Game( [new Player('player1'), new Player('player2')] );
		// click box
			$(document).on('click','li.box',function(){
				var isFilled = $(this).attr('class').indexOf('filled');
				// check if box isFilled and is not computer's turn
					if( isFilled < 0 && game.currentPlayer.name !== 'notSoBrightPlayer' ){
						var currentPlayerName = game.currentPlayer.name;
						var boxIndex = $(this).index();
						game.currentPlayer.choose( boxIndex );
					}
			});

		// hover box
			$(document).on('mouseover','li.box',function(){
				var isFilled = $(this).attr('class').indexOf('filled');
				// check if box isFilled and is not computer's turn
					if( isFilled < 0 && game.currentPlayer.name !== 'notSoBrightPlayer' ){
						var currentPlayerName = game.currentPlayer.name;
						( currentPlayerName === game.players[0].name ) ? $(this).toggleClass('box-hover-1') : $(this).toggleClass('box-hover-2');
					}
			});
			$(document).on('mouseout','li.box',function(){
				var isFilled = $(this).attr('class').indexOf('filled');
				// check if box isFilled and is not computer's turn
					if( isFilled < 0 && game.currentPlayer.name !== 'notSoBrightPlayer' ){
						var currentPlayerName = game.currentPlayer.name;
						( currentPlayerName === game.players[0].name ) ? $(this).toggleClass('box-hover-1') : $(this).toggleClass('box-hover-2');
					}
			});
})();