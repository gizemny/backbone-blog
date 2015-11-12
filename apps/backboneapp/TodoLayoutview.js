var Backbone = require('backbone'); 

var TodoLayoutView = Backbone.View.extend({
	el: '<div> \ 
			<form> \ 
				<input type="text"> \
				<input type="submit" value="Submit"> \
			</form> \
			<div id="todos-container"></div> \
			<span id="num-todos"></span>\
		</div>'

	render: function() {
		this.$el.find('#num-todos').text(this.collection.length)
	}
});

module.exports = TodoLayoutView;