var TodoModel = require('../models/TodoModel.js');
var Backbone = require('backbone');

var TodosCollection = Backbone.Collection.extend({
    model: TodoModel
});

// var todos = new TodosCollection()
// todos.add(todo1)

module.exports = TodosCollection;