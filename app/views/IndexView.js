
var	Backbone = require('backbone'),
	BackboneNode = require('backbone_node'),
	_ = require('underscore');

exports.init = Backbone.View.extend({

	initialize: function() {

		_.bindAll(this);
		global.on('ready:app', this.setup);
	},

	setup: function(app) {

		var view = this;

		app.get(view.route, function(req, res){
			res.render('index', { title: 'Express' })
		});
	}

});
