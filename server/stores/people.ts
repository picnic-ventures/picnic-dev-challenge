import faker from 'faker'
import { Person } from '../__generated__/types'

export default class PeopleStore {
  private people = new Map<string, Person>([
    ['p0', fakePerson('p0')],
    ['p1', fakePerson('p1')],
    ['p2', fakePerson('p2')],
    ['p3', fakePerson('p3')],
  ])

  get(id: string) {
    return this.people.get(id)
  }
}

function fakePerson(id: string): Person {
  const name = faker.name.firstName()
  return {
    id,
    name,
    email: faker.internet.email(name),
    phone: faker.phone.phoneNumber('07### ######'),
    address: `${faker.address.streetAddress()}, ${faker.address.city()}`,
  }
}
