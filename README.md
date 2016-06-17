generator-hydrais-react
-----------------------

[![NPM](https://nodei.co/npm/generator-hydrais-react.png)](https://nodei.co/npm/generator-hydrais-react/)

A [Yeoman](http://yeoman.io/) generator to create a very basic React application
complete with [Babel](https://babeljs.io/), [Webpack](https://webpack.github.io/), and [Twitter Bootstrap](http://getbootstrap.com/).

#### Install

```
npm install -g yo generator-hydrais-react
```

#### Generate a new project

```
mkdir your-project && cd your-project/
yo hydrais-react
```


#### Generating a library project

The Hydrais React Generator can also create reusable libraries that can be shared amongst applications.
To generate a library project, simply pass the `--library` flag when generating...

```bash
mkdir your-project && cd your-project/
yo hydrais-react --library
```

When developing locally, you can link your library by running...

```bash
cd /path/to/your/project
npm link /path/to/your/library
```

Finally, import the root of the library...

```jsx
import YourLib from 'your-lib';
```