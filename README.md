# React

>init a ReactApp

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
                "class $1 extends Component {",
                "   render() {",
                "   return (",
                "			$2"
                "		);",
                "	}",
                " }",
                " export default $1;",
                ""
            ],
            "description": "Log output to console"
        }
    }
