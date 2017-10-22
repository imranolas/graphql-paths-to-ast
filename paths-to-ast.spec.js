const pathsToAst = require('./paths-to-ast');
const t = require('graphql-ast-types');

describe('paths2Ast', () => {
  test('should accept an empty array', () => {
    expect(pathsToAst([])).toBe(null);
  });

  [
    { in: ['foo'], out: t.selectionSet([t.field(t.name('foo'))]) },
    {
      in: ['baz', 'foo.bar'],
      out: t.selectionSet([
        t.field(t.name('baz')),
        t.field(t.name('foo'), null, null, null, t.selectionSet([t.field(t.name('bar'))]))
      ])
    }
  ].forEach(testcase => {
    test(`should accept values ${testcase.in}`, () => {
      expect(pathsToAst(testcase.in)).toEqual(testcase.out);
    });
  });
});
