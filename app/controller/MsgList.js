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
		Ext.getCmp('elbs-locationdetail').setValue(MsgObj.location);
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
		App.Viewport.setMasked({
			xtype: 'loadmask',
			message: '正在定位，请稍候...',
			indicator: false
		});
		navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError);
	},
	//寻找经纬度成功
	onSuccess: function(position){
		console.log("start locating...");
		var latitude = position.coords.latitude + '';
		var longitude = position.coords.longitude + '';
		var latlng = latitude + ',' + longitude;
		console.log("latlng: " + latlng);
		//this.getAddress(latlng);
		if (latlng != null) {
			//baidu map
			/*
			// 创建地理编码实例  
			var myGeo = new BMap.Geocoder();
			// 根据坐标得到地址描述  
			myGeo.getLocation(new BMap.Point(longitude, latitude), function(result){  
				if (result){  
					alert(result.address);  
				}  
			});*/
			
			//soso map
			var latlng1 = new soso.maps.LatLng(latitude, longitude);
			var geocoder = new soso.maps.Geocoder();
			geocoder.geocode({'location': latlng1}, function(results, status) {
				if (status == soso.maps.GeocoderStatus.OK) {
					//alert(results.address);
					var obj = results.addressComponents;
					Ext.getCmp('elbs-location').setValue(results.address);
					Ext.getCmp('elbs-location').setHidden(false);
					Ext.getCmp('elbs-image').src= 'http://st.map.soso.com/api?size=300*200&center=116.30613,39.98219&zoom=16';
					Ext.getCmp('elbs-image').setHidden(false);
					App.Viewport.setMasked(false);
				} else {
					alert('定位失败, 请稍候重试！');
					App.Viewport.setMasked(false);
				}
			})
			
			//google map
			/*Ext.Ajax.request({
				url: 'http://maps.google.com/maps/api/geocode/json?latlng=' + latlng + '&sensor=true',
				method: 'get',
				success: function(response) {
					var obj = Ext.decode(response.responseText);
					var ac = obj.results[0].address_components;
					console.log(ac[2].long_name + ac[1].long_name + ac[0].long_name);
					
					Ext.getCmp('elbs-location').setValue(ac[2].long_name + ac[1].long_name + ac[0].long_name);
					Ext.getCmp('elbs-location').setHidden(false);
				
					App.Viewport.setMasked(false);
				},
				failure: function() {
					alert('定位失败, 请稍候重试！');
					App.Viewport.setMasked(false);
				}
			});*/
		}
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
					message: '正在发布，请稍候...',
					indicator: false
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
					App.PostPanel.setMasked(false);
				}
			});
			
		}
	},
	postBackToMain: function(){
		App.Viewport.setActiveItem(App.MainPanel);
	}
});