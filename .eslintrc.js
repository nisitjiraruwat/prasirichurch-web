module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },

  rules: {
    'spaced-comment': ['error', 'always', {
      line: {
        markers: ['#region', '#endregion']
      }
    }],
    '@typescript-eslint/no-explicit-any': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'vue/multi-word-component-names': 'off',
    'tailwindcss/no-custom-classname': 'off',
    'vue/require-prop-types': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'sibling', 'unknown'],
        'newlines-between': 'always-and-inside-groups',
        alphabetize: {
          order: 'asc', /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */
          caseInsensitive: true /* ignore case. Options: [true, false] */
        },
        pathGroups: [
          {
            pattern: '@tests/**',
            group: 'unknown',
            position: 'after'
          },
          {
            pattern: '#**',
            group: 'external',
            position: 'after'
          },
          {
            pattern: '~/**',
            group: 'internal',
            position: 'after'
          }
        ]
      }
    ]
  },
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'tailwindcss'],
  extends: [
    'standard',
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:tailwindcss/recommended'
  ],
  settings: {
    tailwindcss: {
      officialSorting: true
    }
  }
}
