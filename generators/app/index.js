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

	constructor: function () {
		generators.Base.apply(this, arguments);

		this.option('library', { 
			desc: 'Specifies that the new project is a reusable library.',
			type: Boolean,
			defaults: false
		});
	},

	prompting: function () {
		if ( this.options.library ) {
			console.log(chalk.blue('Library mode enabled.'));
		}

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
		if ( this.options.library ) {
			this.fs.copyTpl(
				this.templatePath('package.library.json'),
				this.destinationPath('package.json'),
				{ setup: this.setup, names: this.getNames(this.setup.name) }
			);
		} else {
			this.fs.copyTpl(
				this.templatePath('package.json'),
				this.destinationPath('package.json'),
				{ setup: this.setup, names: this.getNames(this.setup.name) }
			);
		}

		if ( this.options.library ) {
			this.fs.copyTpl(
				this.templatePath('webpack.config.library.js'),
				this.destinationPath('webpack.config.js'),
				{ setup: this.setup, names: this.getNames(this.setup.name) }
			);
		} else {
			this.fs.copyTpl(
				this.templatePath('webpack.config.js'),
				this.destinationPath('webpack.config.js'),
				{ setup: this.setup, names: this.getNames(this.setup.name) }
			);
		}

		if ( !this.options.library ) {
			this.fs.copyTpl(
				this.templatePath('index.html'),
				this.destinationPath('index.html'),
				{ setup: this.setup, names: this.getNames(this.setup.name) }
			);
		}

		this.fs.copyTpl(
			this.templatePath('gitignore'),
			this.destinationPath('.gitignore'),
			{ setup: this.setup, names: this.getNames(this.setup.name) }
		);

		this.fs.copyTpl(
			this.templatePath('editorconfig'),
			this.destinationPath('.editorconfig'),
			{ setup: this.setup, names: this.getNames(this.setup.name) }
		);

		this.fs.copyTpl(
			this.templatePath('babelrc'),
			this.destinationPath('.babelrc'),
			{ setup: this.setup, names: this.getNames(this.setup.name) }
		);

		if ( this.options.library ) {
			this.fs.copyTpl(
				this.templatePath(path.join('components', 'App.library.jsx')),
				this.destinationPath(path.join('src', 'components', 'App.jsx')),
				{ setup: this.setup, names: this.getNames(this.setup.name) }
			);

			this.fs.copyTpl(
				this.templatePath(path.join('test', 'components', 'AppTest.js')),
				this.destinationPath(path.join('test', 'components', 'AppTest.js')),
				{ setup: this.setup, names: this.getNames(this.setup.name) }
			);
		} else {
			this.fs.copyTpl(
				this.templatePath(path.join('components', 'App.jsx')),
				this.destinationPath(path.join('src', 'components', 'App.jsx')),
				{ setup: this.setup, names: this.getNames(this.setup.name) }
			);
		}

		if ( !this.options.library ) {
			this.fs.copyTpl(
				this.templatePath(path.join('components', 'Routes.jsx')),
				this.destinationPath(path.join('src', 'components', 'Routes.jsx')),
				{ setup: this.setup, names: this.getNames(this.setup.name) }
			);

			this.fs.copyTpl(
				this.templatePath(path.join('components', 'pages', 'home', 'HomePage.jsx')),
				this.destinationPath(path.join('src', 'components', 'pages', 'home', 'HomePage.jsx')),
				{ setup: this.setup, names: this.getNames(this.setup.name) }
			);

			this.fs.copyTpl(
				this.templatePath(path.join('test', 'components', 'layout', 'MainTest.js')),
				this.destinationPath(path.join('test', 'components', 'layout', 'MainTest.js')),
				{ setup: this.setup, names: this.getNames(this.setup.name) }
			);

			this.fs.copyTpl(
				this.templatePath(path.join('components', 'layout', 'Navigation.jsx')),
				this.destinationPath(path.join('src', 'components', 'layout', 'Navigation.jsx')),
				{ setup: this.setup, names: this.getNames(this.setup.name) }
			);

			this.fs.copyTpl(
				this.templatePath(path.join('components', 'layout', 'Wrapper.jsx')),
				this.destinationPath(path.join('src', 'components', 'layout', 'Wrapper.jsx')),
				{ setup: this.setup, names: this.getNames(this.setup.name) }
			);
		}
	},

	install: function () {
		if ( this.options.library ) {
			this.npmInstall([
				'bootstrap',
				'jquery',
				'react'
			], { 'save': true });
		} else {
			this.npmInstall([
				'bootstrap',
				'jquery',
				'react',
				'react-dom',
				'react-router',
				'react-bootstrap',
				'react-router-bootstrap'
			], { 'save': true });
		}

		if ( this.options.library ) {
			this.npmInstall([
				'babel-cli',
				'babel-core',
				'babel-loader',
				'babel-preset-es2015',
				'babel-preset-react',
				'babel-jest',
				'babel-polyfill',
				'webpack',
				'react-addons-test-utils',
				'jest-cli',
				'react-dom'
			], { 'saveDev': true });
		} else {
			this.npmInstall([
				'babel-cli',
				'babel-core',
				'babel-loader',
				'babel-preset-es2015',
				'babel-preset-react',
				'babel-jest',
				'babel-polyfill',
				'webpack',
				'live-server',
				'concurrently',
				'react-addons-test-utils',
				'jest-cli',
				'style-loader',
				'css-loader'
			], { 'saveDev': true });
		}
	},

	end: function () {
		this.log('All done!');

		if ( this.options.library ) {
    	this.log('Run ' + chalk.blue('npm start') + ' to build the library and watch for changes.');
    	this.log('Run ' + chalk.blue('npm run webpack') + ' to build the library once.');
    } else {
    	this.log('Run ' + chalk.blue('npm start') + ' to start the app.');
    }
	}
});