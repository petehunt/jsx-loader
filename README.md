# JSX loader for webpack

## Usage

```js
{..., loader: 'jsx-loader'}
```

## Options

`harmony`: Enables ES6 features.

`insertPragma`: Auto inserts the pragma required to process the file e.g. `insertPragma=React.DOM`.

`stripTypes`: Strips out type annotations.

## Example

```js
module: {
  loaders: [
    {test: /\.jsx$/, loader: 'jsx-loader?harmony&insertPragma=React.DOM&stripTypes'}
  ]
}
```
