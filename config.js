const baseRoute = require('./environmentVarables').BASE_FILE_ROUTE;

const fileName = 'allWorkouts.json';
const targetWebsite = 'https://www.bodybuilding.com/exercises/finder/';

//for testing and debugging
// const targetWebsiteTemp = `${baseRoute}/Exercise_Page/BODYBUILDING_HOMEPAGE.html`
// const targetDataPageTemp = `${baseRoute}/Exercise_Page/EXERCISE_PAGE.html`

// const targetElement = '.ExCategory-formLabelLabel';

exports.fileName = fileName;
exports.targetWebsite = targetWebsite;