var copydir = require('copy-dir');
var copy = require('copy');
 
copydir.sync('styles/', 'lib/styles/');

copy('components/**/*.scss', 'lib/components/', function(err, file) {
  // exposes the vinyl `file` created when the file is copied
});

// copy(['index.js', 'package.json'], 'lib/', function(err, file) {
//     // exposes the vinyl `file` created when the file is copied
// });
