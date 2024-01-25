# **About ELSA and this project**

ELSA (Espacios Laborales Sin Acoso) es una herramienta digital e integral de prevención del acoso sexual laboral. El despliegue del proyecto fue apoyado y financiado por el Banco Interamericano de Desarrollo (BID), con quienes desarrollamos una metodología validada por expertos/as y con empresas de diferentes países de la región latinoamericana.

Parte de la metodología ELSA incluye el uso de información organizacional como una fuente de datos que se completa con una encuesta al personas que trabaja en las organizaciones para lograr un diagnóstico integral. 

La herramienta que presentamos, “Encuesta Organizacional Inicial” es un test inicial de libre acceso para las organizaciones. A partir de un breve cuestionario de un máximo de 14 preguntas, arroja el nivel de implementación del sistema de prevención del acoso sexual laboral en el que la organización se encuentra. Los niveles qse obtienen a partir de puntajes y pesos asignados a las preguntas del cuestionario; y son:

  Inicial (0-55 puntos)
  
  Intermedio (56-85 puntos)
  
  Avanzado (86-100 puntos)

Este cuestionario se enfoca principalmente en aspectos institucionales de una organización en la prevención del acoso sexual laboral, como por ejemplo, la realización de una medición anual, la implementación y comunicación de políticas, el establecimiento de un canal de denuncias, las capacitaciones realizadas al personal, entre otras.

De este modo, desde ELSA buscamos que las organizaciones puedan acceder a una medición inicial de su sistema de prevención.  Su utilidad radica en que organizaciones puedan dar el primer paso para iniciar una ruta integral que involucre una diagnóstico, recoja percepciones y experiencias de su personal e implemente acciones para mejorar sus indicadores.

Es importante mencionar que este test no es una medición integral, sino que se enfoca en una de las varias aristas que engloba la prevención del acoso sexual laboral; pero sí funciona como un gatillador para la toma de acción preventiva.


# **How to run this project**

## Mantine Next.js template

This is a template for [Next.js](https://nextjs.org/) app router + [Mantine](https://mantine.dev/).
If you want to use pages router instead, see [next-pages-template](https://github.com/mantinedev/next-pages-template).

### Features

This template comes with the following features:

- [PostCSS](https://postcss.org/) with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Jest](https://jestjs.io/) setup with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- ESLint setup with [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)

### npm scripts

#### Build and dev scripts

- `dev` – start dev server
- `build` – bundle application for production
- `analyze` – analyzes application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

#### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `jest` – runs jest tests
- `jest:watch` – starts jest watch
- `test` – runs `jest`, `prettier:check`, `lint` and `typecheck` scripts

#### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `prettier:write` – formats all files with Prettier
