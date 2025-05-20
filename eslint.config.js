'use strict'

const base = require('neostandard')({})

module.exports = [
  ...base,
  // Ignorar arquivos específicos
  {
    ignores: ['tailwind.config.ts'],
  },

  // Configurações base do ESLint (para JS)
  js.configs.recommended,

  // Configurações para TypeScript
  ...tseslint.configs.recommended,

  // (Opcional) Regras personalizadas
  {
    name: 'old-standard',
    rules: {
      'no-var': 'off',
      'object-shorthand': 'off',
      'no-console': 'warn',
    }
  }
];