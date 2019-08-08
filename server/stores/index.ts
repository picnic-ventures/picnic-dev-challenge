import LikesStore from './likes'
import CatsStore from './cats'

export default {
  cats: new CatsStore(),
  likes: new LikesStore(),
}
