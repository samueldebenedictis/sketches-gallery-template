# Sketches Gallery

This is a boilerplate for a simple static React website compatible with GitHub Pages for collecting sketches made with [canvas-sketch](https://github.com/mattdesl/canvas-sketch).

Live demo: https://samueldebenedictis.github.io/

## Documentation

All available commands can be found in the Makefile.

## Install
```bash
make install
```
## Run in development mode
```bash
make start-dev
```
## Build a sketch
Sketches must be created with **canvas-sketch** in order to build them.
In the `.env` file, specify the path to the sketches and the sketch name as follows:
```env
SKETCH_PATH=path/to/sketches
SKETCH_NAME=001
```
and run
```bash
make build-sketch
```
to build the sketch and export it in the `public/pages` directory.
**Note:** the sketch path in the Makefile is `${SKETCH_PATH}/${SKETCH_NAME}.js`

# Build the index
Once all the desired sketches are built, an index of pages needs to be generated. Unfortunately, in React, you can't use the `fs` module, and the `require()` function doesn't work with dynamic values. To build a data index, execute the following command:
```bash
make build-index
```
This will run a suite of headless tests in **Playwright** that creates covers and recreates `dataSketches.json`.
The generated covers will be stored in `public/pages/${SKETCH_NAME}/` and represent snapshots of the canvas in the headless browser.

# Deploy to GitHub pages
In `package.json`, set the `homepage` value according to the GitHub guides. Then, use the following command to deploy:
```bash
make deploy
```

# Costumization
There's not much to costumize, but in `dataStatic.ts` some values can be changed:

```ts
title // the homepage title
subtitle // the subtitle
text // an array of string to display

blackAndWhiteSwitch // if true, gallery homepage covers are desaturated
randomSwitch // if true, gallery homepage covers are randomized

items // objects of strings to display at bottom page
```

Happy coding! ❤