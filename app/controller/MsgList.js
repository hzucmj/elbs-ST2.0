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
	//Message列表点击查看信息详情
	onItemTap: function(dataview, index, target, record, e){
		console.log("show detail of message...");
		var data = dataview.getStore().getAt(index);
		MsgObj = {
			mid: data.get('mid'),
			uid: data.get('uid'),
			username: data.get('username'),
			nickname: data.get('nickname'),
			content: data.get('content'),
			location: data.get('location'),
			photo: data.get('photo'),
			image: data.get('image'),
			posttime: data.get('posttime'),
			music: data.get('music'),
			video: data.get('video')
		};
		Ext.getCmp('elbs-contentpanel').setHtml(MsgObj.content);
		Ext.getCmp('elbs-avatarpanel').src = WEBPATH + '/images/avatar/' + MsgObj.photo;
		Ext.getCmp('elbs-locationdetail').setHtml(MsgObj.location);
		Ext.getCmp('elbs-uiddetail').setValue(MsgObj.uid);
		Ext.getCmp('elbs-middetail').setValue(MsgObj.mid);
		Ext.getCmp('elbs-deletemsg').setHidden(MsgObj.uid == UID ? false : true);
		App.Viewport.setActiveItem(App.DetailPanel);
	},
	onItemtouchstart: function() {
		
	},
	onItemtouchend: function() {
		
	},
	//定位按钮事件
	onLocate: function(){
		navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError);
	},
	//寻找经纬度成功
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
			App.Viewport.setMasked({
			    xtype: 'loadmask',
			    message: 'Hello'
			});
			App.Viewport.setMasked(true);
			Ext.Ajax.request({
				url: 'http://maps.google.com/maps/api/geocode/json?latlng=' + latlng + '&sensor=true',
				method: 'get',
				success: function(response) {
					var obj = Ext.decode(response.responseText);
					var ac = obj.results[0].address_components;
					console.log(ac[2].long_name + ac[1].long_name + ac[0].long_name);
					
					Ext.getCmp('elbs-location').setHtml(ac[2].long_name + ac[1].long_name + ac[0].long_name);
					Ext.getCmp('elbs-location').setHidden(false);
				
					App.Viewport.setMasked(false);
				},
				failure: function() {
					alert('定位失败, 请稍候重试！');
					App.Viewport.setMasked(false);
				}
			});
		}
		//Ext.getCmp('m-location').setValue(address);
		//Ext.getCmp('m-location').setHidden(false);
		//return coords;
	},
	//寻找经纬度出错
	onError: function(error) {
		Ext.Msg.alert("Error Code: " + error.code + "\nError Message: " + error.message + "\n");
	},
	onPost: function(){
		var content = Ext.getCmp('elbs-postcontent');
		var location = Ext.getCmp('elbs-location');
		if (content != "") {
			App.PostPanel.setMasked({
				masked: {
					xtype: 'loadmask',
					message: '正在发布，请稍候...'
				}
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
					//Ext.Msg.alert(res.responseText);
					var obj = Ext.decode(res.responseText);
					alert(obj.msg);
					content.setValue("");
					location.setValue("");
					App.Viewport.setActiveItem(App.MainPanel);
					App.MsgList.getStore().load();
				},
				failure: function() {
					alert('发布失败，请稍候重试！');
				}
			});
			
		}
	},
	postBackToMain: function(){
		App.Viewport.setActiveItem(App.MainPanel);
	}
});