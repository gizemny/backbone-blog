var Backbone = require('Backbone');
var TodoModel = require('../models/TodoModel.js');

var TodosCollection = Backbone.Collection.extend({
    model: TodoModel
});

module.exports = TodosCollection; 