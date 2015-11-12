var Backbone = require('backbone');

var TodoModel = Backbone.Model.extend({
    defaults: {
        completed: false
    }
});

module.exports = TodoModel;