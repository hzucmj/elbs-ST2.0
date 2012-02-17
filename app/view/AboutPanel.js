Ext.define('App.view.AboutPanel', {
	extend: 'Ext.Panel', 
	id: 'aboutPanel',
	config: {
		title: '关于',
		items: [{
			docked: 'top',
			xtype: 'titlebar',
			title: '关于',
			items: [{ 
				ui: 'back', 
				text: '返回', 
				align: 'left', 
				handler: function(btn){
					App.Viewport.setActiveItem(App.MainPanel);
				} 
			}]
		}, {
			xtype: 'panel',
			html: '<div class="m-about"><div class="m-about-logo"><img src="./images/profile.jpg" width="100" height="100" /></div><div class="m-about-description">andriod客户端</div><div class="m-about-contact">版权信息</div></div>'
		}]
	}
});