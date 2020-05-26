import Date from './scalars/Date'
import { Resolvers } from './__generated__/types'

const resolvers: Resolvers = {
  Query: {
    cats(_, { liked }, { userId, stores }) {
      const allCats = stores.cats.all()
      if (liked == null) return allCats
      return allCats.filter((cat) => {
        const userLikes = stores.likes.get(userId, cat.id)
        return liked ? userLikes : !userLikes
      })
    },
    cat(_, { id }, { stores }) {
      return stores.cats.get(id)
    },
  },
  Mutation: {
    like(_, { catId, value }, { userId: session, stores }) {
      stores.likes.update(session, catId, value)
      return stores.cats.get(catId)
    },
  },
  Cat: {
    liked(cat, _, { userId: session, stores }) {
      return stores.likes.get(session, cat.id)
    },
    owner(cat, _, { stores }) {
      return stores.people.get(cat.owner) || null
    },
  },
  Date,
  DateInterval: {
    start(interval) {
      return interval.start.toISODate()
    },
    end(interval) {
      return interval.end.toISODate()
    },
  },
}

export default resolvers
