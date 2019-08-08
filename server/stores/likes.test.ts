import test from 'ava'
import LikesStore from './likes'

test('get & update', t => {
  const store = new LikesStore()
  t.false(store.get('123', '456'))
  store.update('123', '456', true)
  t.true(store.get('123', '456'))
})
