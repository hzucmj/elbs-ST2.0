Ext.define('app.controller.MorePanel', {
	extend: 'Ext.app.Controller',
	config: {
	},
	init: function(){
		console.log('MorePanel Controller...');
		this.control = ({
			'button': {
				'tap': function(){
					console.log("button");
				}
			}/*,
			'#elbs-morepanel': {
				'itemtap': function(dataview, index, target, record, e, eOpts) {
					alert(index);
				}
			},
			'#buttonxxx': {
				'tap': function(){
					alert(this.id);
				}
			}*/
		});
	},
	onItemTap: function(){
		console.log('On MorePanel Item Tap...');
	}
});
