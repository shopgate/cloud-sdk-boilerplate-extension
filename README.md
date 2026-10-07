# Shopgate Connect - Extension Boilerplate

This boilerplate contains all important folders and files which are required for an extension.

## Steps to start with the boilerplate

- Replace the `id` property in the file `extension-config.json` with the id of your extension
- Replace the `version` property in the file `extension-config.json` with version of your wish
- If you don't need a pipeline, remove the `awesomeOrganization.awesomePipeline.v1.json` in the `pipelines` folder
- If you want to use a pipelines, modify the `awesomeOrganization.awesomePipeline.v1.json` in the `pipelines` folder and rename it to the new name 

## Frontend

The `frontend` folder contains a small example that you can replace with your own code:

- `portals/AwesomeBanner` is a TypeScript component that is rendered below the header of the product
  page. It is registered in `extension-config.json` (`components`, type `portals`) and reads its
  spacing, colors and border radius from the theme via `makeStyles` of `@shopgate/engage/styles`.
- `locale/en-US.json` contains its texts (`components`, type `translations`).
- `portals/AwesomeBanner/spec.tsx` is its unit test.

Run these commands inside `frontend`:

| Command | What it does |
|---|---|
| `npm run lint` | Checks the code with `@shopgate/eslint-config` |
| `npm run typecheck` | Checks the types with TypeScript |
| `npm test` | Runs the unit tests with Jest |

The minimum version of the PWA libraries that your extension needs is set via `peerDependencies` in
`frontend/package.json`.

## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.

## License

Shopgate Connect - Extension Boilerplate is available under the Apache License, Version 2.0.

See the [LICENSE](./LICENSE) file for more information.
