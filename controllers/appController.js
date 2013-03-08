/**
 * @module App
 * @submodule App.Controllers
 * @class App.Controllers.AppController
 * @constructor
 */

var http = require('http'),
    ramrod = require('ramrod'),
    Nodebone = require('nodebone'),
    _ = require('underscore');

module.exports = Nodebone.Router.extend({

  initialize: function() {

    _.bindAll(this);

    var controller = this;

    global.on('ready:view', this.setupRoute);

    controller.app = module.exports = ramrod();
    controller.startListen();
  },

  setupRoute: function(view) {

    var controller = this;

    // Nodebone doesn't presume to know how you want to handle the request verbs,
    // so pass them onto the appropriate methods in your engine.

    if ( view.action === 'GET' ) controller.app.get(view.route, view.render);
    if ( view.action === 'POST' ) controller.app.post(view.route, view.render);
    if ( view.action === 'PUT' ) controller.app.put(view.route, view.render);
    if ( view.action === 'ON' ) controller.app.on(view.route, view.render);
  },

  startListen: function() {

    var controller = this;

    http.createServer(function(req, res){
      controller.app.dispatch(req, res);
    }).listen(process.env.PORT || 3000);

    // This event tells the views that they can go ahead and broadcast
    // ready:view to set their routes.

    global.trigger('ready:app', controller.app);
  }
});
