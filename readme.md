# Picnic React Native dev challenge

![](./readme.png)

The aim of this project is to test your ability to develop two screens in an existing React Native app, following a design spec as precisely as possible.

We have aimed to make the tech stack as close as possible to the "real deal" you will be working with: the client is a React Native project using [Expo](https://expo.io/), and the server is a Node.js-based GraphQL server built with [`graphql-yoga`](https://www.npmjs.com/package/graphql-yoga), which is a thin layer on top of [Express](https://expressjs.com/) and [Apollo Server](https://www.apollographql.com/docs/apollo-server/). The whole project is written in TypeScript, with types generated from the GraphQL schema using [`graphql-codegen`](https://graphql-code-generator.com/). All of these things are already set up for you, you just need to implement the layouts of the screens in the design spec.

**Please read the whole file before you get started.** There are some helpful links at the end of the file if you want to do any background reading on any of the technologies used in the project.

## The design spec

[**Check out the design spec here.**](https://www.figma.com/file/Y0N6jk9SYSwveaci5oUjo3/Picnic-Tech-Task)

We are using [Figma](https://www.figma.com/) as our main design tool. You will have to create an account to use the tool.

Once logged in, you will be able to click on any shape in the layouts, and see CSS rules like the font family, font size, etc.

Note that the layout rules (like `position`, `width`, `height`, etc.) mentioned in the sidebar very rarely match up to the CSS that is actually needed in the app. Rather than exact widths/heights, you should mostly be focusing on making the margins/paddings match the spec closely, as well as font sizes/weights and colors.

A very useful tool for finding out margins in Figma is to select a shape, hold down the `alt` button, and hover over any other shape. You will then see the distance between the shapes show up.

Make sure you're happy with navigating the Figma project before getting started. If anything is unclear, please ask!

## Setting up your dev environment

> ⚠️**If any of these setup steps are unclear, or do not work for you, please reach out to me as soon as possible!** These steps are unfortunately inevitable, but the point of this exercise is not to test whether you're able to set all this stuff up from scratch.

To get started, fork this repository on GitHub by clicking the "Fork" button in the top-right corner. **Please make sure your forked repo is private.** (It should be private by default.)

Once you have forked the repo, please add me ([**@lachenmayer**](https://github.com/lachenmayer)) as a collaborator to your repo, so I can check out your code once you're finished.

### Folder structure

The repo contains two JS packages, `client` and `server`. I recommend having (at least) two terminal windows/tabs open, so that you can have the server and client build tools running at all times.

### The server

To set up the server, open a terminal, and `cd` to the `server` directory. Once in the server directory, run the following

```
npm install
```

Once the installation is complete, you can run the following command to run a dev server:

```
npm run dev
```

This will start a server which will restart any time you make changes in the `server` directory. **You should not have to make any changes to the server code**, but you if you want to try out making some changes, feel free. (Of course I can't guarantee that the server is bug-free, so maybe you might have to make changes after all...!)

If everything went smoothly, you should see:

```
Server is running on http://localhost:4000
```

If you visit [`http://localhost:4000`](http://localhost:4000) in your browser, you should see the "GraphQL Playground", where you can experiment with making queries.

You can click on the "DOCS" tab on the right hand side of the screen to see what fields are available to you.

To get started, try entering this query in the left hand side of the screen:

```graphql
query Cats {
  cats {
    id
    name
  }
}
```

If you press the play button, you should see some results on the right side of the screen.

### The client

If you're setting up Expo for the first time, this might take a little bit more time -- hopefully this will work smoothly but **if you have any issues getting Expo running, please reach out to me, and I can help sort it out**.

There are two options for developing the client:

1. Download the Expo app on your phone, and develop on your phone. Simply get the app from [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent) / [iOS App Store](https://itunes.com/apps/exponent).
2. Use the iOS Simulator on your laptop if you have a Mac. [Follow this guide](https://docs.expo.io/versions/v34.0.0/workflow/ios-simulator/) to set that up.

In a separate terminal window/tab from the one running your server, `cd` to the `client` directory.

Then run:

```
npm install
```

Once everything is installed, try running:

```
npm run start
```

This will run the Expo CLI tool.

If everything works smoothly, a browser window should open. Expo will probably ask you to sign up / log in the first time you use it.

If you open up the Expo app, you should see the "Catsat" show up in the "Recently in Development" list. (If you are using the iOS simulator instead, click on "open iOS simulator" in the browser window, or press `i` in the command line tool.)

You can start the app by tapping on it in the list. (Make sure your server is running before you start the app!)

### GraphQL types

In a separate terminal window/tab, `cd` to the `client` directory, and run:

```
npm run types:watch
```

This runs the GraphQL code generator, and will update the TypeScript definitions whenever you change any of the GraphQL queries. You will need this running if you are specifying new queries, or adding new fields to existing queries, otherwise the changes to your queries will not show up in the client code.

### Setting up your editor

I recommend using either [VS Code](https://code.visualstudio.com/), or [Atom](https://atom.io/) if you prefer.

VS Code comes with TypeScript support out of the box, so you should be able to just open any of the TypeScript files without problems.

If you're using Atom, I strongly recommend installing the [`atom-ide-ui` and `ide-typescript` packages](https://ide.atom.io/). This will make your life much easier, as errors will show up in your editor, component names will auto-complete, etc.

**Please definitely install [**ESLint**](https://eslint.org/docs/user-guide/integrations#editors) and [**Prettier**](https://prettier.io/docs/en/editors.html) plugins in your editor.** We use these tools to maintain a consistent code style. The Prettier plugin will automatically format your code to a consistent style whenever you save any TypeScript or JavaScript file -- if that does not happen automatically, make sure you enable the "Format on Save" option in your editor.

## Requirements

Once you have everything set up, you should be able to start coding! :)

You should commit your progress once you've completed each step, so that even if you don't finish the whole exercise, I can still see some progress.

In the `client` directory, you should see a directory called `screens` containing a `CatList` screen, and a `CatDetail` screen, as well as corresponding `.graphql` files defining the queries. These correspond to the "Feed" and "Detail" pages in the Figma spec.

### Task 1: Cat feed

The `CatList` screen already has a bunch of sample code, which demonstrates:

- how to make a query (`useCatListQuery`)
- how to conveniently get data out of a nested object which can potentially be null/undefined (using [`idx`](https://www.npmjs.com/package/idx), imported as `_`)
- how to navigate to the `CatDetail` screen using [`react-navigation`](https://reactnavigation.org/) ([see here](https://reactnavigation.org/docs/en/navigating.html) for details)
- how to load the cat images
- how to set a custom font -- the names for the available fonts are defined in `App.tsx`

I would recommend starting with implementing the layout for _just the grid of cats_, ie. without the filter buttons, and leaving out the like button functionality initially. You will have completed this step if you have a grid of cats which displays all the relevant information, and clicking on any of the cats opens the detail view for the corresponding cat (you can close the detail view by swiping down on the screen).

You will need to change the query defined in `CatList.graphql` to fetch more data. Make sure the `types:watch` npm script is running, as described in the [GraphQL Types](#graphql-types) section above.

### Task 2: Cat detail view

Once you've implemented the layout for the list view, implement the layout for the detail view, according to the spec. You will need to adapt the query and component called `CatDetail`.

In the `assets` folder, you will find image assets for the like button. Check the react-native [`Image`](https://facebook.github.io/react-native/docs/image.html) docs for info on how to load these.

### Task 3: Like buttons

Once you have all of the layouts implemented, make the like buttons actually toggle on/off, and send a request to the server.

To do that, you will need to define a GraphQL _mutation_. Try manually creating a mutation in the GraphQL Playground page ([`http://localhost:4000`](http://localhost:4000)) to get a feel for how that works. I've defined a mutation type called `like` which takes a cat id and a boolean value as parameters. Check the "DOCS" tab on the right hand side of the Playground page to find out the exact naming.

Read the documentation for [how to use mutations with `urql`](https://formidable.com/open-source/urql/docs/getting-started/#using-hooks-1), the GraphQL client we're using in the app. (Note that in the documentation they define the mutation directly in the JS file. Instead, you should add the mutation to one of the `.graphql` files, and import the automatically generated hook function, similar to how the existing queries are defined.)

One thing that's very important when defining mutations is to always return all of the fields that have changed, as well as the `id` field. This allows the GraphQL client to automatically update the data in all parts of the UI that have changed. You should test whether the like button in the detail view updates when you press the button in the list view, and vice versa.

Note that the likes are not persisted in any database, so if you restart the server, they will reset.

### Task 4: Filtering the cat feed

The `cats` query type has an optional boolean parameter called `liked`. If you pass `liked: true` to this, it will only return the cats that you have liked (either by using a like button in the app or by manually creating a mutation in the playground). Note that if you pass `liked: false`, it will only show cats that you _have not liked_, which is not a feature we have in the spec at the moment. Apart from the query that's being performed, all of the view logic should be the same, so you should not need to duplicate any other code.

To implement the "All cats" and "Liked" buttons, use React's `useState` hook, rather than using a class component and `this.setState`. [The official React documentation](https://reactjs.org/docs/hooks-state.html) about the `useState` hook is very comprehensive.

## What I'm looking for

Hopefully all of these requirements are clear. On top of actually completing the functionality, an ideal solution would meet these criteria:

- **Matches existing code style**: If you install the Prettier editor plugin (described [above](#setting-up-your-editor)), it will automatically match the indentation to the existing style.
- **Clear component and variable naming**: This should be obvious, but your components and variables should clearly reflect what they are used for. You can easily rename variables in VS Code / Atom by using the "Rename Symbol" functionality.
- **React hooks**: You should not need to create any class components. Instead, you should use the `useState` hooks for component state. You should not really need to use any other kind of hook, other than the data fetching hooks.
- **Meaningful commit messages**: These do not need to be super detailed, but they should tell me what's happening in the commit. Eg. `implement like buttons` is a perfectly acceptable commit message, `fix some stuff` is not.

## Helpful links

- [Expo docs](https://docs.expo.io/versions/latest/)
- [Introduction to GraphQL](https://graphql.org/learn/)
- [TypeScript Deep Dive](https://basarat.gitbooks.io/typescript/content/)
- [`urql` docs](https://formidable.com/open-source/urql/docs/)