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
			xtype: 'panel',
			html: 'hello'
		}, {
			id: 'elbs-locationdetail',
			xtype: 'textfield',
			value: 'location'
		}, {
			xtype: 'navigationbar',
			docked: 'bottom',
			title: '',
			items: [{
				id: 'elbs-leavecomment',
				xtype: 'button',
				iconMask: true,
				text: '评论',
				ui: 'confirm round',
				align: 'right',
				iconCls: 'reply'
			}]
		}]
	}
});