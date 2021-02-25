const extensions = ['.ts', '.tsx', '.js']

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier/react',
  ],
  plugins: [
    '@typescript-eslint',
    'react-hooks',
    'react',
    'import',
  ],
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/extensions': extensions,
    'import/parsers': {
      '@typescript-eslint/parser': extensions,
    },
    'import/resolver': {
      node: {
        extensions,
      }
    },
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/await-thenable': 'warn',
    // '@typescript-eslint/ban-ts-ignore': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': [ 'error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_', args: 'after-used', ignoreRestSiblings: true } ],
    '@typescript-eslint/require-await': 'warn',
    'arrow-body-style': 0,
    'arrow-parens': ['error', 'as-needed'],
    'import/extensions': ['error', 'ignorePackages', { 'gql': 'always', 'js': 'never', 'jsx': 'never', 'ts': 'never', 'tsx': 'never' }],
    'import/no-deprecated': 'warn',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': 0,
    'import/order': 'off',
    'indent': ['error', 2, { flatTernaryExpressions: true }],
    'no-console': 0,
    'no-nested-ternary': 'off',
    'no-param-reassign': [ 'error', { props: false } ],
    'no-unexpected-multiline': 'error',
    'no-unused-expressions': [ 'error', { allowTernary: true } ],
    'no-unused-vars': 'off',
    'object-curly-newline': 'off',
    'prefer-arrow-callback': [ 'error', { allowNamedFunctions: true } ],
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'semi': ['error', 'never'],
    'space-unary-ops': ['error', { overrides: { '!': true } }],
    'valid-jsdoc': 'warn',
  },
}
