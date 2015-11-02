'use strict';
$(document).ready(function(){
	$.ajax('https://reqres-api.herokuapp.com/api/users', {
		success: function(users) {
			_.each(users, function(user) {
			var str= '<li><a class="person" href="https://reqres-api.herokuapp.com/api/users/' + user['id'] + '">' + user['first_name'] + ' ' + user['last_name']+ '</li>'
			$('#people').append(str)
			}); 
			
			$('.person').on('click', function(event) {
				event.preventDefault();
				$.ajax($(this).attr('href'), {
					success: function (user) {
						var str = user['first_name'] + ' ' + user['last_name'];
						str += '<br><img src="' + user['avatar'] + '">'
 						$('#person-details').html(str);
					} 
				});
			});
		}
	});


});