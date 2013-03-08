/**
 * @module App
 * @submodule App.Views
 * @class App.Views.DemoView
 * @constructor
 */

var Nodebone = require('nodebone'),
    _ = require('underscore'),
    Models = require('../models');

module.exports = Nodebone.View.extend({

  initialize: function() {

    _.bindAll(this);

    this.DemoCollection = new Models.DemoCollection();
  },

  render: function(req, res) {

    var output = {
      'success' : true,
      'responseCode' : 0,
      'responseMessage' : '',
      'generatedDate' : (new Date()).toISOString(),
      'demos': this.DemoCollection.models
    };

    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(output, null, '\t'));
    res.end();
  }
});
