Ext.define('App.controller.MsgList', {
	extend: 'Ext.app.Controller',
	config: {},
	views: ['MsgList', 'PostPanel'],
	init: function(){
		this.control({
			'#elbs-msglist': {
				'itemtap': this.onItemTap,
				'itemtouchstart': this.onItemtouchstart,
				'itemtouchend': this.onItemtouchend
			},
			'#newmsgbtn': {
				'tap': this.onPostNew
			},
			'#refreshbtn': {
				'tap': this.onRefresh
			},
			'#elbs-locate': {
				'tap': this.onLocate
			},
			'#elbs-post': {
				'tap': this.onPost
			},
			'#elbs-postBackToMain': {
				'tap': this.postBackToMain
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
		App.Viewport.setActiveItem(App.DetailPanel);
	},
	onItemtouchstart: function() {
		
	},
	onItemtouchend: function() {
		
	},
	onLocate: function(){
		navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError);
		//Ext.Msg.alert(latitude + "123");
	},
	onSuccess: function(position){
		/*coords = {
			latitude: position.coords.latitude,
			longitude: position.coords.longitude,
			altitude: position.coords.altitude,
			accuracy: position.coords.accuracy,
			altitudeAccuracy: position.coords.altitudeAccuracy,
			heading: position.coords.heading,
			speed: position.coords.speed,
			timestamp: new Date(position.timestamp)
		};*/
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
		var latlng = latitude + ',' + longitude;
		console.log("latlng: " + latlng);
		//this.getAddress(latlng);
		if (latlng != null) {
			console.log("start locating...");
			Ext.Ajax.request({
				//url: 'https://maps.google.com/maps/api/geocode/json?latlng=' + latlng + '&sensor=true',
				url: 'https://maps.googleapis.com/maps/api/place/search/json?location=23.3239785,116.3515772&radius=1000&sensor=false&key=AIzaSyA4pkIjAT-KMp3lpVgpvptVHmNcSR7zaZI',
				//method: 'get',
				type: 'jsonp',
				success: function(response) {
					document.write(response.responseText);
					var obj = Ext.decode(response.responseText);
					var ac = obj.results[0].address_components;
					alert(ac[2].long_name + ac[1].long_name + ac[0].long_name);
					
					Ext.getCmp('m-location').setValue(ac[2].long_name + ac[1].long_name + ac[0].long_name);
					Ext.getCmp('m-location').setHidden(false);
				},
				failure: function() {
					alert('定位失败');
				}
			});
		}
		//Ext.getCmp('m-location').setValue(address);
		//Ext.getCmp('m-location').setHidden(false);
		//return coords;
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
	},
	onPost: function(){
		var content = Ext.getCmp('elbs-postcontent');
		var location = Ext.getCmp('elbs-location');
		if (content != "") {
			App.PostPanel.setMasked({
				xtype: 'loadmask',
				message: '正在发布，请稍候...'
			});
			Ext.Ajax.request({
				url: WEBPATH + '/api.jxp?action=addmsg',
				method: 'post',
				params: {
					uid: UID,
					content: content.getValue(),
					location: location.getValue()
				},
				success: function(res) {
					App.PostPanel.setMasked(false);
					Ext.Msg.alert(res.responseText);
					content.setValue("");
					location.setValue("");
					App.Viewport.setActiveItem(App.MainPanel);
					App.MsgList.getStore().load();
				},
				failure: function() {
					alert('failure');
				}
			});
			
		}
	},
	postBackToMain: function(){
		App.Viewport.setActiveItem(App.MainPanel);
	}
});