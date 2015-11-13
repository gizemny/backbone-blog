'use strict';
$(document).ready(function(){
	$.ajax('https://api.github.com/users/gizemny/repos', {
		success: function(repos) {
			_.each(repos, function(repo) {
				var str = '<li><a class="project" href="https://api.github.com/repos/gizemny/' + repo['name'] + '/contents">' + repo['name'] + '</a></li>'
				$('#my-repos').append(str);
			});

			$('project').on('click', function(event) {
				event.preventDefault();
				$.ajax($(this).attr('href'), {
					success: function (repo) {
						var str = repo['name'];
						str += '<li><a class="project" href="' + repo['url'] + '"></li>'
						$('#person-details').html(str);
					} 
				});
			});
		}
	});
});