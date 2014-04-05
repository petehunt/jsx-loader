# JSX loader for webpack

Sample config with Harmony (fat arrows) enabled:

```
{
  module: {
    loaders: [
      {test: /\.jsx$/, loader: "jsx-loader"}
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  "jsx-loader": {
    harmony: true
  }
}
```
