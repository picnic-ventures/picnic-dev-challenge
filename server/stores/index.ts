import CatsStore from './cats'
import LikesStore from './likes'
import PeopleStore from './people'

export default {
  cats: new CatsStore(),
  likes: new LikesStore(),
  people: new PeopleStore(),
}
