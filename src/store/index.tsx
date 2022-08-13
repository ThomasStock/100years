import { devtools } from 'zustand/middleware'
import create from 'zustand'
import { faker } from '@faker-js/faker'

interface LifeState {
  random: Date | undefined
  getRandom: () => void
}

export const useLifeStore = create<LifeState>()(
  devtools((set) => ({
    random: undefined,
    getRandom: () => set({ random: faker.date.birthdate() }),
  })),
)
