/**
 * Created by Amit on 28-12-2016.
 */


module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);
    var config = require('./app.config.js');

    var userConfig = {
        clean: {
            build: [
                config.build_dir
            ]
        },

        /**
         * The `copy` task just copies files from A to B. We use it here to copy
         * our project assets (images, fonts, etc.) and javascripts into
         * `build_dir`
         */
        copy: {
            build_app_assets: {
                files: [{
                    src: ['**'],
                    dest: config.build_dir + '/assets/',
                    cwd: 'assets',
                    expand: true
                }]
            },
            build_appjs: {
                files: [{
                    src: [config.app_files.js],
                    dest: config.build_dir + '/',
                    cwd: '.',
                    expand: true
                }]
            },
            build_vendorjs: {
                files: [{
                    src: [config.vendor_files.js],
                    dest: config.build_dir + '/',
                    cwd: '.',
                    expand: true
                }]
            },
            build_vendor_fonts: {
                files: [{
                    src: [config.vendor_files.assets.font],
                    dest: config.build_dir + '/assets/fonts',
                    cwd: '.',
                    flatten: true,
                    expand: true
                }]
            },
            build_vendor_images: {
                files: [{
                    src: [config.vendor_files.assets.images],
                    dest: config.build_dir + '/assets/img/icons',
                    cwd: '.',
                    flatten: true,
                    expand: true
                }]
            }
        },
        concat: {
            /**
             * The `build_css` target concatenates compiled CSS and vendor CSS
             * together.
             */
            build_css: {
                src: [
                    'app.css',
                    config.vendor_files.css,
                    config.build_dir + '/assets/css/*.css'
                ],
                dest: config.build_dir + '/assets/css/app.css'
            }
        },
        /**
         * 'jshint' defines the rules of our linter as well as which files we
         * should check. This file, all javascript sources, and all our unit tests
         * are linted based on the policies listed in 'options'. But we can also
         * specify exclusionary patterns by prefixing them with an exclamation
         * point (!); this is useful when code comes from a third party but is
         * nonetheless inside 'src/'.
         */
        jshint: {
            src: [ config.app_files.js ],
            gruntfile: [
                'gruntfile.js'
            ],
            options: {
                curly: true,
                node: true,
                immed: true,
                newcap: true,
                noarg: true,
                laxcomma: true,
                sub: true,
                boss: true,
                eqnull: true,
                "predef": ["angular", "routingConfig"],
                reporterOutput: ""
            },
            globals: {}
        },

        /**
         * HTML2JS is a Grunt plugin that takes all of your templates files and
         * places them into JavaScript files as strings that are added to
         * AngularJS's templates cache. This means that the templates too become
         * part of the initial payload as one JavaScript file. Neat!
         */
        html2js: {
            /**
             * These are the templates from `app`.
             */
            app: {
                options: {
                    base: 'app/'
                },
                src: [config.app_files.atpl],
                dest: config.build_dir + '/templates-app.js'
            },

            /**
             * These are the templates from `app/common`.
             */
            common: {
                options: {
                    base: 'app/common'
                },
                src: [config.app_files.ctpl],
                dest: config.build_dir + '/templates-common.js'
            }
        },

        /**
         * The 'index' task compiles the 'index.html' file as a Grunt templates. CSS
         * and JS files co-exist here but they get split apart later.
         */
        index: {

            /**
             * During development, we don't want to have wait for compilation,
             * concatenation, minification, etc. So to avoid these steps, we simply
             * add all script files directly to the '<head>' of 'index.html'. The
             * 'src' property contains the list of included files.
             */
            build: {
                dir: config.build_dir,
                src: [
                    config.vendor_files.js,
                    config.build_dir + '/app/**/*module*.js',
                    config.build_dir + '/app/**/*.js',
                    '<%= html2js.common.dest %>',
                    '<%= html2js.app.dest %>',
                    config.build_dir + '/assets/css/app.css'
                ]
            }
        },

        connect: {

            //proxies: [{
            //    context: '/crimson',
            //    host: '<%=server.dev.host%>',
            //    port: '<%=server.dev.port%>',
            //    headers: {host: '<%=server.dev.host%>'},
            //    https: false,
            //    changeOrigin: false
            //}],
            options: {
                port: '9001',
                // Change this to 'localhost' to deny access to the server from outside.
                hostname: 'localhost',
                livereload: 35730,
                ws: true
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        'dist'
                    ],
                    middleware: function (connect) {
                        var proxy = require('grunt-connect-proxy/lib/utils').proxyRequest;

                        return [
                            proxy,
                            connect.static(require('path').resolve('dist'))
                        ];
                    }
                }
            }
        },
        /**
         * And for rapid development, we have a watch set up that checks to see if
         * any of the files listed below change, and then to execute the listed
         * tasks when they do. This just saves us from having to type "grunt" into
         * the command-line every time we want to see what we're working on; we can
         * instead just leave "grunt watch" running in a background terminal. Set it
         * and forget it, as Ron Popeil used to tell us.
         *
         * But we don't need the same thing to happen for all the files.
         */
        delta: {
            /**
             * By default, we want the Live Reload to work for all tasks; this is
             * overridden in some tasks (like this file) where browser resources are
             * unaffected. It runs by default on port 35729, which your browser
             * plugin should auto-detect.
             */
            options: {
                livereload: true
            },

            /**
             * When the Gruntfile changes, we just want to lint it. In fact, when
             * your Gruntfile changes, it will automatically be reloaded!
             */
            gruntfile: {
                files: 'Gruntfile.js',
                tasks: ['jshint:gruntfile'],
                options: {
                    livereload: false
                }
            },

            /**
             * When our JavaScript source files change, we want to run lint them and
             * run our unit tests.
             */
            jssrc: {
                files: [
                    config.app_files.js
                ],
                tasks: ['jshint:src', /*'karma:unit:run',*/ 'copy:build_appjs']
            },

            /**
             * When assets are changed, copy them. Note that this will *not* copy new
             * files, so this is probably not very useful.
             */
            assets: {
                files: [
                    'app/assets/**/*'
                ],
                tasks: ['copy:build_app_assets', 'copy:build_vendor_assets']
            },

            /**
             * When index.html changes, we need to compile it.
             */
            html: {
                files: [config.app_files.html],
                tasks: ['index:build']
            },

            /**
             * When our templates change, we only rewrite the templates cache.
             */
            tpls: {
                files: [
                    config.app_files.atpl,
                    config.app_files.ctpl
                ],
                tasks: ['html2js', 'index:build']
            }
        }

    };

    grunt.initConfig(userConfig);

    grunt.renameTask('watch', 'delta');
    grunt.registerTask('watch', ['build','configureProxies', 'connect:livereload', 'delta']);

    // The 'build' task gets your app ready to run for development and testing.
    grunt.registerTask('build', [
        'clean:build', 'html2js', 'jshint', 'concat:build_css','copy:build_app_assets',
        'copy:build_appjs', 'copy:build_vendorjs', 'copy:build_vendor_fonts', 'copy:build_vendor_images',
        'index:build'
    ]);

    // A utility function to get all app JavaScript sources.
    function filterForJS(files) {
        return files.filter(function(file) {
            return file.match(/\.js$/);
        });
    }

    // A utility function to get all app CSS sources.
    function filterForCSS(files) {
        return files.filter(function(file) {
            return file.match(/\.css$/);
        });
    }

    // The index.html templates includes the stylesheet and javascript sources
    // based on dynamic names calculated in this Gruntfile. This task assembles
    // the list into variables for the templates to use and then runs the
    // compilation.
    grunt.registerMultiTask('index', 'Process index.html templates', function() {
        var dirRE = new RegExp('^(dist)\/', 'g');

        // this.fileSrc comes from either build:src, or karmaconfig:src in the index config defined above
        // see - http://gruntjs.com/api/inside-tasks#this.filessrc for documentation
        var jsFiles = filterForJS(this.filesSrc).map(function(file) {
            return file.replace(dirRE, '');
        });
        var cssFiles = filterForCSS(this.filesSrc).map(function(file) {
            return file.replace(dirRE, '');
        });

        // this.data.dir comes from either build:dir, or karmaconfig:dir in the index config defined above
        // see - http://gruntjs.com/api/inside-tasks#this.data for documentation
        grunt.file.copy('app/index.html', this.data.dir + '/index.html', {
            process: function(contents, path) {
                // These are the variables looped over in our index.html exposed as "scripts", "styles", and "version"
                return grunt.template.process(contents, {
                    data: {
                        scripts: jsFiles,
                        styles: cssFiles,
                        date: grunt.template.today("yyyy")
                    }
                });
            }
        });
    });

};