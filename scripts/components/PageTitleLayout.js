const extend = require('js-base/core/extend');
const PageTitleLayoutDesign = require('library/PageTitleLayout');

const PageTitleLayout = extend(PageTitleLayoutDesign)(
  // Constructor
  function(_super, props = {}, pageName) {
    // Initalizes super class for this scope
    _super(this, props);
    this.pageName = pageName;
  }
);

module.exports = PageTitleLayout;