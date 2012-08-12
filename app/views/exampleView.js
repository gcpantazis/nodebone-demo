/*
 * Views: ExampleView.js
 *
 */

var	Backbone = require('backbone'),
	Nodebone = require('nodebone'),
	_ = require('underscore');

exports.init = Backbone.View.extend({

	initialize: function() {
		_.bindAll(this);
	},

	render: function(req, res) {

		var model = {
			layout: 'layouts/basic',
			title: req.params.id
		};

		res.render('sections/index', model);
	}

});
