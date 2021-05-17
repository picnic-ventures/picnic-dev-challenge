import test from 'ava'
import { GraphQLClient } from 'graphql-request'
import startServer from './server'

const serverUrl = 'http://localhost:4001/graphql'

// Ensures that all tests are run as the same user.
const fakeUserId = 'test_user'

test.before(async (_) => {
  await startServer(4001)
})

async function request(query: string, variables?: any) {
  const client = new GraphQLClient(serverUrl, {
    headers: { Authorization: `Bearer ${fakeUserId}` },
  })
  return await client.rawRequest<any>(query, variables)
}

test('can list cats', async (t) => {
  const { data, errors } = await request(`
    query AllCats {
      cats {
        id
        name
      }
    }
  `)
  t.falsy(errors)
  t.truthy(data.cats)
  t.assert(data.cats.length > 0)
  t.is(typeof data.cats[0].id, 'string')
  t.is(typeof data.cats[0].name, 'string')
})

test('can like a cat', async (t) => {
  const {
    data: { cats },
  } = await request(`
    query AllCats {
      cats {
        id
        name
        liked
      }
    }
  `)

  for (const cat of cats) {
    t.false(cat.liked)
  }

  const catId = cats[0].id

  const { data: mutation } = await request(
    `
      mutation Like($catId: ID!) {
        like(catId: $catId, value: true) {
          id
          name
          liked
        }
      }
    `,
    { catId }
  )

  t.truthy(mutation.like)
  t.true(mutation.like.liked)

  const {
    data: { cat },
  } = await request(
    `
      query OneCat($catId: ID!) {
        cat(id: $catId) {
          id
          name
          liked
        }
      }
    `,
    { catId }
  )
  t.truthy(cat)
  t.true(cat.liked)
})

test('can request a cat for catsitting - success', async (t) => {
  // The request should only be successful if the cat is actually available in that date range.
  t.fail('Not implemented yet')
})

test('can request a cat for catsitting - failure', async (t) => {
  // The date range is not available
  t.fail('Not implemented yet')
})

test('owner profile is invisible to a user until a cat has been successfully requested', async (t) => {
  t.fail('Not implemented yet')
})
