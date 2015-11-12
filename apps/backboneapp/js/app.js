'use strict';

var $ = require('jquery');
var TodoModel = require('./models/TodoModel.js');
var TodosCollection = require('./collections/TodosCollection.js');
var TodosCollection = require('./views/TodoLayoutView.js');

$(function() {
	console.log('hello world');
	var todo1 = new TodoModel ({title: 'walk the dog'});
	var todo2 = new TodoModel ({title: 'feed the cat'});
	var todos = new TodosCollection([todo1,todo2]);
	
	var todoLayoutView = new TodoLayoutView({ collection: todos });
	todoLayoutView.render();
});