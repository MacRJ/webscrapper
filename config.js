const baseRoute = require('./environmentVarables').BASE_FILE_ROUTE;

const fileName = 'newTesty.json';
// const targetWebsite = 'https://www.bodybuilding.com/exercises/finder/';

//for testing
const targetWebsiteTemp = `${baseRoute}/Exercise_Page/BODYBUILDING_HOMEPAGE.html`
const targetDataPageTemp = `${baseRoute}/Exercise_Page/EXERCISE_PAGE.html`

// const targetElement = '.ExCategory-formLabelLabel';
const targetElement = '.ExCategory-formLabel'

exports.fileName = fileName;
exports.targetWebsiteTemp = targetWebsiteTemp;
exports.targetElement = targetElement;
exports.targetDataPageTemp = targetDataPageTemp;