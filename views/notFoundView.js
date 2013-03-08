/**
 * @module App
 * @submodule App.Views
 * @class App.Views.NotFoundView
 * @constructor
 */

var Nodebone = require('nodebone'),
    _ = require('underscore');

module.exports = Nodebone.View.extend({

  initialize: function() {
    _.bindAll(this);
  },

  render: function(req, res) {

    res.writeHead(200);
    res.end('All other urls go here.\n');
  }
});
