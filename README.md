<div align="center">
  <h1>graphql-paths-to-ast</h1>
  <p>A function to transform a list of paths to a GraphQL AST</p>
</div>

`$ yarn add graphql-paths-to-ast`

## Usage

```js
const pathsToAst = require('graphql-paths-to-ast');

pathsToAst([
  'name',
  'address.city',
  'address.country'
]);

/*
{
  "selections": [
    {
      "name": {
        "value": "name",
        "kind": "Name"
      },
      "kind": "Field"
    },
    {
      "selectionSet": {
        "selections": [
          {
            "name": {
              "value": "city",
              "kind": "Name"
            },
            "kind": "Field"
          },
          {
            "name": {
              "value": "country",
              "kind": "Name"
            },
            "kind": "Field"
          }
        ],
        "kind": "SelectionSet"
      },
      "name": {
        "value": "address",
        "kind": "Name"
      },
      "kind": "Field"
    }
  ],
  "kind": "SelectionSet"
}
*/

const pathsToAst = require('graphql-paths-to-ast');
const {print} = require('graphql')

print(
  pathsToAst([ 'name', 'address.city', 'address.country' ])
);

/*
{
  name
  address {
    city
    country
  }
}
/*

