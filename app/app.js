
var Backbone = require('backbone'),
	_ = require('underscore'),
	controllers = require('./controllers');

global.baseDirectory = __dirname;
_.extend(global, Backbone.Events);

// Initialize Controller, start app.
var appController = new controllers.AppController.init();
