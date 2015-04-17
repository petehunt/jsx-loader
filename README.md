# JSX loader for webpack

## Usage:

```js
{..., loader: 'jsx-loader'}
```

To enable ES6 features, use `?harmony` in your loader config. To auto insert the pragma required to process the file use the insertPragma parameter e.g. `?insertPragma=React.DOM`. [Flow]-style type annotations can be stripped using `?stripTypes`.

Additionally, any valid [React Tools command-line options](https://github.com/facebook/react/blob/master/npm-react-tools/README.md#command-line) can be specified as loader config options.

Flow: http://flowtype.org/
