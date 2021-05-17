# Picnic dev challenge

> Hello! This is part of [our hiring process for software engineers](https://www.notion.so/teampicnic/Careers-at-Picnic-473a29baa65f4b1faea5f87baaae1b6c). If you'd like to apply, check out the instructions in that document. **Note that we will not review any submissions unless you have completed the first steps of this process, and have been asked to complete this task!**

![](./readme.png)

The aim of this project is to test your ability to implement features end-to-end, based on the kind of requirements you're likely to receive while working at Picnic.

We have aimed to make the tech stack as close as possible to the "real deal" you will be working with: the client is a React Native project using [Expo](https://expo.io/), and the server is a Node.js-based GraphQL server built with [`graphql-yoga`](https://www.npmjs.com/package/graphql-yoga), which is a thin layer on top of [Express](https://expressjs.com/) and [Apollo Server](https://www.apollographql.com/docs/apollo-server/). The whole project is written in TypeScript, with types generated from the GraphQL schema using [`graphql-codegen`](https://graphql-code-generator.com/). All of these things are already set up for you to provide a flavour for what it is like to work with a simplified version of our stack.

**Each task should not take more than 2 hours to fully implement.** We have done a lot of setup work to ensure that you can get directly to the "meat" of each task, so it should not take you more than 4 hours to implement the entire thing. If you aren't able to finish everything in that time, feel free to take shortcuts or skip certain parts, as long as you're able to tell us in detail what work would remain in an imaginary "follow-up PR".

We will discuss your solution in a follow-up call, so make sure to take notes on any improvements you would make, or any parts of your solution you're not happy with (or which parts you're particularly proud of!).

**Please read the whole file before you get started.** There are some helpful links at the end of the file if you want to do any background reading on any of the technologies used in the project.

## Setting up your dev environment

> ⚠️ **If any of these setup steps are unclear, or do not work for you, please reach out to me as soon as possible!** These steps are unfortunately inevitable for now, but the point of this exercise is not to test whether you're able to set up this stuff from scratch.

To get started, fork this repository on GitHub by clicking the "Fork" button in the top-right corner. **Please make sure your forked repo is private.** (It should be private by default.)

Once you have forked the repo, please add me ([**@lachenmayer**](https://github.com/lachenmayer)) as a collaborator to your repo, so I can check out your code once you're finished.

### Dependencies

To run any of the code in this project, you'll need Node.js and Yarn.

If you're on a Mac, and you don't have Node or Yarn, you can use [Homebrew](https://brew.sh/) to install them:

```
brew install node yarn
```

The project assumes Node v12 (LTS), but newer versions should work fine. If you have an older version of Node, I'd recommend upgrading to v12.

### Folder structure

The repo contains two JS packages, `client` and `server`. I recommend having (at least) two terminal windows/tabs open, so that you can have the server and client build tools running at all times.

### The server

To set up the server, open a terminal, and `cd` to the `server` directory. Once in the server directory, run the following

```
yarn
yarn build
```

This will install all dependencies, and then run an initial build.

Once the installation is complete, you can run the following command to run a dev server:

```
yarn dev
```

This will start a server which will restart any time you make changes in the `server` directory.

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

If you get a warning in the server logs telling you that no authorization header was found, you can add the following to the "HTTP Headers" tab:

```json
{ "Authorization": "Bearer some_user" }
```

The server does not perform any actual authorization, it just uses the given token as a user id. This is obviously a massive over-simplification, but it is the simplest possible way we can provide a basic notion of persistent sessions.

### The client

In this exercise we'll be using [Expo](https://expo.io/) as a dev environment for the frontend code. There are two options for developing the client:

1. Download the Expo app on your phone, and develop on your phone. Simply get the app from [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent) / [iOS App Store](https://itunes.com/apps/exponent).
2. Use the iOS Simulator on your laptop if you have a Mac. [Follow this guide](https://docs.expo.io/workflow/ios-simulator/) to set that up.

In a separate terminal window/tab from the one running your server, `cd` to the `client` directory.

Then run:

```
yarn
```

Once everything is installed, run:

```
yarn start
```

This will run the Expo CLI tool.

If everything works smoothly, a browser window should open. Expo will probably ask you to sign up / log in the first time you use it.

If you open up the Expo app, you should see "Catsat" show up in the "Recently in Development" list.

You can start the app by tapping on it in the list. (Make sure your server is running before you start the app!)

If you are using the iOS simulator instead, click on "open iOS simulator" in the browser window, or press `i` in the command line tool.

### GraphQL types

In a separate terminal window/tab, `cd` to the `client` directory, and run:

```
yarn types:watch
```

This runs the GraphQL code generator, and will update the TypeScript definitions whenever you change any of the GraphQL queries. **You will need this running if you are specifying new queries, or adding new fields to existing queries, otherwise the changes to your queries will not show up in the client code.**

### Setting up your editor

I recommend using either [VS Code](https://code.visualstudio.com/), or [Atom](https://atom.io/) if you prefer.

VS Code comes with TypeScript support out of the box, so you should be able to just open any of the TypeScript files without problems.

If you're using Atom, I strongly recommend installing the [`atom-ide-ui` and `ide-typescript` packages](https://ide.atom.io/). This will make your life much easier, as errors will show up in your editor, component names will auto-complete, etc.

**Please install the [**ESLint**](https://eslint.org/docs/user-guide/integrations#editors) and [**Prettier**](https://prettier.io/docs/en/editors.html) plugins in your editor.** We use these tools to maintain a consistent code style. The Prettier plugin will automatically format your code to a consistent style whenever you save any TypeScript or JavaScript file -- if that does not happen automatically, make sure you enable the "Format on Save" option in your editor.

Once you have everything set up, you should be able to start coding! :)

## Tasks

Once you have everything set up, check out the instructions for the tasks you should tackle:

- [**Task 1: Frontend**](tasks/1-frontend.md): Develop two screens in an existing React Native app, following a design spec as precisely as possible.
- [**Task 2: Backend**](tasks/2-backend.md): Design and build a GraphQL API for a new feature, and create a test suite for it.

## What I'm looking for

Hopefully all of the requirements are clear. On top of actually completing the functionality, an ideal solution would meet these criteria:

- **Matches existing code style**: If you install the Prettier editor plugin (described [above](#setting-up-your-editor)), it will automatically match indentation and spacing to the existing style. Note that by code style we don't just mean indentation and spacing, but also how your code is structured and named.
- **Clear naming**: This should be obvious, but your components, variables and APIs should clearly reflect what they are used for. You can easily rename variables in VS Code / Atom by using the "Rename Symbol" functionality.
- **Meaningful commit messages**: These do not need to be super detailed, but they should tell me what's happening in the commit. Eg. `implement like buttons` is a perfectly acceptable commit message, `fix some stuff` is not.

## Helpful links

- [Expo docs](https://docs.expo.io/versions/latest/)
- [Introduction to GraphQL](https://graphql.org/learn/)
- [TypeScript Deep Dive](https://basarat.gitbooks.io/typescript/content/)
- [`urql` docs](https://formidable.com/open-source/urql/docs/)
