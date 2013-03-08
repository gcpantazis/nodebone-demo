/**
 * @module App
 * @class App.init
 * @static
 */

var Nodebone = require('nodebone'),
    _ = require('underscore');

var controllers = require('./controllers');

global.baseDirectory = __dirname;
_.extend(global, Nodebone.Events);

// Initialize Controllers.

var helperController = new controllers.HelperController();
var routeController = new controllers.RouteController();
var appController = new controllers.AppController();