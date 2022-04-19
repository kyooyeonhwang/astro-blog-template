/**
*
* astro-sass: astro module for transpiling SASS using node-sass
*
**/

'use strict';

var buildArgs = require('./buildArgs')
	, path = require('path')
	, fs = require('fs')
	;

module.exports = function (projectDir, options) {
	var args = buildArgs(projectDir, options)
		, cmd = path.resolve(fs.realpathSync(__dirname), '../' ,'./node_modules/.bin/node-sass');

	//setup
	return { cmd: cmd, args: args };
};
