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