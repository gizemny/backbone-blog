var Backbone = require('backbone');
var TodoModel = require('../models/TodoModel.js');

var TodoItemView = Backbone.View.extend({
    el: '<li></li>',
    //get the title and insert it into the li 
	render: function(){
    var checked = (this.model.get('completed')) ? 'checked': '';
      this.$el.html(this.model.get('title') + '<input type="checkbox" ' + checked + '>');
      return this;
	}
});

module.exports = TodoItemView;