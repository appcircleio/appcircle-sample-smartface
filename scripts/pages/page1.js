const touch = require("sf-extension-utils/lib/touch");
const componentContextPatch = require("@smartface/contx/lib/smartface/componentContextPatch");
const PageTitleLayout = require("components/PageTitleLayout");

const extend = require("js-base/core/extend");
const System = require("sf-core/device/system");
const ImageView = require("sf-core/ui/imageview");
const Image = require("sf-core/ui/image");
const Color = require("sf-core/ui/color");
import ListView = require('sf-core/ui/listview');
import ListViewItem = require('sf-core/ui/listviewitem');

// Get generated UI code
const Page1Design = require("ui/ui_page1");

const Page1 = extend(Page1Design)(
    // Constructor
    function(_super, routeData, router) {
        // Initalizes super class for this page scope
        _super(this);
        // Overrides super.onShow method
        this.onShow = onShow.bind(this, this.onShow.bind(this));
        // Overrides super.onLoad method
        this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
        this.btnNext.onPress = () => {
            this.router.push("/pages/page2", { message: "Hello World!" });
        };
    });

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {function} superOnShow super onShow function
 * @param {Object} parameters passed from Router.go function
 */
function onShow(superOnShow) {
    superOnShow();
    this.headerBar.titleLayout.applyLayout();
}
/**
 * 
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
    superOnLoad();
    this.headerBar.leftItemEnabled = false;
    this.headerBar.titleLayout = new PageTitleLayout();
    componentContextPatch(this.headerBar.titleLayout, "titleLayout");
    if (System.OS === "Android") {
        this.headerBar.title = "";
    }
    
    this.myListView = new ListView({
        itemCount: 30,
        flexGrow: 1
    });

    this.myListView.height = 300;
    this.myListView.rowHeight = 70;

    this.myListView.onRowCreate = () => {
        let myListViewItem = new ListViewItem();

        myListViewItem.backgroundColor = Color.GRAY;

        let myLabelTitle = new Label({
            flexGrow: 1
        });

        let imgView = new ImageView({
            image: Image.createFromFile("images://smartface.png"),
            width: 70,
            height: 60
        })

        myLabelTitle.textColor = Color.WHITE;
        myLabelTitle.borderRadius = 10;
        
        //@ts-ignore
        myListViewItem.addChild(myLabelTitle);
        myListViewItem.addChild(imgView);
        //@ts-ignore
        myListViewItem.myLabelTitle = myLabelTitle;
        return myListViewItem;
    };
    this.myListView.onRowBind = (listViewItem, index) => {
        let myLabelTitle = listViewItem.myLabelTitle;
        myLabelTitle.text = "Index " + index;
    };

    this.layout.addChild(this.myListView);
}

module.exports = Page1;
