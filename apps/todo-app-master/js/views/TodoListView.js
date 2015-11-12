var Backbone = require('backbone');
var TodoItemView = require('./TodoItemView.js');

var TodoListView = Backbone.View.extend({
    el: '<ul></ul>',
    render: function() {
        var that = this; // the fix to the scoping problem 
        this.collection.each(function (todo) {
            var todoItemView = new TodoItemView({ model: todo });
            todoItemView.render();
            that.$el.append(todoItemView.el)
        });
    	return this;
    }

});

module.exports = TodoListView;