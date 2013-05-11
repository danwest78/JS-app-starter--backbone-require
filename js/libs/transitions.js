/*
 * A set of self written functions used by the app
 * 
 * This must inherit Bootstrap and Jquery
 */

Backbone.View.prototype.fadeIn = function(template, wrapper, speed) {
    wrapper.is(':hidden') ? 
    wrapper.html(template).show(speed) : 
    wrapper.hide(speed, function(){ wrapper.html(template).show(speed) });
};

//serialize to JSON
$.fn.serializeObject = function(){
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};