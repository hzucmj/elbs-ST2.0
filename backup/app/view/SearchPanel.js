Ext.define('App.view.SearchPanel', {
	extend: 'Ext.Carousel',
	id: 'elbs-searchpanel',
	config: {
		title: '搜索',
		iconCls: 'search',
		items: [{
			docked: 'top',
			xtype: 'navigationbar',
			title: '搜索'
		}, {
			html: 'This panel for the search form.',
			iconCls: 'search'
		}, {
			html: 'This panel for the search result.',
			iconCls: 'search'
		}]
	}
});
