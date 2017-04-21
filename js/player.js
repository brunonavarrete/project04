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