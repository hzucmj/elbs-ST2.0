Ext.define('App.controller.MsgList', {
	extend: 'Ext.app.Controller',
	config: {},
	views: ['MsgList', 'PostPanel'],
	init: function(){
		this.control({
			'#elbs-msglist': {
				'itemtap': this.onItemtap,
				'itemtouchstart': this.onItemtouchstart,
				'itemtouchend': this.onItemtouchend
			},
			'#newmsgbtn': {
				'tap': this.onPostNew
			},
			'#refreshbtn': {
				'tap': this.onRefresh
			},
			'#locate': {
				'tap': this.onLocate
			}
		});
	},
	onPostNew: function() {
		console.log("PostPanel showing...");
		App.Viewport.setActiveItem(App.PostPanel);
	},
	onRefresh: function(){
		console.log("refreshing the msg list...");
		var obj = Ext.getCmp('elbs-msglist');
		if (obj) {
			obj.getStore().load();
		}
	},
	onItemTap: function(dataview, index, target, record, e){
		console.log("show detail of message...");
	},
	onItemtouchstart: function() {
		
	},
	onItemtouchend: function() {
		
	},
	onLocate: function(){
		navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError);
		Ext.Msg.alert(latitude + "123");
	},
	onSuccess: function(position){
		coords = {
			latitude: position.coords.latitude,
			longitude: position.coords.longitude,
			altitude: position.coords.altitude,
			accuracy: position.coords.accuracy,
			altitudeAccuracy: position.coords.altitudeAccuracy,
			heading: position.coords.heading,
			speed: position.coords.speed,
			timestamp: new Date(position.timestamp)
		};
		latitude = position.coords.latitude;
		longitude = position.coords.longitude;
		var latlng = latitude + ',' + longitude;
		//this.getAddress(latlng);
		if (latlng != null) {
			console.log("start");
			Ext.Ajax.request({
				url: 'http://maps.google.com/maps/api/geocode/json?latlng=' + latlng + '&sensor=true',
				//method: 'get',
				success: function(response) {
					var obj = Ext.decode(response.responseText);
					var ac = obj.results[0].address_components;
					alert(ac[2].long_name + ac[1].long_name + ac[0].long_name);
					
					Ext.getCmp('m-location').setValue(ac[2].long_name + ac[1].long_name + ac[0].long_name);
					Ext.getCmp('m-location').setHidden(false);
				},
				failure: function() {
					alert('xxx-failure');
				}
			});
		}
		//Ext.getCmp('m-location').setValue(address);
		//Ext.getCmp('m-location').setHidden(false);
		return coords;
	},
	
	onError: function(error) {
		Ext.Msg.alert("Error Code: " + error.code + "\nError Message: " + error.message + "\n");
	},
	getAddress: function(latlng) {
		if (latlng != null) {
			console.log("start");
			Ext.Ajax.request({
				url: 'http://maps.google.com/maps/api/geocode/json?latlng=' + latlng + '&sensor=true',
				//method: 'get',
				success: function(response) {
					var obj = Ext.decode(response.responseText);
					var ac = obj.results[0].address_components;
					alert(ac[2].long_name + ac[1].long_name + ac[0].long_name);
					
					Ext.getCmp('m-location').setValue(ac[2].long_name + ac[1].long_name + ac[0].long_name);
					Ext.getCmp('m-location').setHidden(false);
				},
				failure: function() {
					alert('xxx-failure');
				}
			});
		}
	}
});