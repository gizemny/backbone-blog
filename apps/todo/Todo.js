'use strict';

$(document).ready(function() {
	 $('#content').on('submit', function(event){
	 	event.preventDefault();
	 	var entry = $(this).find('input[type="text"]').val();
	 	$('#todo-list').append(
	 		'<li class="list-item">'+entry+'</li>'
	 		);
	});

    $('ul').on('click', 'li', function() {
        $(this).remove();
    });

 $('#todo-list').sortable();
});