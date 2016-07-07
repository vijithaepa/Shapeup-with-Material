/**
 * Created by EpaV on 06/07/2016.
 */

(function () {
    'use strict';

    var app = angular.module('MyApp', ['ngMaterial', 'users']);

    app.config(function ($mdThemingProvider, $mdIconProvider) {
        $mdIconProvider
            .defaultIconSet("images/svg/young-avatar-collection.svg", 128);
        $mdIconProvider.icon('share', 'images/svg/share-1.svg', 24);
        $mdIconProvider.icon('menu', 'images/svg/menu-1.svg', 24);

        $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('red');
    });

    // app.run(function () {
    //     console.log('My App is ready');
    // });


})();
