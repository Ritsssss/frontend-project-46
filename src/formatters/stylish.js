import _ from 'lodash';

const formatValue = (value, depth) => {
  if (!_.isObject(value)) {
    return value;
  }
  const indent = ' '.repeat(depth * 4);
  const entries = Object.entries(value).map(([key, val]) => `${indent}    ${key}: ${formatValue(val, depth + 1)}`);
  return `{\n${entries.join('\n')}\n${indent}}`;
};

const format = (tree, depth = 1) => {
  const indent = ' '.repeat(depth * 4 - 2);
  const lines = tree.flatMap((node) => {
    switch (node.type) {
      case 'nested':
        return `${indent}  ${node.key}: {\n${format(node.children, depth + 1)}\n${indent}  }`;
      case 'unchanged':
        return `${indent}  ${node.key}: ${formatValue(node.value, depth)}`;
      case 'removed':
        return `${indent}- ${node.key}: ${formatValue(node.value, depth)}`;
      case 'added':
        return `${indent}+ ${node.key}: ${formatValue(node.value, depth)}`;
      case 'updated':
        return `${indent}- ${node.key}: ${formatValue(node.oldValue, depth)}\n${indent}+ ${node.key}: ${formatValue(node.newValue, depth)}`;
      default:
        return `Unknown type: ${node.type}`;
    }
  });
  return lines.join('\n');
};

export default (tree) => `{\n${format(tree)}\n}`;
