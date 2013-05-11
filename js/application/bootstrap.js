/**
 * This is called first from index.html
 */

//define the require object
require.config({
	// Define the paths to libraries for later use
	paths: {
		jquery: '../libs/jquery-1.9.1.min',
		underscore: '../libs/underscore-min',
		backbone: '../libs/backbone-min',
		transitions: '../libs/transitions',
		backboneLocalStorage: '../libs/backbone.localStorage-min',
	},
	// Deine the above library's dependencies
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		transitions: {
			deps: ['backbone', 'jquery'],
			exports: 'Transitions'
		},
		backboneLocalStorage: {
			deps: ['backbone'],
			exports: 'backboneLocalStorage'
		}
	}
});

// Initiate app.js
require(['app'], function(App) {
	App.init();
});