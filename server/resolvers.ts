import { Resolvers } from './__generated__/types'

const resolvers: Resolvers = {
  Query: {
    cats() {
      return [
        {
          id: '0',
          name: 'Tabby',
        },
      ]
    },
  },
}

export default resolvers
