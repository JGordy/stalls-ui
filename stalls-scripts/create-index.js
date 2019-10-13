let fs = require('fs');

const path = './src/components/common/src'
const indexFile = '/index.js';

const fileHead = '// Do not update this file manually\n// Use the command "npm run update-index"\n\n';

const exportComponent = (component) => {
    const name = component.split('.')[0];

    return `export { default as ${name} } from './${name}';\n`;
};

const writeToFile = (text) => {
    fs.writeFile(path + indexFile, text, (err) => {
        if (err) throw err;
        console.log(`Done updating index file at: ${path + indexFile} `);
    });
}

// Read file names from directory
fs.readdir(path, (err, items) => {
    if (err) throw err;

    // Init fileContent
    let fileContent = fileHead;

    // Loop through file names
    for (var i = 0; i < items.length; i++) {
        if (!items[i].includes('index')) {
            const line = exportComponent(items[i]);
            console.warn(`Exporting ${items[i]}...`);
            fileContent += line;
        }
    }

    // Write contents
    writeToFile(fileContent);
});








// const {
//     // findIndexFiles,
//     writeIndex,
// } = require('create-index');

// /**
//  * @type {Function} 
//  * @param {Array<string>} directoryPaths 
//  * @throws {Error} Directory "..." does not exist.
//  * @throws {Error} "..." is not a directory.
//  * @throws {Error} "..." unsafe index.
//  * @returns {boolean} 
//  */

// // const path = './src/components/common/src';
// const paths = [
//     // './src',
//     // './src/components/common',
//     'src/components/common/src',
// ];

// // const filePath = findIndexFiles(path);
// // console.warn('filePath: ', filePath);

// writeIndex(paths);