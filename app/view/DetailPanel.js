Ext.define('App.view.DetailPanel', {
	extend: 'Ext.Panel', 
	config: {
		fullscreen: true,
		padding: 15,
		items: [{
			xtype: 'navigationbar',
			title: '详情',
			docked: 'top',
			items: [{
				id: 'detailToMain',
				xtype: 'button',
				ui: 'back',
				text: '返回',
				handler: function(){
					App.Viewport.setActiveItem(App.MainPanel);
				}
			}]
		}, {
			id: 'elbs-avatarpanel',
			xtype: 'panel',
			cls: 'elbs-avatarpanel',
			html: '<div><span><img src="./images/profile.jpg" width="50" height="50" /></span></div>'
			/*items: [{
				xtype: 'image',
				src: './images/profile.jpg',
				width: 50,
				height: 50
			}]*/
		}, {
			id: 'elbs-contentpanel',
			name: 'contentpanel',
			xtype: 'panel',
			html: 'hello'
		}, {
			id: 'elbs-locationdetail',
			xtype: 'textfield'
		}, {
			id: 'elbs-uiddetail',
			xtype: 'hiddenfield',
			value: ''
		}, {
			id: 'elbs-middetail',
			xtype: 'hiddenfield',
			value: ''
		}, {
			xtype: 'navigationbar',
			docked: 'bottom',
			title: '',
			defaults: {
				xtype: 'button',
				iconMask: true,
				align: 'right'
			},
			items: [{
				id: 'elbs-deletemsg',
				ui: 'decline round',
				iconCls: 'trash'
			}, {
				id: 'elbs-leavecomment',
				ui: 'confirm round',
				iconCls: 'reply'
			}]
		}]
	},
	initialize: function() {
		
	}
});