/**
 * @module App
 * @submodule App.Models
 * @class App.Models.DemoCollection
 * @constructor
 */

var Nodebone = require('nodebone'),
    _ = require('underscore'),
    Models = require('./');

module.exports = Nodebone.Collection.extend({

  'model': Models.DemoModel,

  'initialize': function() {

    var collection = this,
        demoModels = [];

    // Sample Data

    var data = [{
      'name': 'foo',
      'version': '0.1',
      'displayname': 'foobar',
    }, {
      'name': 'bar',
      'version': '0.1',
      'displayname': 'barfoo',
    }];

    _.each(data, function(item){

      var demoModel = new Models.DemoModel({
        'demoName': item['name'],
        'version': item['version'],
        'displayName': item['displayname']
      });

      demoModels.push(demoModel);

    });

    collection.add(demoModels);

    console.log('Nodebone : DemoCollection : Initialized');
  }
});
