# Movie Magic

An example of using Code Shaper to generate a React app. To see step-by-step
instructions to create this app, visit
[Getting Started](https://www.code-shaper.dev/docs/getting-started/overview)
in Code Shaper docs.

![Home Page](assets/home-page.png)

## Running the App

Execute the following commands to build and run the app.

```shell
# In the root directory, install dependencies
npm install

# Run the app
npm run dev
```

Now point your browser to http://localhost:3000.

## Running Storybook

```shell
# Install Storybook dependencies
cd storybbok
npm install
cd ..

# Run Storybook
npm run storybook
```

## Running Unit Tests

```shell
npm test
```

## Running the Custom Plugin

If you have not installed Code Shaper, first install it:

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
