function COSPlugin(options) {
    
}

COSPlugin.prototype.apply = function(compiler) {

    compiler.plugin("emit", function(compilation, callback) {

        for (var filename in compilation.assets) {
            console.log(filename)
        }

        callback();
    });
}

module.exports = COSPlugin;