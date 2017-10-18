const t = require('graphql-ast-types');
const { set } = require('lodash');

module.exports = function(paths) {
  if (!paths.length) {
    return null;
  }

  const obj = {};
  const arrayPaths = paths.map(paths => set(obj, paths, true));

  const mapToSelection = obj => {
    const fields = Object.keys(obj).map(k => {
      const field = obj[k];
      if (field === true) {
        return t.field(t.name(k));
      } else if (typeof field === 'object') {
        return t.field(t.name(k), null, null, null, mapToSelection(field));
      }
    });

    return t.selectionSet(fields);
  };
  return mapToSelection(obj);
  return t.selectionSet(t.field('foo', null, null, null, t.selectionSet()));
};
