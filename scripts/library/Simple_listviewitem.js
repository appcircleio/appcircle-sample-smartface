//------------------------------------------------------------------------------
//
//     This code was auto generated.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
//
//------------------------------------------------------------------------------

const extend = require('js-base/core/extend');
const ListViewItem = extend(require('sf-core/ui/listviewitem'));
const Label = extend(require('sf-core/ui/label'));
const FlexLayout = extend(require('sf-core/ui/flexlayout'));

function addChild(childName, ChildClass, componentInstance) {
	this.children = this.children || {};
	this.children[childName] = new ChildClass(componentInstance);
	if (this.layout) this.layout.addChild(this.children[childName]);
	else this.addChild(this.children[childName]);
}

// Constructor
function Simple_listviewitem(_super, props) {
	// Initalizes super class for this component scope

	_super(this, props);
	addChild.call(this, 'lblTitle', $Simple_listviewitem$$LblTitle_, this);
	addChild.call(this, 'lblChevron', $Simple_listviewitem$$LblChevron_, this);
	addChild.call(this, 'flLine', $Simple_listviewitem$$FlLine_, this);
}
Simple_listviewitem.$$styleContext = {
	classNames: '.sf-listViewItem .sf-listViewItem-simple',
	defaultClassNames: '.default_common .default_listViewItem',
	userProps: { width: null, height: null }
};
const Simple_listviewitem_ = ListViewItem(Simple_listviewitem);

function $Simple_listviewitem$$LblTitle(_super, pageInstance) {
	_super(this, { text: 'ListView Cell Title' });
}
$Simple_listviewitem$$LblTitle.$$styleContext = {
	classNames: '.sf-label .sf-listViewItem-simple-title',
	defaultClassNames: '.default_common .default_label',
	userProps: { marginLeft: 16 }
};
const $Simple_listviewitem$$LblTitle_ = Label($Simple_listviewitem$$LblTitle);

function $Simple_listviewitem$$LblChevron(_super, pageInstance) {
	_super(this, { text: '' });
}
$Simple_listviewitem$$LblChevron.$$styleContext = {
	classNames: '.sf-label .sf-listViewItem-simple-chevron',
	defaultClassNames: '.default_common .default_label',
	userProps: { marginRight: 16 }
};
const $Simple_listviewitem$$LblChevron_ = Label($Simple_listviewitem$$LblChevron);

function $Simple_listviewitem$$FlLine(_super, pageInstance) {
	_super(this);
}
$Simple_listviewitem$$FlLine.$$styleContext = {
	classNames: '.sf-flexLayout .sf-listViewItem-simple-line',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {}
};
const $Simple_listviewitem$$FlLine_ = FlexLayout($Simple_listviewitem$$FlLine);

module.exports = Simple_listviewitem_;
