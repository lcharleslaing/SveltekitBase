# Sveltekit Base

[`@lcharleslaing`](https://github.com/lcharleslaing?tab=repositories) - Main Github Account

[`@lcharleslaing/sveltekitbase`](https://github.com/lcharleslaing?tab=repositories)
- Sveltekit
- PWA (Progressive Web App)
- Typescript
- TailwindCSS
- DaisyUI (Light Theme)
- Flowbite
- Supabase (Postgres Database)
- Netlify (netlify.toml)

## create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

# Install this package

```bash
npm i <package_name>@0.0.1
```


# Publish to NPMJS.com

## Remember

Once you have published your package to NPM, and you make changes, you MUST change the version number before re-publishing again.  If you do not, you will get an error.


## Add to you package.json
```json
  "name": "YourPackageName", // Name
  "version": "0.0.0", // Version Number
    ...
  "exports": {
    // Relative to your package folder
    ".": "./ComponentName.svelte"
  },
    ...

```

## Run Package

```bash
cd YourBaseDirectory
npm run package
```

## Publish to NPM (Public)

```bash
cd package
npm publish --access public
```

