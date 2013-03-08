/**
 * @module App
 * @submodule App.Models
 * @class App.Models.DemoModel
 * @static
 */

var Nodebone = require('nodebone'),
    _ = require('underscore');

module.exports = Nodebone.Model.extend({

  'defaults': {
    'demoName': '',
    'version': '',
    'displayName': ''
  },

  'initialize': function() {

    _.bindAll(this);
  }
});
