'use strict';

$(document).ready(function() {
	var $lastChild = null;

	$('[data-stack]').on('click', function () { 
		if ($lastChild) {
			if (isLegal($lastChild, $(this))){
				$(this).append($lastChild); // append to data-stack
				checkForWin();
				$lastChild = null; // set lastchild to empty again
			} 	
		}  else { // otherwise
			$lastChild = $(this).children().last().detach() ; // take the last child and detach it
		}

	});

	function isLegal($lastChild, $stack) {
		if ( parseInt($stack.children().last().attr('data-block')) > parseInt($lastChild.attr('data-block')) || $stack.children().length === 0 ){	
			return true;
		} else {
			$('#not-allowed').html("<span>Move Not Allowed</span>");
			$('#not-allowed span').fadeOut('slow');
			return false;
		} 
	}

	function checkForWin() {
		if ( $('[data-stack="2"]').children().length === 4 || $('[data-stack="3"]').children().length === 4)  {
			$('#announce-game-won').text("You won!");
			return true;
		} else { 
			return false;
		}
	}

});
