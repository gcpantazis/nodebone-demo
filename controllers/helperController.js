/**
 * @module App
 * @submodule App.Controllers
 * @class App.Controllers.HelperController
 * @constructor
 */

var Nodebone = require('nodebone'),
    helpers = require('../helpers');

module.exports = Nodebone.Router.extend({

  initialize: function() {

    this.setupHelpers();
  },

  setupHelpers: function() {

    var view = this;

    // Initialize helper classes here.
  }
});
