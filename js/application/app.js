/*
 * Define acts as an include call.
 * Router module is required connect the views
 */
define([
	'router'
	],
	function(Router) {
		var init = function() {
			Router.init();
		}
		return {
			init: init
		}
	});