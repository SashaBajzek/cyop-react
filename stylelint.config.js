module.exports = {
  plugins: ['stylelint-scss'],

  extends: ['stylelint-config-recommended-scss'],
  rules: {
    // --------------------------------------------------
    // Possible errors
    // --------------------------------------------------

    // Color
    'color-no-invalid-hex': true,

    // Unit
    'unit-no-unknown': true,

    // Property
    'property-no-unknown': true,

    // Declaration block
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates'],
      },
    ],
    'declaration-block-no-shorthand-property-overrides': true,

    // Block
    'block-no-empty': true,

    // Selector
    'selector-pseudo-class-no-unknown': true,
    'selector-type-no-unknown': true,

    // At-rule
    // 'at-rule-no-unknown': true, // override by stylelint-config-css-modules

    // Comment
    'comment-no-empty': true,

    // General / Sheet
    'no-descending-specificity': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,

    // --------------------------------------------------
    // Limit language features
    // --------------------------------------------------

    // Unit
    'unit-whitelist': ['%', 'deg', 'em', 'fr', 'ms', 'px', 's', 'vh', 'vw'],

    // Property
    'property-blacklist': ['float'],

    // Declaration
    'declaration-no-important': true,

    // Selector
    'selector-max-compound-selectors': 5,
    'selector-max-empty-lines': 0,
    'selector-max-id': 0,

    // At-rule
    'at-rule-no-vendor-prefix': true,

    // General / Sheet
    'max-nesting-depth': 4,

    // --------------------------------------------------
    // Stylistic issues
    // --------------------------------------------------

    // Color
    'color-hex-case': 'lower',
    'color-hex-length': 'long',

    // Function
    'function-comma-space-after': 'always',
    'function-comma-space-before': 'never',
    'function-name-case': 'lower',
    'function-parentheses-space-inside': 'never',
    'function-url-quotes': 'always',
    'function-whitespace-after': 'always',

    // Number
    'number-leading-zero': 'always',
    'number-no-trailing-zeros': true,

    // Length
    'length-zero-no-unit': true,

    // Unit
    'unit-case': 'lower',

    // Value
    'value-keyword-case': [
      'lower',
      {
        ignoreProperties: ['composes'],
      },
    ],

    // Value list
    'value-list-comma-newline-after': 'never-multi-line',
    'value-list-comma-newline-before': 'never-multi-line',
    'value-list-comma-space-after': 'always',
    'value-list-comma-space-before': 'never',

    // Property
    'property-case': 'lower',

    // Declaration
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',

    // Declaration block
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',

    // Block
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always',
    'block-opening-brace-newline-after': 'always',
    'block-opening-brace-space-before': 'always',

    // Selector
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-type-case': 'lower',

    // Selector list
    'selector-list-comma-newline-after': 'always',
    'selector-list-comma-newline-before': 'never-multi-line',

    // Rule
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],

    // At-rule
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'blockless-after-same-name-blockless'],
        ignore: ['after-comment'],
      },
    ],
    'at-rule-name-case': 'lower',
    'at-rule-name-newline-after': 'always-multi-line',
    'at-rule-name-space-after': 'always',
    'at-rule-semicolon-newline-after': 'always',
    'at-rule-semicolon-space-before': 'never',

    // General / Sheet
    indentation: 2,
    linebreaks: 'unix',
    'max-empty-lines': 2,
    'no-eol-whitespace': true,
    'no-missing-end-of-source-newline': true,
    'no-empty-first-line': true,
  },
}
