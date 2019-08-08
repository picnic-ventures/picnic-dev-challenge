import { Resolvers } from './__generated__/types'

const resolvers: Resolvers = {
  Query: {
    cats(_, { liked }, { session, stores }) {
      const allCats = stores.cats.all()
      if (liked == null) return allCats
      return allCats.filter(cat => {
        const userLikes = stores.likes.get(session, cat.id)
        return liked ? userLikes : !userLikes
      })
    },
    cat(_, { id }, { stores }) {
      return stores.cats.get(id)
    },
  },
  Mutation: {
    like(_, { catId, value }, { session, stores }) {
      stores.likes.update(session, catId, value)
      return stores.cats.get(catId)
    },
  },
  Cat: {
    liked(cat, _, { session, stores }) {
      return stores.likes.get(session, cat.id)
    },
  },
}

export default resolvers
