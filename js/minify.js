//! only meant to be used on a local computer!

const minify = require('minify');
const fs = require('fs');
const options = {
    js: {
        compress: {
            booleans_as_integers: true,
        },
        format: {
            comments: false,
            keep_numbers: true,
        },
    },
    css: {
        format: {
            comments: false,
        },
    }
};

[ './index.js', './form.js', '../data/data.js', '../css/form.css', '../css/styles.css' ].forEach(file => {
    minify(file, options)
    .then(text => {
        let filename = file.replace(/^(.+)\.(.+?)$/, '$1.min.$2');
        fs.writeFile(filename, text, function (err) {
            if (err) throw err;
            console.log(`Processed ${file}!`);
        });
    })
    .catch(console.error);
})