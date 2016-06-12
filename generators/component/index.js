var path = require('path');
var chalk = require('chalk');
var changeCase = require('change-case');
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
	getNames: function (name) {
		return {
			upper: changeCase.upper(name),
			lower: changeCase.lower(name),
			sentence: changeCase.sentence(name),
			title: changeCase.title(name),
			camel: changeCase.camel(name),
			pascal: changeCase.pascal(name),
			snake: changeCase.snake(name),
			param: changeCase.param(name),
			dot: changeCase.dot(name),
			path: changeCase.path(name),
			constant: changeCase.constant(name),
			swap: changeCase.swap(name)
		};
	},

	constructor: function () {
		generators.Base.apply(this, arguments);
		
		this.argument('name', { 
			type: String, 
			required: true 
		});

		this.option('stateful', { 
			desc: 'Determines if the component should have its own state.',
			type: Boolean,
			defaults: false
		});
	},

	writing: function () {
		var names = this.getNames(this.name);
		var pathName = names.param;
		var pascalName = names.pascal;

		if ( this.options.stateful ) {
			this.fs.copyTpl(
				this.templatePath('StatefulComponent.jsx'),
				this.destinationPath(path.join('src', 'components', pathName, pascalName + '.jsx')),
				{ names: names }
			);
		} else {
			this.fs.copyTpl(
				this.templatePath('StatelessComponent.jsx'),
				this.destinationPath(path.join('src', 'components', pathName, pascalName + '.jsx')),
				{ names: names }
			);
		}
	},

	end: function () {
		var names = this.getNames(this.name);
		var pathName = names.param;
		var pascalName = names.pascal;
		var componentPath = path.join('src', 'components', pathName, pascalName + '.jsx');

		console.log('Generated component at ' + chalk.blue(componentPath));
	}
});