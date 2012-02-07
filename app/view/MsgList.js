Ext.define('app.view.MsgList', {
	extend: 'Ext.dataview.List',
	name: 'MsgList',
	config: {
		title: '首页',
		iconCls: 'home',
		store: 'Message',
		itemTpl: '<div class="m-messages"><div class="m-message-left"><div class="m-message-profile"><img src="{avatar}" width="50" height="50"></div></div><div class="m-message-right"><div class="m-message-author"><span>{username}：</span><span class="postdate">{posttime}</span></div><div class="m-message-content"><span>{content}</span></div><div class="m-message-detail"><span>来自：{location}</span></div></div></div>'
	},
	initialize: function() {
		this.callParent();
	}
});
/*Ext.define('app.view.MsgList', {
	extend: 'Ext.Panel',
	name: 'MsgList',
	config: {
		title: '首页',
		iconCls: 'home',
		items: [{
			docked: 'top',
			xtype: 'navigationbar',
			title: '首页',
			items: [
				{ 
					id: 'newmsgbtn',
					text: '新消息', 
					align: 'left' 
				}, {
					id: 'refreshbtn',
					text: '刷新',
					align: 'right'
				}
			]
		}, {
			layout: 'fit',
			xtype: 'list',
			itemTpl: '<div class="m-messages"><div class="m-message-left"><div class="m-message-profile"><img src="{avatar}" width="50" height="50"></div></div><div class="m-message-right"><div class="m-message-author"><span>{username}：</span><span class="postdate">{posttime}</span></div><div class="m-message-content"><span>{content}</span></div><div class="m-message-detail"><span>来自：{location}</span></div></div></div>',
			store: 'MsgStore'
		}]
	},
	initialize: function() {
		this.callParent();
	}
});*/
