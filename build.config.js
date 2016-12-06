/**
 * Created by Amit on 06-12-2016.
 */

module.exports = {

    build_dir: 'dist',
    compile_dir: 'bin',
    client: {
        host:'news-central', port: 9001
    },
    server: {

    },
    atpl: ['src/app/**/*.tpl.html'],
    ctpl: ['src/common/**/*.tpl.html'],

    html: ['src/index.html'],
    sass: ['src/sass/styles.scss'],
    sample_input: ['src/sample_input/*.json'],

    app_files: {
        js: [],
        css: []
    },
    vendor_files: {
        js: [],
        css: []
    }

};
