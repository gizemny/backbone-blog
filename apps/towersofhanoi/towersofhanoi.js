$(document).ready(function() {
		var $lastChild = null;

	$('[data-stack]').on('click', function () { 

		// console.log( $(this).attr('data-stack') ); get the attribute of the stack
		if ($lastChild) { // if empty
			$(this).append($lastChild); // take it and append to data-stack
			$lastChild = null; // set lastchild to empty again
		} else { // otherwise
			$lastChild = $(this).children().last().detach() ; // take the last child and detach it
		}
		isLegal();
		checkForWin();
	});
//turn data to 
	// ParseInt('100') > '50'
});

function isLegal($stack) {
	($('[data-stack]').children().last().attr('[data-block]') > $lastChild.attr('[data-block]') || !$stack.children().length === 0);
}
function checkForWin() {
if ($('[data-stack]') === 4) {
	console.log('Congrats! Game Won!');
	return true;
}
return false;
}