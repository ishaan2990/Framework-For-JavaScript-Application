define(["base/observable"],function(a){var b=a.extend({init:function(){this._super(),this.subscribeEvent("btnSayHello:Click",function(){alert("btnSayHello:Click is subscribed from user module")})}});return b})