/* globals lang */
require("i18n/i18n.js"); // Generates global lang object

const Application = require("sf-core/application");
const OS = require('sf-core/device/system').OS;
const SliderDrawer = require('sf-core/ui/sliderdrawer');
const FlexLayout = require('sf-core/ui/flexlayout');
const Button = require('sf-core/ui/button');
const Label = require('sf-core/ui/label');
const Color = require('sf-core/ui/color');

// Set uncaught exception handler, all exceptions that are not caught will
// trigger onUnhandledError callback.
Application.onUnhandledError = function(e) {
    alert({
        title: e.type || lang.applicationError,
        message: OS === "Android" ? e.stack : (e.message + "\n\n*" + e.stack)
    });
};

require("sf-extension-utils");
require("./theme");
const router = require("./routes");
router.push("/pages/page1");

var mySliderDrawer = new SliderDrawer({
    width: 200
});
var myButton = new Button({
    height: 40,
    width: 100,
    left: 10,
    top: 90,
    backgroundColor: Color.BLUE,
    text: "My button",
    positionType: FlexLayout.PositionType.ABSOLUTE
});

var myLabel = new Label({
    height: 40,
    width: 150,
    left: 10,
    top: 150,
    text: "Smartface Label Text",
    backgroundColor: Color.RED,
    positionType: FlexLayout.PositionType.ABSOLUTE
});

mySliderDrawer.drawerPosition = SliderDrawer.Position.LEFT;
mySliderDrawer.layout.addChild(myButton);
mySliderDrawer.layout.backgroundColor = Color.YELLOW;
mySliderDrawer.layout.addChild(myLabel);

Application.sliderDrawer = mySliderDrawer;
