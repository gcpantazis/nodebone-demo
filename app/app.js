
var Backbone = require('backbone'),
	_ = require('underscore'),
	controllers = require('./controllers');

global.baseDirectory = __dirname;

_.extend(global, Backbone.Events);

var appController = new controllers.AppController.init();

// Example global trigger.
// global.trigger('foo');
