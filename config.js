const baseRoute = require('./environmentVarables').BASE_FILE_ROUTE;

const fileName = 'newTesty.json';
// const targetWebsite = 'https://www.bodybuilding.com/exercises/finder/';
const targetWebsite = `${baseRoute}/Exercise_Page/BODYBUILDING_HOMEPAGE.html`

// const targetElement = '.ExCategory-formLabelLabel';
const targetElement = '.ExCategory-formLabel'

exports.fileName = fileName;
exports.targetWebsite = targetWebsite;
exports.targetElement = targetElement