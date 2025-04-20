import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    files: ["**/*.js"], // Убедитесь, что здесь указаны правильные шаблоны
    languageOptions: {
      globals: {
        ...globals.browser,
        Swiper: "readonly",
      }
    }
  },
  js.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",
      "indent": ["error", 2] // Добавляем правило для отступов
    }
  }
];
