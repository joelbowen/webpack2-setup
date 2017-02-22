// Setup Application Resources
require('todomvc-common/base');
require('react/dist/JSXTransformer');

window.React      = require('react/dist/react-with-addons');
window.Router     = require('director/build/director').Router;
window.classNames = require('classnames');
window.app = {};

require('./utils');
require('./todoModel');
