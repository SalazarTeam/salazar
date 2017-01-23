console.log('Hello world!');



//var page = require('webpage').create();
// page.open('http://www.youtube.com', function(status) {
//   console.log("Status: " + status);
//   if(status === "success") {
//     page.render('youtube.png');
//   }
//   phantom.exit();
// });

// var page = require('webpage').create();
// page.open('http://www.google.com', function(status) {
//   var title = page.evaluate(function() {
//     return document.title;
//   });
//   console.log('Page title is ' + title);
//   phantom.exit();
// });
//
var page    = new WebPage(),
    address = 'http://localhost:3000/';

page.viewportSize = {
    width  : 800,
    height : 600
};

// define the components we want to capture
var components = [{
    output : 'snap1.png',
    //ExtJS has a nice component query engine
    selector : 'snap1'
}
//,

// {
//     output : 'feed-viewer-preview-btn.png',
//     selector : 'feeddetail > feedgrid > toolbar > cycle'
// },

// {
//     output : 'feed-viewer-collapsed.png',
//     //executed before the rendering
//     before : function(){
//         var panel = Ext.ComponentQuery.query('feedpanel')[0];
//         panel.animCollapse = false; // cancel animation, no need to wait before capture
//         panel.collapse();
//     },
//     selector : 'viewport'
// }
];

page.open(address, function (status) {
    if (status !== 'success') {
        console.log('Unable to load the address!');
    } else {
        /*
         * give some time to ExtJS to
         *   - render the application
         *   - load asynchronous data
         */
        window.setTimeout(function () {
            components.forEach(function(component){
                //execute the before function
                component.before && page.evaluate(component.before);
                // get the rectangular area to capture
                /*
                 * page.evaluate() is sandboxed
                 * so that 'component' is not defined.
                 *
                 * It should be possible to pass variables in phantomjs 1.5
                 * but for now, workaround!
                 */
                eval('function workaround(){ window.componentSelector = "' + component.selector + '";}')
                page.evaluate(workaround);

                var rect = page.evaluate(function(){
                    // find the component
                    var comp = Ext.ComponentQuery.query(window.componentSelector)[0];
                    // get its bounding box
                    var box = comp.el.getBox();
                    // box is {x, y, width, height}
                    // we want {top, left, width, height}
                    box.top  = box.y;
                    box.left = box.x;
                    return box;
                });
                page.clipRect = rect;
                page.render(component.output);
            });
            // job done, exit
            phantom.exit();
        }, 2000);
    }
});
