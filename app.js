const yargs = require('yargs');
//const _ = require('lodash');

const notes = ('./notes.js');

const argv = yargs
    .alias('t', 'title')
    .help()
    .argv;

const command = argv._[0];