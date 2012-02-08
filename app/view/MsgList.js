Ext.define('app.view.MsgList', {
	extend: 'Ext.dataview.List',
	name: 'MsgList',
	config: {
		title: '首页',
		iconCls: 'home',
		store: 'MsgStore',
		//store: Ext.create('app.store.MsgStore'),
		itemTpl: '<div class="m-messages"><table width="100%" border="0" cellpadding="0" cellspacing="0"><tr><td width="50"><div class="m-message-left"><div class="m-message-profile"><img src="{avatar}" width="50" height="50"></div></div></td><td><div class="m-message-right"><div class="m-message-author"><span class="m-username">{username}</span><span class="m-postdate">{posttime}</span></div><div class="m-message-content"><span>{content}</span></div><div class="m-message-detail"><span>来自：{location}</span></div></div></td></tr></table></div>',
	},
	init: function(){
		
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
