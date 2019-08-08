export default class LikesStore {
  private store = new Map<string, Set<string>>()

  update(userId: string, catId: string, value: boolean) {
    const userLikes = this.store.get(userId) || new Set()
    if (value) {
      userLikes.add(catId)
    } else {
      userLikes.delete(catId)
    }
    this.store.set(userId, userLikes)
  }

  get(userId: string, catId: string) {
    const userLikes = this.store.get(userId) || new Set()
    return userLikes.has(catId)
  }
}
