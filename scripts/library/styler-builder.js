//------------------------------------------------------------------------------
//
//     This code was auto generated.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
//
//------------------------------------------------------------------------------

const FlexLayout = require('sf-core/ui/flexlayout');
const Color = require('sf-core/ui/color');
const Image = require('sf-core/ui/image');
const Font = require('sf-core/ui/font');

const styler = require("@smartface/styler/lib/styler");

const ENUMS = {
  "imageFillType": require('sf-core/ui/imagefilltype'),
  "textAlignment": require('sf-core/ui/textalignment'),
  "orientation": require('sf-core/ui/page').Orientation,
  "type": require('sf-core/ui/mapview').Type,
  "gradientOrientation": Color.GradientOrientation,
  "searchViewStyle": require('sf-core/ui/searchview').iOS && require('sf-core/ui/searchview').iOS.style,
  "alignSelf": FlexLayout.AlignSelf,
  "alignContent": FlexLayout.AlignContent,
  "alignItems": FlexLayout.AlignItems,
  "direction": FlexLayout.Direction,
  "flexDirection": FlexLayout.FlexDirection,
  "flexWrap": FlexLayout.FlexWrap,
  "justifyContent": FlexLayout.JustifyContent,
  "positionType": FlexLayout.PositionType,
  "overflow": FlexLayout.OverFlow,
  "style": require('sf-core/ui/statusbarstyle'),
  "align": require('sf-core/ui/scrollview').Align
};

const COLOR_PROPS = [
  "color",
  "backgroundColor",
  "textColor",
  "borderColor",
  "titleColor",
  "thumbOffColor",
  "thumbOnColor",
  "toggleOffColor",
  "toggleOnColor",
  "hintTextColor",
  "minTrackColor",
  "maxTrackColor",
  "thumbColor"
];

const IMAGE_PROPS = [
  "image",
  "backgroundImage",
  "thumbImage",
  "inactiveImage",
  "maxTrackImage",
  "minTrackImage",
  "backIndicatorImage"
];

const FONT_STYLE = {
  BOLD: "BOLD",
  ITALIC: "ITALIC",
  NORMAL: "NORMAL",
  DEFAULT: "NORMAL"
};

const SCW_LAYOUT_PROPS = [
  "alignContent",
  "alignItems",
  "direction",
  "flexDirection",
  "justifyContent",
  "flexWrap",
  "paddingLeft",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "layoutHeight",
  "layoutWidth"
];

const LAYOUT_PROPS_MAP = {
  "layoutHeight": "height",
  "layoutWidth": "width"
};

var _styling = {};
var currentTheme = "Defaults";


/**
 * you can register your theme/s 
 * @param themes {Array}
 */
function registerThemes(themes) {
  var _themes = themes;
  if (!(themes instanceof Array))
    _themes = [themes];
  _themes.forEach(function(theme) {
    _styling[theme] = styler(require("../../themes/" + theme + ".json"));
  });
}

/**
 * you can set active theme
 * @param theme
 * @throws Error If theme not registered, throws an error
 */
function setActiveTheme(theme) {
  if (!_styling[theme])
    throw new Error("ensure that theme registered -> " + theme);
  currentTheme = theme;
}

/*
 * get properties of component
 * @param styling 
 * @param className 
 * @return properties object.
 */
function getPropsFromStyle(styling, className) {
  var resultProps = {};

  styling(className)(function(className, key, value) {
    switch (key) {
      case 'flexProps':
        Object.assign(resultProps, getProps(value));
        break;
      default:
        resultProps[key] = getOneProp(key, value);
    }
  });

  return resultProps;

}

/**
 * @function getCombinedStyle
 * get combined style for components 
 * @param {string} _className name of style class
 * @param {object} [_userStyle={}] user style object
 * @return {object} properties.
 */
function getCombinedStyle(_className, _userStyle) {
  var styling = _styling[currentTheme];
  var userStyle = Object.assign({}, getPropsFromStyle(styling, _className), _userStyle);
  var resStyle = {};
  Object.keys(userStyle).forEach(function(key) {
    (userStyle[key] !== null) && (resStyle[key] = userStyle[key]);
  });
  if (resStyle.flexGrow === 0) { // CID-886
    resStyle.flexBasis = NaN;
  }
  return resStyle;
}

/**
 * @function getCombinedLayoutStyle
 * get combined style for layout components 
 * @param {string} _className name of style class
 * @param {object} [_userStyle={}] user style object
 * @return {object} properties.
 */
function getCombinedLayoutStyle(_className, _userStyle) {
  var styling = _styling[currentTheme];
  var userStyle = Object.assign({}, getPropsFromStyle(styling, _className), _userStyle);
  var resStyle = {};
  SCW_LAYOUT_PROPS.forEach(function(key) {
    (userStyle[key] !== null && userStyle[key] !== undefined) && (resStyle[LAYOUT_PROPS_MAP[key] || key] = userStyle[key]);
  });
  Object.keys(_userStyle).forEach(function(key) {
    (userStyle[key] !== null) && (resStyle[key] = _userStyle[key]);
  });
  if (resStyle.flexGrow === 0) { // CID-886
    resStyle.flexBasis = NaN;
  }
  return resStyle;
}
//get properties
function getProps(objectVal) {
  var props = {};
  Object
    .keys(objectVal)
    .forEach(function(key) {
      if (objectVal[key] !== null)
        props[key] = getOneProp(key, objectVal[key]);
    });
  return props;
}

//TODO Caching Fonts, Colors
/**
 * @function getOneProp
 * get property value 
 * @param {string} key 
 * @param {string/number} [value] value of property
 * @return {object/string/number} properties.
 */
function getOneProp(key, value) {
  var res;
  if (ENUMS[key]) {
    res = ENUMS[key][value];
  }
  else if (COLOR_PROPS.indexOf(key) !== -1) {
    res = createColorForDevice(value);
  }
  else if (IMAGE_PROPS.indexOf(key) !== -1) {
    res = Image.createFromFile("images://" + value);
  }
  else if (key === "font") {
    res = Font.create(value.family || "Font.DEFAULT", value.size || 16, getFontStyle(value));
  }
  else {
    res = value;
  }

  return res;
}

function createColorForDevice(color) {
  var res;
  if (color.startColor) { // gradient color
    res = Color.createGradient({
      startColor: createColorForDevice(color.startColor),
      endColor: createColorForDevice(color.endColor),
      direction: Color.GradientDirection[color.direction]
    });
  }
  else if (/rgb/i.test(color)) {
    var rgba = color.match(/\d\.\d+|\d+/ig);
    res = Color.create((Number(rgba[3]) * 255), Number(rgba[0]), Number(rgba[1]), Number(rgba[2]));
  }
  else {
    res = Color.create(color);
  }
  return res;
}

function getFontStyle(font) {
  var res = "";
  if (font.bold) {
    res += FONT_STYLE.BOLD;
  }
  if (font.italic) {
    res && (res += "_");
    res += FONT_STYLE.ITALIC;
  }!res && (res = FONT_STYLE.DEFAULT);
  return Font[res];
}

module.exports = {
  getCombinedStyle: getCombinedStyle,
  getCombinedLayoutStyle: getCombinedLayoutStyle,
  getPropsFromStyle: getPropsFromStyle,
  registerThemes: registerThemes,
  setActiveTheme: setActiveTheme,
  getOneProp: getOneProp
};
