import { Cat } from '../__generated__/types'

export default class CatsStore {
  private cats: Cat[] = [
    {
      id: 'c0',
      image: '/images/smoothie.jpg',
      name: 'Smoothie',
      color: '#FAF4F0',
      owner: { id: 'p0', name: 'Arvid', email: 'arvid@smoothie.com' },
      age: 4,
      description:
        'Smoothie might be the most beautiful cat in all the land. Smoothie is a British Longhair living in the Netherlands with her owner, Arvid van Boekel. Like many other cats in 2016, she has her own Instagram handle. But, Smoothie is special because she is one seriously pretty kitty.',
    },
    {
      id: 'c1',
      image: '/images/betty.jpg',
      name: 'Betty',
      color: '#FFEFF1',
      owner: { id: 'p1', name: 'Lucy', email: 'lucy@gmail.com' },
      age: 2,
      description:
        'Betty is the absolute joy of our household and hearts! She is the chattiest, softest, most loving of cats and desires a permanent, mature and adoring retirement home. Betty is very socially confident and will warm up to human visitors quite quickly, and absolutely loves and demands attention.',
    },
    {
      id: 'c2',
      image: '/images/mabel.jpg',
      name: 'Mabel',
      color: '#EDF4FA',
      owner: { id: 'p2', name: 'Jonny', email: 'jonny@picnic.ventures' },
      age: 2,
      description:
        'Mabel is lazy, but she is the absolute joy of our household and hearts! She is the chattiest, softest, most loving of cats and desires a permanent, mature and adoring retirement home. Mabel is very socially confident and will warm up to human visitors quite quickly, and absolutely loves and demands attention.',
    },
    {
      id: 'c3',
      image: '/images/helen.jpg',
      name: 'Helen',
      color: '#F8EFE6',
      owner: { id: 'p3', name: 'Beth', email: 'bethstern@email.com' },
      age: 1,
      description:
        'Although Helen is only a Kitten, she is one of the most beautiful shorthair cats you will ever meet! She is the chattiest, softest, most loving of cats and desires a permanent, mature and adoring retirement home. Helen is very socially confident and will warm up to human visitors quite quickly, and absolutely loves and demands attention.',
    },
    {
      id: 'c4',
      image: '/images/felix.jpg',
      name: 'Felix',
    },
    {
      id: 'c5',
      image: '/images/derps.jpg',
      name: 'Derps',
      owner: { id: 'p5', name: 'Fahad', email: 'fahad@picnic.ventures' },
      age: 6,
      description:
        'Derps was first spotted as a stray around Christmas and turned up in a garden in Peckham a few weeks ago, where kind people have been feeding him.\n\nDerps is a handsome chap with ticked fur reminiscent of a hare and beautiful green eyes.\n\nHe is a playful cat and loves playing in the garden and people who give him the love and affection every cat needs.',
    },
  ]

  get(id: string) {
    return this.cats.find(cat => cat.id === id) || null
  }

  all() {
    return this.cats
  }
}
