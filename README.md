# React
>tool

    http://placehold.it/820x230

>[Create React App](https://facebook.github.io/create-react-app/)

    npx create-react-app my-app
    cd my-app
    npm start

    (npm install -g create-react-app)
    create-react-app my-app

    cd my-app
    npm start

>VScode react snippets

    {
    "Print to console": {
        "prefix": "react",
        "body": [
            "import React, { Component } from 'react';",
            "",
            "class $1 extends Component {",
            "   render() {",
            "   return (",
            "      <div>",
            "       $1",
            "      </div>",
            "    );"
            "  }",
            "}",
            " export default $1;",
            ""
        ],
        "description": "REACT BASIC"
        }
    }

>VScode react-redux-component snippets

    {
        "Print to console": {
            "prefix": "react-redux-component",
            "body": [
                "import React, { Component } from 'react';",
                "import { connect } from 'react-redux';",
                "",
                "class $1 extends Component {",
                "   render() {",
                "   return (",
                "			$2"
                "		);",
                "	}",
                " }",
                "const mapStateToProps = (state) => ({",
                "",
                "})",
                "const mapDispathToProps = (dispatch) => ({",
                "",
                "})",
                " export default connect(mapStateToProps, mapDispathToProps)($1);",
                ""
            ],
            "description": "Log output to console"
        }
    }

>VScode react-function-component snippets

    {
        "Print to console": {
            "prefix": "react-function-component",
            "body": [
                "import React from 'react';",
                "",
                "export default function $1(props){",
                "    return <div>$1</div>",
                "$2",
            ],
            "description": "react function component"
        }
    }

> material

    https://material-ui.com/
    https://getmdl.io/

    npm install material-design-lite --save
    index.js
    import 'material-design-lite/material.min.js';
    import 'material-design-lite/material.min.css';
    index.html
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

>Bootstrap

    npm install --save jquery
    npm install bootstrap --save
    Popper.js 添加
    npm install popper.js --save
    在src/index.js文件添加
    import $ from 'jquery'
    import 'bootstrap/dist/css/bootstrap.min.css'
    import 'bootstrap/dist/js/bootstrap.min.js'

    http://placehold.it/820x230

