# Task 1: Frontend

This task closely resembles the kind of work you'll be doing on the frontend side. It involves taking a design spec for a simple list and detail view and implementing it as closely as possible.

We have tried to do most of the setup work for you, so this task should not take more than an hour or two.

It is up to you to make any relevant technical decisions, but if any of the spec is incomplete or unclear, please document any assumptions you made.

## The design spec

[**Check out the design spec here.**](https://www.figma.com/file/Y0N6jk9SYSwveaci5oUjo3/Picnic-Tech-Task)

We use [Figma](https://www.figma.com/) as our main design tool. You will have to create an account to use the tool.

Once logged in, you will be able to click on any shape in the layouts, and see CSS rules like the font family, font size, etc.

Note that the layout rules (like `position`, `width`, `height`, etc.) mentioned in the sidebar very rarely match the CSS that is actually needed in the app. Rather than exact widths/heights, you should mostly be focusing on making the margins/paddings match the spec closely, as well as colors and font sizes/weights.

A very useful tool for finding out margins in Figma is to select a shape, hold down the `alt` button, and hover over any other shape. You will then see the distance between the shapes show up.

Make sure you're happy with navigating the Figma project before getting started. If anything is unclear, please ask!

## Tasks

In the `client` directory, you should see a directory called `screens` containing a `CatList` screen, and a `CatDetail` screen, as well as corresponding `.graphql` files defining the queries. These correspond to the "Feed" and "Detail" pages in the Figma spec.

### Task 1: Cat feed

The `CatList` screen already has a bunch of sample code, which demonstrates:

- how to make a query (`useCatListQuery`)
- how to navigate to the `CatDetail` screen using [`react-navigation`](https://reactnavigation.org/) ([see here](https://reactnavigation.org/docs/en/navigating.html) for details)
- how to load the cat images
- how to set a custom font -- the names for the available fonts are defined in `App.tsx`

I would recommend starting with implementing the layout for _just the grid of cats_, ie. without the filter buttons, and leaving out the like button functionality initially. You will have completed this step if you have a grid of cats which displays all the relevant information, and clicking on any of the cats opens the detail view for the corresponding cat (you can close the detail view by swiping down on the screen).

You will need to change the query defined in `CatList.graphql` to fetch more data. Make sure the `types:watch` npm script is running, as described in the [GraphQL Types](../README.md#graphql-types) section in the README.

### Task 2: Cat detail view

Once you've implemented the layout for the list view, implement the layout for the detail view, according to the spec. You will need to adapt the query and component called `CatDetail`.

In the `assets` folder, you will find image assets for the like button.

### Task 3: Like buttons

Once you have all of the layouts implemented, make the like buttons actually toggle on/off, and send a request to the server.

To do that, you will need to define a GraphQL mutation. Try manually creating a mutation in the GraphQL Playground page ([`http://localhost:4000`](http://localhost:4000)) to get a feel for how that works. I've defined a mutation type called `like` which takes a cat id and a boolean value as parameters. Check the "DOCS" tab on the right hand side of the Playground page to find out the exact naming.

Read the documentation for [how to use mutations with `urql`](https://formidable.com/open-source/urql/docs/basics/mutations/), the GraphQL client we're using in the app. (Note that in the documentation, they define the mutation directly in the JS file. Instead, you should add the mutation to one of the `.graphql` files, and import the automatically generated hook function, similar to how the existing queries are defined.)

One thing that's very important when defining mutations is to always return all of the fields that have changed, as well as the `id` field. This allows the GraphQL client to automatically update the data in all parts of the UI that have changed. You should test whether the like button in the detail view updates when you press the button in the list view, and vice versa.

Note that the likes are not persisted in any database, so if you restart the server, they will reset.

### Task 4: Filtering the cat feed

The `cats` query type has an optional boolean parameter called `liked`. If you pass `liked: true` to this, it will only return the cats that you have liked (either by using a like button in the app or by manually creating a mutation in the playground). Note that if you pass `liked: false`, it will only show cats that you _have not liked_, which is not a feature we have in the spec at the moment.

Apart from the query that's being performed, all of the view logic should be the same, so you should not need to duplicate any other code.
