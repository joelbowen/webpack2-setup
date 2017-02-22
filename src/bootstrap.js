// Setup Application Resources
require('todomvc-common/base');
require('react/dist/JSXTransformer');

window.React      = require('react/dist/react-with-addons');
window.Router     = require('director/build/director').Router;
window.classNames = require('classnames');
window.app = {};

require('./utils');
require('./todoModel');

// Application Code

// jsx is an optional syntactic sugar that transforms methods in React's
// `render` into an HTML-looking format. Since the utils and todoModel are
// unrelated to React, we didn't need those transforms
require('./todoItem.jsx');
require('./footer.jsx');
require('./app.jsx');
