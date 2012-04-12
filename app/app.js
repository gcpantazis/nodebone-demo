/*
 * app.js
 *
 */

var Backbone = require('backbone'),
	_ = require('underscore');

var controllers = require('./controllers');

global.baseDirectory = __dirname;
_.extend(global, Backbone.Events);

// Initialize Controllers, start app.
var routeController = new controllers.RouteController.init();
var appController = new controllers.AppController.init();
