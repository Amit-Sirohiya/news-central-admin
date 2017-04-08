/**
 * Created by Amit on 28-12-2016.
 */

module.exports = {

    build_dir: 'dist',
    compile_dir: 'bin',
    /**
     * This is a collection of file patterns that refer to our app code (the
     * stuff in `app/`). These file paths are used in the configuration of
     * build tasks. `js` is all project javascript, less tests. `ctpl` contains
     * our reusable components' (`app/common`) templates HTML files, while
     * `atpl` contains the same, but for our app's code. `html` is just our
     * main HTML file.
     */
    app_files: {
        js: ['app/**/*module*.js', 'app/**/*.js'],
        //jsunit: ['test/unit/**/*.spec.js'],

        atpl: ['app/**/*.tpl.html'],
        ctpl: ['app/common/**/*.tpl.html'],

        html: ['app/index.html']
    },
    vendor_files: {
        js: [
            'vendor/jquery/dist/jquery.min.js',
            'vendor/bootstrap/dist/js/bootstrap.min.js',
            'vendor/angular/angular.js',
            'vendor/angular-animate/angular-animate.min.js',
            'vendor/angular-sanitize/angular-sanitize.min.js',
            'vendor/angular-messages/angular-messages.min.js',
            'vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
            'vendor/ngDialog/js/ngDialog.min.js',
            'vendor/toastr/toastr.js',
            'vendor/angular-material/angular-material.js',
            'vendor/angular-aria/angular-aria.min.js',
            'vendor/underscore/underscore-min.js',
            'vendor/angular-ui-router/release/angular-ui-router.js',
            'vendor/ng-lodash/build/ng-lodash.js',
            'vendor/angular-spinner/angular-spinner.js',
            'vendor/angular-cookies/angular-cookies.js',
            'vendor/angular-resource/angular-resource.js',
            'vendor/angular-toastr/dist/angular-toastr.js',
            'vendor/angular-hotkeys/build/hotkeys.js',
            'vendor/ng-file-upload/ng-file-upload.min.js',
            'vendor/moment/moment.js',
            'vendor/bootstrap-daterangepicker/daterangepicker.js',
            'vendor/ng-bs-daterangepicker/src/ng-bs-daterangepicker.js',
            'vendor/angular-indexed-db/angular-indexed-db.js',
            'vendor/jszip/dist/jszip.js',
            'vendor/FileSaver/FileSaver.js',
            'vendor/js-xlsx-style/dist/xlsx.js',
            'vendor/jquery.xml2json/src/jquery.xml2json.js',
            'vendor/angular-confirm-modal/angular-confirm.js'
        ],

        css: [
            'vendor/fontawesome/css/font-awesome.min.css',
            'vendor/bootstrap/dist/css/bootstrap.min.css',
            'vendor/bootstrap/dist/css/bootstrap-theme.min.css',
            'vendor/angular-material/angular-material.min.css',
            'vendor/angular-hotkeys/build/hotkeys.css',
            'vendor/ag-grid/dist/angular-grid.css',
            'vendor/ag-grid/dist/theme-fresh.css',
            'vendor/ngDialog/css/ngDialog.css',
            'vendor/ngDialog/css/ngDialog-theme-default.css',
            'vendor/jquery-svg/jquery.svg.css',
            'vendor/bootstrap-daterangepicker/daterangepicker-bs3.css',
            'vendor/angular-toastr/dist/angular-toastr.css'
        ],
        assets: {
            images: [
                "vendor/material-design-icons/*/svg/production/*.svg"
            ],
            font: [
                'vendor/fontawesome/fonts/*.*'
            ]
        }
    }

};