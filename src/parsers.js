import yaml from 'js-yaml';

const parse = (extension, contentPath) => {
  if (extension === 'json') {
    return JSON.parse(contentPath);
  }
  if (extension === 'yaml' || extension === 'yml') {
    return yaml.load(contentPath);
  }
  const wrongFormat = 'unknown format';
  return wrongFormat;
};

export default parse;
