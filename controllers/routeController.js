/**
 * @module App
 * @submodule App.Controllers
 * @class App.Controllers.RouteController
 * @constructor
 */

var Nodebone = require('nodebone'),
    views = require('../views');

module.exports = Nodebone.Router.extend({

  initialize: function() {

    this.setupRoutes();
  },

  setupRoutes: function() {

    var demoView = new views.DemoView({
      action: 'GET',
      route: 'api/demos'
    });

    var notFoundView = new views.NotFoundView({
      action: 'ON',
      route: '*'
    });
  }
});
