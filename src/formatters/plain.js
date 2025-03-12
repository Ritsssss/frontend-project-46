import _ from 'lodash';

const getPaths = (key, propertyName = '') => (propertyName ? `${propertyName}.${key}` : key);

const valueUpdate = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }
  return value;
};

const format = (tree, propertyName = '') => {
  const lines = tree.flatMap((node) => {
    const updatedPath = getPaths(node.key, propertyName);

    switch (node.type) {
      case 'nested':
        return format(node.children, updatedPath);
      case 'unchanged':
        return [];
      case 'removed':
        return `Property '${updatedPath}' was removed`;
      case 'added':
        return `Property '${updatedPath}' was added with value: ${valueUpdate(node.value)}`;
      case 'updated':
        return `Property '${updatedPath}' was updated. From ${valueUpdate(node.oldValue)} to ${valueUpdate(node.newValue)}`;
      default:
        return `Unknown type: ${node.type}`;
    }
  });
  return lines.join('\n');
};

export default (tree) => format(tree);
