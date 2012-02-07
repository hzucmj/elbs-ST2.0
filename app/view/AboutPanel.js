Ext.define('app.view.AboutPanel', {
	extend: 'Ext.Panel', 
	id: 'aboutPanel',
	config: {
		title: '关于',
		/*dockedItems: [{
			xtype: 'navigationbar',
			title: '关于',
			dock: 'top',
			defaults: {
				//handler: tapHandler
			},
			items: [
			    { ui: 'back', text: 'Back', align: 'left', handler: function(btn){Ext.getCmp('App_MainPanel').setActiveItem(1)} }
			],
		}],*/
		items: [{
			docked: 'top',
			xtype: 'navigationbar',
			title: '关于',
			items: [
			    { ui: 'back', text: 'Back', align: 'left', handler: function(btn){Ext.getCmp('elbs-viewport').setActiveItem(1)} }
			]
		}, {
			xtype: 'panel',
			html: '<div class="m-about"><div class="m-about-logo"><img src="./images/profile.jpg" width="100" height="100" /></div><div class="m-about-description">andriod客户端</div><div class="m-about-contact">版权信息</div></div>'
		}]
	}
});