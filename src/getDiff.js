import _ from 'lodash';

const iter = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const allKeys = _.sortBy(_.union(keys1, keys2));

  const result = allKeys.map((key) => {
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return { key, type: 'nested', children: iter(data1[key], data2[key]) };
    }
    if (!Object.hasOwn(data2, key)) {
      return { key, type: 'removed', value: data1[key] };
    }
    if (!Object.hasOwn(data1, key)) {
      return { key, type: 'added', value: data2[key] };
    }
    if (data1[key] === data2[key]) {
      return { key, type: 'unchanged', value: data2[key] };
    }
    return {
      key, type: 'updated', oldValue: data1[key], newValue: data2[key],
    };
  });
  return result;
};

export default iter;
