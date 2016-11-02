/**
 *  index.js launch the application.
 *
 *  @author  David
 *  @date    Nov 1, 2016
 *
 */
let a =[1,2];
let b =[3,4];
console.log([...a,b])
require.ensure(['splash-screen/dist/splash.min.css', 'splash-screen'], function(require) {

    require('splash-screen/dist/splash.min.css').use();
    require('splash-screen').Splash.enable('circular');
});

require.ensure(['styles/main.scss', 'splash-screen', './main.js'], function(require) {

    require('styles/main.scss');

    var App = require('./main.js').default;
    new App().run();
});
