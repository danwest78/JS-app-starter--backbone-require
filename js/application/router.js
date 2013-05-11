/*
 * This maps addresses to their controllers
 * NOTE: Backbone syntax begins in this module
 */

//Define the modules to be included
define([
	'jquery',
	'underscore',
	'backbone',
	'../views/indexView',
	'../views/editSessionView',
	],
	//map above modules to objects in function arguments
	function($, _, Backbone, indexView, editSessionView) {
		
		//define the routes here
		var AppRouter = Backbone.Router.extend({
			routes: {
				'': 'index',
				'editSession': 'editSession',
				'test': 'test',
			},
			
			//map the routes to functions
			index: function() {
				indexView.render();
			},
			
			editSession: function() {
				editSessionView.render();
			},
			
			test: function() {
				alert('test');
			}
		});
		
		//initialises the AppRouter object above
		var init = function() {
			var app_router = new AppRouter;
			//monitor the changes in the address bar
			Backbone.history.start();
		};
		return {
			init: init
	 	}
	});