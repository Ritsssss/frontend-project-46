import formatStylish from './stylish.js';
import formatPlain from './plain.js';

const formatters = {
  stylish: formatStylish,
  plain: formatPlain,
};

const formatter = (format) => formatters[format] || formatStylish;

export default formatter;
