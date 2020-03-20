//------------------------------------------------------------------------------
//
//     This code was auto generated.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
//
//------------------------------------------------------------------------------

const extend = require('js-base/core/extend');
const FlexLayout = extend(require('sf-core/ui/flexlayout'));
const ImageView = extend(require('sf-core/ui/imageview'));

function addChild(childName, ChildClass, componentInstance) {
	this.children = this.children || {};
	this.children[childName] = new ChildClass(componentInstance);
	if (this.layout) this.layout.addChild(this.children[childName]);
	else this.addChild(this.children[childName]);
}

// Constructor
function PageTitleLayout(_super, props) {
	// Initalizes super class for this component scope

	_super(this, props);
	addChild.call(this, 'logo', $PageTitleLayout$$Logo_, this);
}
PageTitleLayout.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: { backgroundColor: 'rgba( 255, 255, 255, 0 )', flexProps: { justifyContent: 'CENTER' }, height: 24, width: 150 }
};
const PageTitleLayout_ = FlexLayout(PageTitleLayout);

function $PageTitleLayout$$Logo(_super, pageInstance) {
	_super(this);

	pageInstance.logo = this;
}
$PageTitleLayout$$Logo.$$styleContext = {
	classNames: '.sf-imageView .pageTitleLayout_logo',
	defaultClassNames: '.default_common .default_imageView',
	userProps: { image: 'smartface.png', imageFillType: 'ASPECTFIT', width: null }
};
const $PageTitleLayout$$Logo_ = ImageView($PageTitleLayout$$Logo);

module.exports = PageTitleLayout_;
