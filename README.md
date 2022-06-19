# Movie Magic

This is an example of using Code Shaper to generate applications using the
following frameworks:

1. [React](https://reactjs.org/)
2. [Next.js](https://nextjs.org/)
3. [Remix](https://remix.run/)
4. [Express](https://expressjs.com/)

All applications are created inside a monorepo, working in harmony and sharing
common packages.

To see step-by-step instructions for creating these apps, visit
[Getting Started](https://www.code-shaper.dev/docs/getting-started/overview) in
Code Shaper docs.

![Home Page](assets/home-page.png)

## Architecture

The repository contains three web applications created using React, Next.js and
Remix. They all depend on a package called `ui-lib` for common React components.
They also depend on an Express app, called `movie-magic-api`, which provides a
RESTful API for fetching movie data.

![Architecture](assets/architecture.png)

## Building Movie Magic

### Development Build

```shell
# Run ci in the root directory to install dependencies
npm ci

# Run a full build to make sure libraries are available to the apps
npm run build

# Run the apps
npm run dev
```

Open browser windows at each of the following URLs to see the respective demo
apps:

1. http://localhost:3000/: Movie Magic | React
2. http://localhost:3001/: Movie Magic | Next.js
3. http://localhost:3002/: Movie Magic | Remix

Note that the React app fetches mock data from MSW, whereas the other two apps
fetch real data from the movie-magic-api.

> Note: Do not run `npm install` or `npm ci` in any of the subdirectories. It
> will break the build. There should be only one `package-lock.json` file in the
> entire repo (at the root).

### Production Build

To build all packages and apps for production, run the following command:

```shell
npm ci
npm run build
```

### Clean Build

Removes all build artifacts and performs a clean build.

```shell
npm run clean
npm ci
npm run dev
```

For an "aggressive" clean build, add one more step as shown below. This will
build the lock file from scratch.

```shell
npm run clean
rm package-lock.json
npm install
npm run dev
```

## Running Storybook

```shell
# Install Storybook dependencies
cd storybbok
npm ci
cd ..

# Run Storybook
npm run storybook
```

## Running Unit Tests

```shell
npm test
```

## Running End-to-End Tests

```shell
npm run dev # starts a local server hosting the react app

# run cypress in a different shell
npm run cypress
```

## Code Formatting

```shell
npm run format
```

## Running the Custom Plugin

If you have not installed Code Shaper, install it first:

```shell
npm install -g code-shaper
```

Now build and run the React Patterns plugin

```shell
npm run build

shaper
? Which plugin would you like to run? React Patterns
? Which generator would you like to run? fetch-hook
? What are you fetching? Orders
? What is the return type? Order[]
? Parent directory? apps/movie-magic/src/pages/HomePage

Creating useOrders...
  useOrders.ts
```
