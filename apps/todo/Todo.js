'use strict';

$(document).ready(function() {
	 $('#content').on('submit', function(event){
	 	event.preventDefault();
	 	var entry = $(this).find('input[type="text"]').val();
	 	$('#todo-list').append(
	 		'<li class="list-item">' +entry+ '</li>'
	 	);
	});

	$('#todo-list').on('mouseenter','> li', function(event) {
	   $(this).addClass('done');
	}).on('mouseleave', '> li', function(event) {
	   $(this).removeClass('done');
	});

    $('ul').on('click', 'li', function() {
		$(this).fadeOut(700, function() {
        	$(this).remove();
   		 	});
    });

 $('#todo-list').sortable();
});