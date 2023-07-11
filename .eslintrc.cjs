/* eslint-env node */

// module.exports = {
//   env: { browser: true, es2020: true },
//   extends: [
//     'eslint:recommended',
//     'plugin:react/recommended',
//     'plugin:react/jsx-runtime',
//     'plugin:react-hooks/recommended',
//   ],
//   parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
//   settings: { react: { version: '18.2' } },
//   plugins: ['react-refresh'],
//   rules: {
//     'react-refresh/only-export-components': [
//       'warn',
//       { allowConstantExport: true },
//     ],
//   },
// }

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'prettier'],
  rules: {
    // Aqui você pode adicionar ou modificar as regras do ESLint
    'react/prop-types': 'off', // Desabilita a validação das prop-types
    'react/react-in-jsx-scope': 'off', // Desabilita a necessidade de importar o React no escopo do JSX
    'react-hooks/rules-of-hooks': 'error', // Habilita as regras para os Hooks do React
    'react-hooks/exhaustive-deps': 'warn', // Adiciona um aviso para o uso completo das dependências nos Hooks
    'jsx-a11y/anchor-is-valid': 'off', // Desabilita o aviso para âncoras inválidas
    'prettier/prettier': 'error', // Utiliza as configurações do Prettier para formatar o código
  },
  settings: {
    react: {
      version: 'detect', // Detecta automaticamente a versão do React
    },
  },
};

