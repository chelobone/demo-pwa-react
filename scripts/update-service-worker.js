const fs = require('fs');
const assetManifest = require('../build/asset-manifest.json');
const { json } = require('stream/consumers');

const urls = Object.values(assetManifest.files).filter(name => !name.includes('.map'))

fs.readFile('build/service-worker.js', 'utf8', (error, content) => {
    console.log(urls);
    let newContent = content.replace('HASHURLS', JSON.stringify(urls));

    newContent = newContent.replace('JSON.parse("','');
    newContent = newContent.replace('index.html"]")','index.html"]')
    fs.writeFile('build/service-worker.js', newContent, (error) => {
        error ? console.log(`Error: ${error}`) : console.log(`Success`)
    });
});