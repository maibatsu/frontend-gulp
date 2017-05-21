# Frontend-gulp

**Required:** [Node.js](https://nodejs.org/), [NPM](https://www.npmjs.com/), [gulp.js](http://gulpjs.com/)


## Features

**CSS:** Sourcemaps, autoprefixes css, minifies css.

**Images:** Optimise PNGs, JPGs, SVGs, and GIFs.

**Clean:** Deletes 'build' directory.

**JavaScript:** Minify javascript files.

**Web server:** BrowserSync monitors the directory defined in baseDir and whenever we edit project files, the page reloads.

## Project Structure
```
+-- node_modules/
+-- build/
|   +-- css/
|   +-- js/
|   +-- img/
|   +-- fonts/
|   +-- index.html
+-- src/
|   +-- sass/
|   +-- js/
|   +-- img/
|   +-- fonts/
|   +-- index.html
+-- .gitignore
+-- gulpfile.js
+-- package.json
+-- README.md
```
## Getting started
```
1. ~$:git clone git@github.com:user/frontend-gulp.git projectname

2. ~$:cd projectname

3. ~$:npm i
```

### Gulp commands

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
