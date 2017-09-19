const files = require.context('.', false, /\.js$/);
const modules = {};
const notIncludes = [
	'./modules.js',
];

files.keys().forEach(key => {
	if (_.includes(notIncludes, key)) return;
	modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
});

export default modules