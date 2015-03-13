var reactTools = require( 'react-tools' ),
    assert = require( 'assert' ),
    mockJSX =   'import React from "react"; ' +
                'export default class Test extends React.Component {' + 
                    'render() { return <h1>Hello World</h1> }' +
                '};';

// this does not really test the loader itself, but at least half of it
assert.doesNotThrow(function() {
    return reactTools.transformWithDetails(mockJSX, {
        harmony: true,
        es6module: true
    });
});