Ext.define('App.view.PostPanel', {
	extend: 'Ext.Panel',
	name: 'postpanel',
	id: 'elbs-postpanel',
	config: {
		items: [{
			xtype: 'panel',
			items: [{
				xtype: 'textareafield',
				id: 'postcontent',
				name: 'content',
				maxLength: 140
			}, {
				xtype: 'panel',
				margin: '5 0 5 0',
				items: [{
					xtype: 'textfield',
					id: 'm-location',
					name: 'location',
					readOnly: true,
					border: false,
					hidden: true,
					disabled: true,
					ui: 'plain'
				}, {
					xtype: 'image',
					id: 'm-image',
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
				iconCls: 'add',
				align: 'right',
				handler: function(){
					postPanel.submit({
						url: WEBPATH + '/api.jxp?action=addmsg&uid=' + UID,
						method: 'POST',
						success: function(form, result){
							Ext.Msg.alert(result.msg);
						}
					});
				}
			}, {
				ui: 'back', 
				text: '返回', 
				align: 'left',
				handler: function(){
					Ext.getCmp('elbs-viewport').setActiveItem(1);
				}
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
				id: 'locate',
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