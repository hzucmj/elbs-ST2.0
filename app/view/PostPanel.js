Ext.define('App.view.PostPanel', {
	extend: 'Ext.Panel',
	name: 'postpanel',
	id: 'elbs-postpanel',
	fullscreen: true,
	config: {
		padding: 10,
		items: [{
			xtype: 'panel',
			items: [{
				xtype: 'textareafield',
				id: 'elbs-postcontent',
				name: 'content',
				maxLength: 140,
				maxRows: 6
			}, {
				xtype: 'panel',
				margin: '5 0 5 0',
				items: [{
					xtype: 'textfield',
					id: 'elbs-location',
					name: 'location',
					readOnly: true,
					border: false,
					//hidden: true,
					//disabled: true,
					ui: 'plain'
				}, {
					xtype: 'image',
					id: 'elbs-image',
					name: 'image',
					src: './images/profile.jpg',
					margin: '5 0 0 0',
					width: 100,
					height: 100,
					hidden: true
				}]
			}]
		}, {
			xtype: 'navigationbar',
			title: '签到',
			docked: 'top',
			defaults: {
				iconMask: true,
				ui: 'plain'
			},
			items: [{
				//ui: 'post', 
				//text: '发布', 
				id: 'elbs-post',
				iconCls: 'add',
				align: 'right'
			}, {
				id: 'elbs-postBackToMain',
				ui: 'back', 
				text: '返回', 
				align: 'left'
			}]
		}, {
			xtype: 'toolbar',
			title: '',
			docked: 'bottom',
			defaults: {
				iconMask: true,
				ui: 'plain'
			},
			items: [{
				//text: '定位',
				id: 'elbs-locate',
				iconCls: 'locate'
			}, {
				text: '图片',
				handler: function(){
					Ext.getCmp('m-image').setHidden(false);
				}
			}, {
				text: '表情',
				handler: function(){
					latlng = '40.714224,-73.961452';
					Ext.Ajax.request({
						url: 'http://maps.google.com/maps/api/geocode/json?latlng=' + latlng + '&sensor=true',
						method: 'get',
						success: function(response) {
							//alert(response.responseText.formatted_address);
							var obj = (Ext.decode(response.responseText)).results[0].address_components;
							Ext.Msg.alert(obj[2].long_name);
						},
						failure: function() {
							
						}
					});
				}
			}, {
				text: '话题',
				handler: function(){
					var content = Ext.getCmp('postcontent').getValue();
					Ext.getCmp('postcontent').setValue(content + '##');
				}
			}]
		}]
	},
	initialize: function(){
		console.log("PostPanel showing...");
		this.callParent();
	}
});