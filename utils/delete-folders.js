var del = require('delete');

del.sync(['lib/.generated/*.js', 'lib/.generated/*.json']);
