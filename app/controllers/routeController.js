
var	express = require('express'),
	Backbone = require('backbone'),
	BackboneNode = require('backbone_node');

var views = require('../views');

exports.init = Backbone.Router.extend({

	initialize: function() {

		this.setupRoutes();
	},

	setupRoutes: function() {

		var view = this;

		// This should be done in a method similar to Backbone's routes;
		// The modeling is the same, so should be a good translation.

		var indexView = new views.IndexView.init({
			route: '/'
		});

		var exampleView = new views.ExampleView.init({
			route: '/test/:id'
		});
	}
});