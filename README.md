# [Astro](https://astro.build) + [Solid](https://www.solidjs.com) = Astrid

Fine grained reactivity and high performance of Solid.js, combined with groundbraking island architecture and adaptable deployment features (including SSR and Edge) of Astro — _it's a match made in heavens!_

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Counter.tsx
│   │   ├── Link.astro
│   │   └── Link.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name. The Astro and Solid.js components are in the `src/components/` directory. Any static assets, like images, can be placed in the `public/` directory.

## ⚙ Configuration

Astrid comes with Solid.js integration and SSR (with support for ReST API endpoints) configured. Moreover, tools like Prettier, ESLint, and EditorConfig are also included and preconfigured.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                             |
| :------------------ | :------------------------------------------------- |
| `yarn`              | Installs dependencies                              |
| `yarn dev`          | Starts local dev server at `localhost:3000`        |
| `yarn build`        | Build your production site to `./dist/`            |
| `yarn preview`      | Preview your build locally, before deploying       |
| `yarn astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `yarn astro --help` | Get help using the Astro CLI                       |
| `yarn format`       | Format using Prettier                              |
| `yarn lint`         | Run linter using ESLint                            |
