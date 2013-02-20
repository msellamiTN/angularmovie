basePath = '../../app';

files = [
    JASMINE,
    JASMINE_ADAPTER,
    'js/lib/jquery/jquery.js',
    'js/lib/bootstrap/bootstrap.js',
    'js/lib/angular/angular.min.js',
    'js/lib/angularstrap/angularstrap.js',
    '../test/lib/angular-mocks.js',

    'js/*.js',
    '../test/unit/**/*.js',

    // templates
    'partials/*.html'
];

preprocessors = {
    '**/*.html': 'html2js'
};

logLevel = 'debug';

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
    outputFile: 'test_out/unit.xml',
    suite: 'unit'
};
