/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react-perf/all",
  ],
  plugins: ["react", "use-encapsulation"],
  rules: {
    "use-encapsulation/prefer-custom-hooks": [
      "warn", // TODO: enable this as a warning
    ],
    "jsx-a11y/lang": "error",
    "react/display-name": "off",
    "react-hooks/exhaustive-deps": "error",
    "react-perf/jsx-no-jsx-as-prop": "off",
    "react-perf/jsx-no-new-array-as-prop": "off",
    "react-perf/jsx-no-new-function-as-prop": "off",
    "react-perf/jsx-no-new-object-as-prop": "off",
    "react/prop-types": "off",
    "react/boolean-prop-naming": [
      "error",
      {
        rule: "^(is|has|are|can|should|did|will)[A-Z]([A-Za-z0-9])+",
        validateNested: true,
      },
    ],
    "react/destructuring-assignment": [
      "off",
      "always",
      {
        destructureInSignature: "always",
      },
    ],
    "react/forbid-prop-types": [
      "error",
      {
        checkChildContextTypes: true,
        checkContextTypes: true,
      },
    ],
    "react/jsx-curly-brace-presence": [
      "error",
      {
        propElementValues: "always",
      },
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".jsx", ".tsx"],
      },
    ],
    "react/jsx-indent": ["error", 2],
    "react/jsx-one-expression-per-line": [
      "error",
      {
        allow: "single-child",
      },
    ],
    "react/jsx-key": [
      "error",
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true,
      },
    ],
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-max-depth": [
      "error",
      {
        max: 10,
      },
    ],
    "react/jsx-newline": [
      "error",
      {
        prevent: true,
      },
    ],
    "react/jsx-no-bind": "off",
    "react/jsx-no-leaked-render": [
      "error",
      {
        validStrategies: ["coerce"],
      },
    ],
    "react/jsx-no-literals": "off",
    "react/jsx-no-target-blank": [
      "error",
      {
        forms: true,
      },
    ],
    "react/jsx-wrap-multilines": [
      "error",
      {
        declaration: "parens-new-line",
        assignment: "parens-new-line",
        return: "parens-new-line",
        arrow: "parens-new-line",
        condition: "parens-new-line",
        logical: "parens-new-line",
        prop: "parens-new-line",
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "react/no-string-refs": [
      "error",
      {
        noTemplateLiterals: true,
      },
    ],
    "react/no-unsafe": [
      "error",
      {
        checkAliases: true,
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/sort-prop-types": [
      "error",
      {
        sortShapeProp: true,
      },
    ],
    "react/state-in-constructor": ["error", "never"],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}
