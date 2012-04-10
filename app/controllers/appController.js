
var	express = require('express'),
	Backbone = require('backbone'),
	BackboneNode = require('backbone_node');

var views = require('../views');

exports.init = Backbone.Router.extend({

	initialize: function() {

		this.setupApp();
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

	startListen: function() {

		var view = this;

		// Conditional switch for process.env.PORT flag from Heroku.
		view.app.listen(process.env.PORT || 3000, function(){
			console.log("Express  server listening on port %d in %s mode", view.app.address().port, view.app.settings.env);
		});

		global.trigger('ready:app', view.app);
	}
});
