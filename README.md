# Mc3make readme

Generated on 2016-09-30 using
[generator-yeogurt@1.5.3](https://github.com/larsonjj/generator-yeogurt)

## Description

Static site for mc3make event

### Site Requirements

Outline of site requirements

* two pages
    * home page
    * information page


* header for home page should have links to the following
    * home page
    * information page
    * sponsor section
    * register now


* header for information page should have links to the following
    * home page
    * information page
    * time & location
    * schedule section
    * rules section
    * faq section
    * register now


* home page
    * should have a header section with a logo, date, and location
    * should have a tagline
    * should have a section for sponsors
    * should have a section to register
    * should have a footer to contact us


* information page
    * should have the data and location, including times
    * should have a schedule of events
    * should have a section for explaining who can participate
    * should have a section which explains the theme
    * should have a section for rules and code of conduct
    * should have a section for frequently asked questions (hidden, if none are available at the moment)
    * should have a footer to contact us


* register now section needs to have a link to mhl to sign up


## Technologies used

JavaScript
- [Browserify](http://browserify.org/) with ES6/2015 support through [Babel](https://babeljs.io/)
- [Node](https://nodejs.org/)

Styles
- [Sass](http://sass-lang.com/) via ([node-sass](https://github.com/sass/node-sass))

Markup
- [Jade](http://jade-lang.com/)

Optimization
- [Imagemin](https://github.com/imagemin/imagemin)
- [Uglify](https://github.com/mishoo/UglifyJS)

Server
- [BrowserSync](http://www.browsersync.io/)

Linting
- [ESlint](http://eslint.org/)

Automation
- [Gulp](http://gulpjs.com)

Code Management
- [Editorconfig](http://editorconfig.org/)
- [Git](https://git-scm.com/)


## Automated tasks

This project uses [Gulp](http://gulpjs.com) to run automated tasks for development and production builds.
The tasks are as follows:

`gulp --production`: Same as `gulp serve --production` also run `gulp test` and  not boot up production server

`gulp serve`: Compiles preprocessors and boots up development server
`gulp serve --open`: Same as `gulp serve` but will also open up site/app in your default browser
`gulp serve --production`: Same as `gulp serve` but will run all production tasks so you can view the site/app in it's final optimized form

`gulp test`: Lints all `*.js` file in the `source` folder using eslint

***Adding the `--debug` option to any gulp task displays extra debugging information (ex. data being loaded into your templates)***
