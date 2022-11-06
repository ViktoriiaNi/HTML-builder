const fs = require('fs')
const path = require('path');
const dirPath = path.join(__dirname, 'secret-folder');

fs.readdir(dirPath, {withFileTypes: true}, (err, arr) => {
    if (err) throw err;
    arr.filter(el => el.isFile())
    .map(el => el.name)
    .forEach(el => {
        fs.stat(path.join(dirPath, el), (err, stats) => {
            if (err) throw err;
            console.log(`${path.parse(el).name} - ${path.extname(el).slice(1)} - ${stats.size / 1000}kb`);
        });
    });
});