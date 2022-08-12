import { faker } from '@faker-js/faker'

let seed = 0
faker.seed(0)

export const getSeed = () => seed

export const setSeed = (newSeed: number) => {
  seed = newSeed
  faker.seed(newSeed)
}
