/*
 * Views: IndexView.js
 *
 */

var	Backbone = require('backbone'),
	NodeBackbone = require('node-backbone'),
	_ = require('underscore');

exports.init = Backbone.View.extend({

	initialize: function() {
		_.bindAll(this);
	},

	render: function(req, res) {

		var model = {
			layout: 'layouts/basic',
			title: 'Express'
		};

		res.render('sections/index', model);
	}

});
