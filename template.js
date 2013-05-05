/*
 * grunt-init-jquery
 * https://gruntjs.com/
 *
 * Copyright (c) 2012 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Crate an Appular Project.';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'Have Fun!';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
    'install_. After that, you may execute project tasks with _grunt_. For ' +
    'more information about installing and configuring Grunt, please see ' +
    'the Getting Started guide:' +
    '\n\n' +
    'http://gruntjs.com/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

    init.process({}, [
        // Prompt for these values.
        init.prompt('name', 'appular-project'),
        init.prompt('title', 'Appular Project'),
        init.prompt('description', 'The best Appular project ever.'),
        init.prompt('version'),
        init.prompt('repository'),
        init.prompt('homepage'),
        init.prompt('bugs'),
        init.prompt('licenses', 'MIT'),
        init.prompt('author_name'),
        init.prompt('author_email'),
        init.prompt('author_url')
        // {
        //   name: 'style',
        //   message: 'What style technology? (scss, css)',
        //   default: 'scss',
        //   validator: /^[\w\-\.]+$/,
        //   warning: 'Must be only letters, numbers, dashes, dots or underscores. (If this is not for a client, say HOUSE)'
        // }
    ], function(err, props) {
        // Files to copy (and process).
        var files = init.filesToCopy(props);

        // Add properly-named license files.
        init.addLicenseFiles(files, props.licenses);

        // Actually copy (and process) files.
        init.copyAndProcess(files, props, {
            noProcess: 'js/libraries/**'
        });

        // Generate package.json file, used by npm and grunt.
        init.writePackageJSON('package.json', {
            name: 'jquery-plugin',
            version: '0.0.0',
            // TODO: pull from grunt's package.json
            node_version: '>= 0.8.0',
            devDependencies: {
                'grunt-contrib-jshint': '~0.1.1',
                'grunt-contrib-qunit': '~0.1.1',
                'grunt-contrib-concat': '~0.1.2',
                'grunt-contrib-uglify': '~0.1.1',
                'grunt-contrib-watch': '~0.2.0',
                'grunt-contrib-clean': '~0.4.0'
            }
        });

        // All done!
        done();
    });

};