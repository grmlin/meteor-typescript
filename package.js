/*global Package*/
Package.describe({
    summary : "TypeScript, a typed superset of Javascript that compiles to plain Javascript"
});

var ERROR = "\nTypeScript compilation failed!\n";
ERROR = ERROR + (new Array(ERROR.length - 1).join("-")) + "\n";
var fs = require('fs');

// XXX Use other npm packages. Seen in the handlebars package ;)
var execSync = require('../../packages/typescript/node_modules/exec-sync');

Package.register_extension("ts", function (bundle, source_path, serve_path, where) {
    var compileOut = source_path + '.compiled_typescript_js', // using `.js` as an extension would cause Meteor to load this file
        compileCommand = 'tsc --out ' + compileOut + " " + source_path, // add client,server module type switch? 
        bundlePath = serve_path + '.js',
        result = null;

    // Compile the TypeScript file with the TypeScript command line compiler. 
    // Until the TypeScript module provides a public API there is no reliable way around it without changing the
    // TypeScript sources.
    try {
        result = execSync(compileCommand);
    } catch (e) {
        bundle.error(ERROR + e);
    }

    if (fs.existsSync(compileOut)) {
        if (result !== null) {
            bundle.add_resource({
                type : "js",
                path : bundlePath,
                data : new Buffer(fs.readFileSync(compileOut)),
                where : where
            });
        }
        //Delete the created file afterwards and add the content to the bundle
        fs.unlinkSync(compileOut);
    } else {
        bundle.error(ERROR);
    }
});