Ext.define('App.view.PostPanel', {
	extend: 'Ext.form.Panel',
	id: 'elbs-postpanel',
	config: {
		name: 'postpanel',
		fullscreen: true,
		padding: 10,
		items: [{
			xtype: 'fieldset',
			items: [{
				xtype: 'textareafield',
				id: 'elbs-postcontent',
				name: 'content',
				maxLength: 140,
				maxRows: 6,
				placeHolder: '说点什么吧...'
			}, {
				xtype: 'panel',
				margin: '5 0 5 0',
				items: [{
					xtype: 'textfield',
					id: 'elbs-location',
					name: 'location',
					hidden: true
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
			xtype: 'titlebar',
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
					Ext.getCmp('elbs-image').setHidden(false);
				}
			}, {
				text: '表情'
			}, {
				text: '话题',
				handler: function(){
					var content = Ext.getCmp('elbs-postcontent').getValue();
					Ext.getCmp('elbs-postcontent').setValue(content + '##');
				}
			}]
		}]
	},
	initialize: function(){
		console.log("PostPanel showing...");
		this.callParent();
	}
});