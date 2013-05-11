/*
 * View module
 */

//define the modules to be included
define([
	'jquery',
	'underscore',
	'backbone',
	'transitions',
	'../models/sessionCollection',
	'text!/JS-app-starter--backbone-require/tpl/EditSessionView.html',
	], function($, _, Backbone, Transitions, sessionCollection, editSessionTemplate) {
		//extend a backbone view
		var editSessionView = Backbone.View.extend({
			//define the container element
			el: '#content',
			
			//render the element using underscore
			render: function() {
    			template = _.template(editSessionTemplate);
    			this.fadeIn(template, this.$el, 100);
			},
			
			//listen for form submit
			events:{
        		"submit .edit-session-form":"saveSession"
    		},
    		
    		saveSession:function(ev) {
    			var sessionDetails = $(ev.currentTarget).serializeObject();
    			//create the collection to store the details
				var items = new sessionCollection.Collection;
				//create the model instance within the collection
				items.create(sessionDetails);
    			
    			return false;
    		}
    		
		});

		return new editSessionView;
	});