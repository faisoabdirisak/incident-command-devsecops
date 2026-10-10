import js from '@eslint/js';

export default [
  {
    ignores: ['node_modules/**']
  },
  {
    files: ['src/**/*.js'],
    ...js.configs.recommended,
    languageOptions: {
      globals: {
        require: 'readonly',
        module: 'readonly',
        process: 'readonly',
        console: 'readonly'
      }
    }
  }
];
