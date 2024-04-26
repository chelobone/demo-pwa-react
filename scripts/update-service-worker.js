const fs = require('fs');
const assetManifest = require('../build/asset-manifest.json');

const urls = Object.values(assetManifest.files).filter(name => !name.includes('.map'))

fs.readFile('build/service-worker.js', 'utf8', (error, content) => {
console.log(content);
  const newContent = content.replace("%HASHURLS%", JSON.stringify(urls));

  fs.writeFile('build/service-worker.js', newContent, (error) => {
    error ? console.log(`Error: ${error}`) : console.log(`Success`)
  });
});