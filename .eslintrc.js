module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "array-bracket-spacing": [2, "never"],
    "camelcase": [1, {
        "properties": "never"
      }
    ],
    "computed-property-spacing": [2, "never"],
    "dot-notation": [1, {
        "allowKeywords": true
      }
    ],
    "func-names": [1, "always"],
    "indent": [2, 2, {"SwitchCase": 1}],
    "max-len": [2, 160, {
        "ignoreTrailingComments": true,
        "ignoreComments": true,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }
    ],
    "no-console": [2, {
        "allow": ["log", "info", "warn", "error", "debug", "table", "group", "groupCollapsed", "groupEnd"]
      }
    ],
    "no-dupe-keys": [2],
    "no-inline-comments": 0,
    "no-mixed-spaces-and-tabs": [2],
    "no-multi-spaces": [2, {
      "ignoreEOLComments": true
    }],
    "no-multiple-empty-lines": [2, {
        "max": 2
      }
    ],
    "no-native-reassign": [2, {
        "exceptions": ["navigator", "window"]
      }
    ],
    "no-new": [0],
    "no-param-reassign": [1, {
        "props": false
      }
    ],
    "no-trailing-spaces": [2, {
        "skipBlankLines": false
      }
    ],
    "no-unused-expressions": [2, {
        "allowShortCircuit": true,
        "allowTernary": true
      }
    ],
    "no-unused-vars": [2, {
        "args": "after-used"
      }
    ],
    "no-undef": [2],
    "no-warning-comments": [0],
    "one-var": [1, {
        "const": "never",
        "let": "never",
        "var": "never"
      }
    ],
    "quotes": [2, "double"],
    "semi": [2, "always"],
    "space-in-parens": [2, "never"],
    "yoda": [2, "never"],
    "vars-on-top": 0
  },
  "parserOptions": {
    "sourceType": "module"
  }
}
