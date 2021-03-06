/*
 * Dev Config Settings
 */
requirejs.config({
    waitSeconds: 0,
    baseUrl: '/js',
    config: {
        'appular': {
            env: 'develop'
        }
    },
    paths: {
        'appular': 'libraries/appular/appular',
        'jquery': 'libraries/jquery/jquery',
        'jqueryFunctions': 'libraries/jquery/extensions/functions',
        'underscore': 'libraries/underscore/underscore',
        'underscoreTemplate': 'libraries/underscore/extensions/template',
        'backbone': 'libraries/backbone/backbone',
        'backboneStickit': 'libraries/backbone/extensions/stickit',
        'domReady': 'libraries/require/plugins/domReady',
        'template': 'libraries/require/plugins/template',
        'text': 'libraries/require/plugins/text'
    },
    deps: [
        'jqueryFunctions',
        'underscoreTemplate',
        'backboneStickit'
    ],
    callback: function () {
        require([
            'appular'
        ], function (Appular) {
            Appular.render();
        });
    }
});