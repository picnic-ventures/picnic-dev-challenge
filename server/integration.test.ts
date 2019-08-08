import { Cookie } from 'tough-cookie'
import test from 'ava'
import { GraphQLClient } from 'graphql-request'
import startServer from './server'

let serverUrl = 'http://localhost:4001/graphql'
let cookie = ''
test.before(async _ => {
  await startServer(4001)
  const res = await fetch(`${serverUrl}/`, { credentials: 'include' })
  const parsed = Cookie.parse(res.headers.get('set-cookie')!)
  cookie = parsed!.cookieString()
})

async function request(query: string, variables?: any) {
  const client = new GraphQLClient(serverUrl, { headers: { cookie } })
  return await client.rawRequest(query, variables)
}

test('list cats', async t => {
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

test('liking a cat', async t => {
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
