/*
 * Model module
 */

//define the modules to be included
define([
	'jquery',
	'underscore',
	'backbone',
	'backboneLocalStorage',
	], function($, _, Backbone, LocalStorage) {
		
		var store = new Backbone.LocalStorage("medication-items");
		
		//define the model
		var MedicationItem = Backbone.Model.extend({
			localStorage: store,
			defaults:{
				sessionname: 'defaultSessionName',
				//drugName: 'defaultDrugName',
				//order: sessionCollection.nextOrder(),
			},
  
		});
		
		//define the collection
		var MedicationItemList = Backbone.Collection.extend({
			localStorage: store,
			model: MedicationItem,
			
		});
		
		return {
    		Model: MedicationItem,
    		Collection: MedicationItemList
  		};

	});