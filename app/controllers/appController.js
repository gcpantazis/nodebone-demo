
var	express = require('express'),
	Backbone = require('backbone'),
	BackboneNode = require('backbone_node'),
	_ = require('underscore');

var views = require('../views');

exports.init = Backbone.Router.extend({

	initialize: function() {

		this.setupApp();
		this.setupRoutes();
		this.startListen();
	},

	setupApp: function() {

		var view = this;

		view.app = module.exports = express.createServer();

		view.app.configure(function(){
			view.app.set('views', global.baseDirectory + '/templates');
			view.app.set('view engine', 'ejs');
			view.app.use(express.bodyParser());
			view.app.use(express.methodOverride());
			view.app.use(view.app.router);
			view.app.use(express.static(global.baseDirectory + '/public'));
		});

		view.app.configure('development', function(){
			view.app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
		});

		view.app.configure('production', function(){
			view.app.use(express.errorHandler());
		});
	},

	setupRoutes: function() {

		var view = this;

		// This should be done in a method similar to Backbone's routes;
		// The modeling is the same, so should be a good translation.

		var indexView = new views.IndexView.init({
			route: '/'
		});

		var exampleView = new views.ExampleView.init({
			route: '/example/:id'
		});

	},

	startListen: function() {

		var view = this;

		view.app.listen(3000, function(){
			console.log("Express  server listening on port %d in %s mode", view.app.address().port, view.app.settings.env);
		});

		global.trigger('ready:app', view.app);
	}

});
