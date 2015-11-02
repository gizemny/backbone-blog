'use strict';
$(document).ready(function(){
	// $.ajax('https://reqres-api.herokuapp.com/api/users', {
	// 	success: function(users) {
	// 		_.each(users, function(user) {
	// 		var str= '<li><a class="person" href="https://reqres-api.herokuapp.com/api/users/' + user['id'] + '">' + user['first_name'] + ' ' + user['last_name']+ '</li>'
	// 		$('#people').append(str)
	// 		}); 
			
	// 		$('.person').on('click', function(event) {
	// 			event.preventDefault();
	// 			$.ajax($(this).attr('href'), {
	// 				success: function (user) {
	// 					var str = user['first_name'] + ' ' + user['last_name'];
	// 					str += '<br><img src="' + user['avatar'] + '">'
 // 						$('#person-details').html(str);
	// 				} 
	// 			});
	// 		});
	// 	}
	// });

	$.ajax('https://api.github.com/users/gizemny/repos', {
		success: function(repos) {
			_.each(repos, function(repo) {
				var str = '<li><a class="project" href="https://api.github.com/repos/gizemny/' + repo['name'] + '/contents">' + '</li>'
				$('#my-repos').append(str);
			});

		$('project')

		}
	});

});