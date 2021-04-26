const path = require('path');
const { readFile, writeFile } = require('fs');
const glob = require('glob');
const jsdoc2md = require('jsdoc-to-markdown');


glob('../ensemble*/{lib,src}/**/*.js', (err, files) => {
  if (err) throw err;

  for (const file of files) {
    readFile(file, (err, data) => {
      if (err) throw err;

      jsdoc2md.render({ source: data, 'no-cache': true }).then(docs => {
        const filename = 'module-ensemble-' + path.parse(file).name + '.md';
        const head = '---\ntitle: ensemble.' + path.parse(file).name + '\nslug: /' + filename.substr(0, filename.length - 3) + '\n---\n';

        //FIX empty <code/> breaks docusaurus markdown parser
        docs = docs.replace('<code></code>', '<code>null</code>');

        console.log(file, docs.length, filename);

        writeFile(path.resolve('./docs/docs', filename), head + docs, (err) => {
          if (err) throw err;
        });
      });
    });
  }
});
