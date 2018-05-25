function getDependencies(tree, arrayOfDependencies) {
    arrayOfDependencies = arrayOfDependencies || [];
        if(tree) {
            if (tree.dependencies) {
                var keys = Object.keys(tree.dependencies);
                keys.forEach(function(key){
                    var moduleDependencyString = key + '@' +  tree.dependencies[key].version;

                    if(!arrayOfDependencies.includes(moduleDependencyString)){
                        arrayOfDependencies.push(moduleDependencyString);
                    }

                    getDependencies(tree.dependencies[key], arrayOfDependencies);
                })
            }
        }
    return arrayOfDependencies.sort()
}

module.exports = getDependencies


// ## Example
//
// var loremIpsum = {
//     "name": "lorem-ipsum",
//     "version": "0.1.1",
//     "dependencies": {
//         "optimist": {
//             "version": "0.3.7",
//             "dependencies": {
//                 "wordwrap": {
//                     "version": "0.0.2"
//                 }
//             }
//         },
//         "inflection": {
//             "version": "1.2.6"
//         }
//     }
// }
//
// getDependencies(loremIpsum) // => [ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2' ]


/*
'getDependencies(fullTree)',
[ 'bl@0.4.1',
    'charm@0.1.2',
    'colors-tmpl@0.1.0',
    'colors@0.6.2',
    'functional-javascript-workshop@0.0.13',
    'inflection@1.2.6',
    'inherits@2.0.1',
    'lorem-ipsum@0.1.1',
    'map-async@0.1.1',
    'minimist@0.0.4',
    'mkdirp@0.3.5',
    'object-keys@0.4.0',
    'optimist@0.3.7',
    'optimist@0.6.0',
    'pygmentize-bundled@2.1.0',
    'readable-stream@1.0.17',
    'resumer@0.0.0',
    'split@0.2.10',
    'terminal-menu@0.1.0',
    'through2@0.2.1',
    'through@2.3.4',
    'tuple-stream@0.0.2',
    'wordwrap@0.0.2',
    'wordwrap@0.0.2',
    'workshopper@0.3.3',
    'xtend@2.1.1' ] ]

 */

/*[  'getDependencies(fullTree)',
[ 'bl@0.4.1',
    'charm@0.1.2',
    'colors-tmpl@0.1.0',
    'colors@0.6.2',
    'inflection@1.2.6',
    'inherits@2.0.1',
    'lorem-ipsum@0.1.1',
    'map-async@0.1.1',
    'minimist@0.0.4',
    'mkdirp@0.3.5',
    'object-keys@0.4.0',
    'optimist@0.3.7',
    'optimist@0.6.0',
    'pygmentize-bundled@2.1.0',
    'readable-stream@1.0.17',
    'resumer@0.0.0',
    'split@0.2.10',
    'terminal-menu@0.1.0',
    'through2@0.2.1',
    'through@2.3.4',
    'tuple-stream@0.0.2',
    'wordwrap@0.0.2',
    'workshopper@0.3.3',
    'xtend@2.1.1' ]  */