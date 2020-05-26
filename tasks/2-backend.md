# Task 2: Backend

This task aims to test whether you are able to design an API that is consistent with the requirements, is easy to understand, and follows the existing architecture.

We expect you to:
- design a GraphQL schema that allows for the operations described below,
- to implement GraphQL resolvers that perform these operations,
- and to write test cases that demonstrate the required functionality.

To simplify things, all operations will be performed in memory in the server. **You don't need to implement any data storage or persistence.**

## Background & spec

While our beta users love the ability to see cat photos in the app, they have commented that it's quite difficult to arrange catsitting without knowing what dates the cats need to be sat.

Additionally, the cat owners have been complaining about far too many requests for sitting their cute cats - and it's a huge privacy problem to have the cat owners' full address and phone number visible to all users of the app.

While our designers are working hard on the exact frontend spec, we should get started on getting the backend ready to go, based on the following requirements:

- Users should be able to request to catsit a particular cat on a particular range of dates.
  - The user should be able to leave a message for the owner with the request, but this is not required.
  - If the cat is available in that date range:
    - The user should be informed that their request was successful.
    - The requested date range should be removed from that cat's availabilities.
  - If the cat is not available:
    - The user should be informed that the cat is not available in the desired date range.
    - There should be no other user-visible changes.
- A cat owner's information should only be visible to a user if the user has successfully requested to catsit that cat.

## Tips

Make sure you have followed the server setup steps in the README, and ensure you are running `yarn dev` while developing, otherwise any schema changes you make will not be reflected in the generated TypeScript types.

In the initial stages of exploration, the GraphQL Playground which starts on [http://localhost:4000/](http://localhost:4000/) will be extremely helpful for testing your code.

The GraphQL schema is defined in `server/types.graphql`. Read the [GraphQL docs](https://graphql.org/learn/) if you are not familiar with GraphQL's schema definition language or type system. A working knowledge of GraphQL's type system is essential for designing a reasonable API.

The resolvers are defined in `server/resolvers.ts`, and these have access to the classes defined in the `stores/` folder via the GraphQL `context`, which is passed to every resolver.

The `stores` are classes which store data, and implement the business logic related to individual types. In a real application, these would additionally handle persistence, for example by writing to a database or an external (micro-)service. In this case, we simply store all of the information in memory, and use fake data. You should make use of JavaScript's built-in `Map` and/or `Set` data structures where appropriate. You should not rely on any global variables other than the stores, but feel free to define as many new stores as you need.

## Tasks

Run `yarn test` to run the test suite, including the API tests in `server/api.test.ts`. You should see a bunch of failing tests. Your task is to get these tests to pass by adding relevant types to the schema, implementing resolvers for these, implementing the business logic in stores, and finally writing the test cases that demonstrate your implementation.

You should add as many other tests as you feel is necessary for you to implement the feature properly, but more tests are not necessarily better, and you may only need just the existing ones.

We use the [ava](https://github.com/avajs/ava) test runner, so check the ava docs if you're unsure about how to write the correct assertions. You can run `yarn test --watch` to automatically rerun tests when you make changes.

I don't care whether you write tests first or last -- you're probably better off writing them after you have implemented everything, but you do you.

### Task 1: Users should be able to request to catsit a particular cat on a particular range of dates

You should define a new mutation which allows passing in a (required) cat id & date range, and an optional message.

- If the cat is available in that date range:
  - The user should be informed that their request was successful.
  - The requested date range should be removed from that cat's availabilities.
- If the cat is not available:
  - The user should be informed that the cat is not available in the desired date range.
  - There should be no other user-visible changes.

It is best practice in GraphQL to return any object that is affected by a mutation, so you will want to define a response type which contains a field resolving to the cat whose availability was changed, as well as the available/unavaible status.

To help you get started, we have already added a field called `availabilities` on the `Cat` type. We use the excellent [Luxon](https://moment.github.io/luxon/) library's [Interval](https://moment.github.io/luxon/docs/class/src/interval.js~Interval.html) type to model date intervals, so that you won't need to implement any tricky date interval logic.

We have defined a GraphQL scalar called `Date`, which validates that any string passed into the API is a valid date of shape `YYYY-MM-DD`, so you don't need to do any date validation.

We also defined a GraphQL type called `DateInterval`, which allows you to simply return `Interval` objects in resolvers without having to convert them first.

### Task 2: A cat owner's information should only be visible to a user if the user has successfully requested to catsit that cat.

Currently, we unconditionally resolve the owner's information (ie. the `Person` type) for each cat.

You should modify the `owner` resolver on the `Cat` type to check whether the current `userId` has successfully requested this cat, and return `null` otherwise.

Note: the `Cat` object that is returned from the mutation you implemented should contain the owner's information, as well as any future query which resolves to that cat.
