var path = require('path');
var chalk = require('chalk');
var changeCase = require('change-case');
var generators = require('yeoman-generator');
var prompts = require('./prompts');

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

	prompting: function () {
		var done = this.async();

		var handler = function (answers) {
			this.setup = answers;
			done();
		};

		return this.prompt(
			prompts.setup(this.appname), 
			handler.bind(this)
		);
	},

	writing: function () {
		this.fs.copyTpl(
			this.templatePath('package.json'),
			this.destinationPath('package.json'),
			{ setup: this.setup }
		);

		this.fs.copyTpl(
			this.templatePath('webpack.config.js'),
			this.destinationPath('webpack.config.js')
		);

		this.fs.copyTpl(
			this.templatePath('index.html'),
			this.destinationPath('index.html'),
			{ setup: this.setup, names: this.getNames(this.setup.name) }
		);

		this.fs.copyTpl(
			this.templatePath('gitignore'),
			this.destinationPath('.gitignore'),
			{ setup: this.setup, names: this.getNames(this.setup.name) }
		);

		this.fs.copyTpl(
			this.templatePath(path.join('components', 'App.jsx')),
			this.destinationPath(path.join('src', 'components', 'App.jsx')),
			{ setup: this.setup, names: this.getNames(this.setup.name) }
		);

		this.fs.copyTpl(
			this.templatePath(path.join('components', 'Routes.jsx')),
			this.destinationPath(path.join('src', 'components', 'Routes.jsx')),
			{ setup: this.setup, names: this.getNames(this.setup.name) }
		);

		this.fs.copyTpl(
			this.templatePath(path.join('components', 'layout', 'Main.jsx')),
			this.destinationPath(path.join('src', 'components', 'layout', 'Main.jsx')),
			{ setup: this.setup, names: this.getNames(this.setup.name) }
		);

		this.fs.copyTpl(
			this.templatePath(path.join('components', 'layout', 'Wrapper.jsx')),
			this.destinationPath(path.join('src', 'components', 'layout', 'Wrapper.jsx')),
			{ setup: this.setup, names: this.getNames(this.setup.name) }
		);
	},

	install: function () {
		this.npmInstall([
			'bootstrap',
			'jquery',
			'react',
			'react-dom',
			'react-router'
		], { 'save': true });

		this.npmInstall([
			'babel-cli',
			'babel-core',
			'babel-loader',
			'babel-preset-es2015',
			'babel-preset-react',
			'webpack',
			'live-server',
			'concurrently'
		], { 'saveDev': true });
	},

	end: function () {
		this.log('All done!');
    this.log('Run ' + chalk.blue('npm start') + ' to start the app.');
	}
});