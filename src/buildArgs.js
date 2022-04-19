/**
 *
 * buildArgs.js - build arguments for the command
 *
 **/

 module.exports = function (projectDir, options) {
  var args = []
    , defaultIn = `${projectDir}/src/client/scss`
    , defaultOut = `${projectDir}/dist/client/css`
    ;

  if (options.input) {
    defaultIn = `${projectDir}/${options.input}`;
  }

  if (options.output) {
    defaultOut = `${projectDir}/${options.output}`;
  }

  // set input source
  args.push(defaultIn);

  // set output directory
  args.push('-o');
  args.push(defaultOut);
  args.push('--source-map-embed');
  args.push('-v');
  args.push('--output-style=compressed');

  return args;
};
