# JSX loader for webpack

## Usage:

```js
{..., loader: 'jsx-loader'}
```

To enable ES6 features, use `?harmony` and/or `?es6module` in your loader config.
To auto insert the pragma required to process the file use the insertPragma parameter
e.g. `?insertPragma=React.DOM`. [Flow]-style type annotations can be stripped using `?stripTypes`.

This fork has been updated to apply source maps from previous loaders to the source map output by
`react-tools`.

[Flow]: http://flowtype.org/
