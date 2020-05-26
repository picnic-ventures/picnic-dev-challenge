import { Interval } from 'luxon'

export type Maybe<T> = T | null | undefined

export type Cat = {
  id: string
  name: string
  owner: string // person id
  age?: Maybe<number>
  color?: Maybe<string>
  description?: Maybe<string>
  image?: Maybe<string>
  availability: Interval[]
}

export type Person = {
  id: string
  name?: Maybe<string>
  email?: Maybe<string>
  phone?: Maybe<string>
  address?: Maybe<string>
}

export type DateInterval = Interval
