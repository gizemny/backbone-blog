var Backbone = require('backbone');
var TodoListView = require('./TodoListView.js');

var TodoLayoutView = Backbone.View.extend({
    el: '<div>\
            <form>\
                <input type="text">\
                <input type="submit" value="Submit">\
            </form>\
            <div id="todos-container"></div>\
            <span id="num-todos"></span> Todos\
        </div>',

    render: function() {
        var todoListView = new TodoListView({ collection: this.collection });
        todoListView.render();
        this.$el.find('#todos-container').html(todoListView.el);
        this.$el.find('#num-todos').text(this.collection.length);
    }
});

module.exports = TodoLayoutView;