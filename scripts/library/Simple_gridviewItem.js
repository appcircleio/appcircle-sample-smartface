//------------------------------------------------------------------------------
//
//     This code was auto generated.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
//
//------------------------------------------------------------------------------

const extend = require('js-base/core/extend');
const GridViewItem = extend(require('sf-core/ui/gridviewitem'));
const ImageView = extend(require('sf-core/ui/imageview'));
const Label = extend(require('sf-core/ui/label'));

function addChild(childName, ChildClass, componentInstance) {
	this.children = this.children || {};
	this.children[childName] = new ChildClass(componentInstance);
	if (this.layout) this.layout.addChild(this.children[childName]);
	else this.addChild(this.children[childName]);
}

// Constructor
function Simple_gridviewItem(_super, props) {
	// Initalizes super class for this component scope

	_super(this, props);
	addChild.call(this, 'imgPreview', $Simple_gridviewItem$$ImgPreview_, this);
	addChild.call(this, 'lblTitle', $Simple_gridviewItem$$LblTitle_, this);
	addChild.call(this, 'lblSubtitle', $Simple_gridviewItem$$LblSubtitle_, this);
}
Simple_gridviewItem.$$styleContext = {
	classNames: '.sf-gridViewItem .sf-gridViewItem-simple',
	defaultClassNames: '.default_common .default_gridViewItem',
	userProps: { height: 227 }
};
const Simple_gridviewItem_ = GridViewItem(Simple_gridviewItem);

function $Simple_gridviewItem$$ImgPreview(_super, pageInstance) {
	_super(this);
}
$Simple_gridviewItem$$ImgPreview.$$styleContext = {
	classNames: '.sf-imageView .sf-gridViewItem-simple-preview',
	defaultClassNames: '.default_common .default_imageView',
	userProps: {}
};
const $Simple_gridviewItem$$ImgPreview_ = ImageView($Simple_gridviewItem$$ImgPreview);

function $Simple_gridviewItem$$LblTitle(_super, pageInstance) {
	_super(this, { text: 'Grid Title Here' });
}
$Simple_gridviewItem$$LblTitle.$$styleContext = {
	classNames: '.sf-label .sf-gridViewItem-simple-title',
	defaultClassNames: '.default_common .default_label',
	userProps: {}
};
const $Simple_gridviewItem$$LblTitle_ = Label($Simple_gridviewItem$$LblTitle);

function $Simple_gridviewItem$$LblSubtitle(_super, pageInstance) {
	_super(this, { text: 'Grid subtitle here' });
}
$Simple_gridviewItem$$LblSubtitle.$$styleContext = {
	classNames: '.sf-label .sf-gridViewItem-simple-subtitle',
	defaultClassNames: '.default_common .default_label',
	userProps: {}
};
const $Simple_gridviewItem$$LblSubtitle_ = Label($Simple_gridviewItem$$LblSubtitle);

module.exports = Simple_gridviewItem_;
