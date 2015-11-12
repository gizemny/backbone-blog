'use strict';

var $ = require('jquery');
var TodoModel = require('./models/TodoModel.js');
var TodosCollection = require('./collections/TodosCollection.js');
var TodoLayoutView = require('./views/TodoLayoutView.js');

$(function() {
    var todo1 = new TodoModel({ title: 'Walk the dog', completed: true });
    var todo2 = new TodoModel({ title: 'Feed the cat' });

    var todos = new TodosCollection([todo1, todo2]);

    var todoLayoutView = new TodoLayoutView({ collection: todos });
    todoLayoutView.render();
    $('#content').html(todoLayoutView.el);
});