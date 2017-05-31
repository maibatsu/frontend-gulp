# Frontend-gulp
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/maibatsu/frontend-gulp/master/LICENSE)

**Required:** [Node.js](https://nodejs.org/), [NPM](https://www.npmjs.com/), [gulp.js](http://gulpjs.com/)


## Features

**CSS:** Sourcemaps, autoprefixes css, minifies css, normalize.

**Linting & Auto-formatting CSS/SCSS:** Stylelint, Stylefmt and cssComb (sorting properties).

**Images:** Optimise PNGs, JPGs, SVGs, and GIFs.

**JavaScript:** Minify javascript files.

**Web server:** BrowserSync monitors the directory defined in baseDir and whenever we edit project files, the page reloads.

**Clean:** Deletes 'build' directory.

## Project Structure
```
+-- node_modules/
+-- build/
|   +-- css/
|   +-- js/
|   +-- img/
|   +-- index.html
+-- src/
|   +-- sass/
|   +-- js/
|   +-- img/
|   +-- index.html
+-- .gitignore
+-- gulpfile.js
+-- package.json
+-- .csscomb.json
+-- .stylelintrc
+-- README.md
```
## Getting started
```
1. ~$:cd projectname

2. ~$:git clone https://github.com/maibatsu/frontend-gulp.git

3. ~$:npm i
```

### Linting & Auto-formatting CSS/SCSS:

```
~$: npm run stylelint
```
```
~$: npm run stylefmt
```
```
~$: npm run csscomb
```
```
~$: npm run prettyfy-styles
```

### Gulp commands:

```
~$: gulp default
```
```
~$: gulp build
```
```
~$: gulp buid:style
```
```
~$: gulp buid:js
```
```
~$: gulp buid:image
```
```
~$: gulp webserver
```
```
~$: gulp clean
```
```
~$: gulp watch
```

#### TODO:
* Add demo


## [License](LICENSE)
