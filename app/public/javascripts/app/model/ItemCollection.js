/*
 * ItemCollection.js
 *
 */

var ItemCollection = Backbone.Collection.extend({

	'model': ItemModel,

	'initialize': function() {

		log("Backbone : ItemCollection : Initialized");

	}

});
