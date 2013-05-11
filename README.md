# drabs.js

Drabs is a collection of little JavaScript utilities that have their origin in the weekly [A Drip of JavaScript newsletter][drip].

The name is a pun on the ([incorrect][phrase]) phrase "drips and drabs", meaning little by little.

In addition to GitHub issues, discussion of Drabs is also welcome on the [JS Drip Google Group][group].

## How to Contribute

* Maintain the existing coding style (partially enforced by JSHint).
* Don't edit the files in `dist`. We will build those from `src` before each release.
* If possible, run JSHint and the Jasmine specs before sending a pull request (details below).
* If possible, include Jasmine specs when contributing new features.

### Linting and Specs

To run JSHint and Jasmine, you'll need Node.js 0.8.x or higher installed. Once you've got that, run `npm install` in the root of your local repository. This will install all of the development dependencies.

You just need to know four commands.

* `grunt jshint` will lint the files.
* `grunt jasmine` will run the specs.
* `grunt test` will run both.
* `grunt watch` will watch the source and spec files and automatically run JSHint and Jasmine each time you save.

## License

Drabs is released under the MIT license.

[drip]:http://adripofjavascript.com
[phrase]:http://grammarist.com/usage/dribs-and-drabs/
[group]:https://groups.google.com/forum/?fromgroups#!forum/js-drip-discussions

