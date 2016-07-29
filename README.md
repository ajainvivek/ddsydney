# Deloitte Digital Sydney Assignment

The programming assignment for Deloitte Digital Sydney.

## Run the app locally

After downloading, run:
	npm install
  bower install
  grunt (Open the app on browser)

## Notes

Here are some of the things I have done:

* Used FireShell frontend boilerplate to kickstart quickly.
* Used Bootstrap 3 for grid system, modal, carousel, icons & basic styling.
* Added typography 'Avenir-Black', 'Avenir-Roman' & 'Baskervile-Italic'.
* Handled responsive behavior for mobile, tablet and desktop.
* 'tabindex' was added for accessibility 'div' elements.
* 'ARIA' Label wasn't included.
* On click of images without caption modal dialog appears.
* SASS Preprocessor was used for styling.
* Tested on Chrome, Safari (Mac OS)
* Compiled files are generated in app folder.
* 'Baskervile-Italic' font throws warning on console. Since, it is expecting various font formats to support all browsers but I could only grab 'ttf' format over internet.


## Scaffolding

````
├── app
│   ├── apple-touch-icon-precomposed.png
│   ├── assets
│   │   ├── css
│   │   ├── fonts
│   │   ├── img
│   │   └── js
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── js
│   │   └── scripts.js
│   └── scss
│       ├── mixins
│       ├── modules
│       ├── partials
│       ├── vendor
│       └── style.scss
├── grunt-build.command
├── grunt-build.bat
├── grunt-dev.command
├── grunt-dev.bat
├── package.json
├── README.md
├── .editorconfig
├── .gitignore
├── .jshintrc
└── .travis.yml
````

## DOM Hierarchy

````
├── header
│   ├── navigation
│   └──banner
│       ├── image
│       ├── image
│       └── image
└── main
│      ├──top
│      |    ├── content
│      |    ├── 1*large image
│      |    ├── sub content
│      |    ├── 1*large image
│      |    └── 2*large image
│      ├──middle
│      |    └── content
│      |          ├── left
│      |          └── right
│      └──bottom
│          ├── content
│          ├── 1*large image
│          ├── wrapper
│          |     ├── 1*caption
│          |     └── 1*large image
│          ├── sub content
│          └── wrapper
│                ├── 2*caption
│                └── 2*large image
└── footer
│       ├── content
│       ├── 4*project content
│       └── copyright
│                
└── modal
````

## Dependencies

* FireShell boilerplate
* Bootstrap 3 - (Grid, Modal, Carousel, Glyphy Icons)
* SASS - CSS Pre-compiler
* jQuery - DOM Manipulation
