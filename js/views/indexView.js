/*
 * View module
 */

//define the modules to be included
define([
	'jquery',
	'underscore',
	'backbone',
	'transitions',
	'text!/JS-app-starter--backbone-require/tpl/IndexView.html',
	], function($, _, Backbone, Transitions, indexTemplate) {
		//extend a backbone view
		var indexView = Backbone.View.extend({
			//define the container element
			el: '#content',
			
			//render the element using underscore
			render: function() {
				//pass variables to template
				template = _.template(indexTemplate);
    			this.fadeIn(template, this.$el, 100);
			},
    		
		});

		return new indexView;
	});