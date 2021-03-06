const fs = require('fs');
const fileName = require('../config').fileName;

const save = (testJson => {
    const newTesty = JSON.stringify(testJson)

    return fs.writeFile(fileName, newTesty,  function(err, result) {
    if(err) console.log('error', err);
  });
});

exports.save = save;