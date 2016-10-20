var changeCase = require('change-case');

module.exports = {
	setup: function (appname) {
		return [{
			type: 'input',
			name: 'name',
			message: 'name',
			default: changeCase.param(appname)
		}, {
			type: 'input',
			name: 'version',
			message: 'version',
			default: '0.0.0'
			
		}, {
			type: 'input',
			name: 'description',
			message: 'description'
		}, {
			type: 'input',
			name: 'git',
			message: 'git repository'
		}, {
			type: 'input',
			name: 'keywords',
			message: 'keywords'
		}, {
			type: 'input',
			name: 'author',
			message: 'author',
			store: true
		}, {
			type: 'input',
			name: 'license',
			message: 'license', 
			default: 'ISC'
		}]
	}
};