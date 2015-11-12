'use strict';
//shortcut
$(function(){ 
	//collection is an array of objects 
	$.ajax('https://reqres-api.herokuapp.com/api/users/' , { //takes object
		success: function(users) {
			_.each(users, function(person) {
				console.log(person['first_name']); 
			});
		}
		// for (var i = 0; i < ret.length; i++) {
			//console.log(ret[i]['first_name'])
		//}
	})
	// id="contact-list"
	// id="people"
	// id="person-details"

});