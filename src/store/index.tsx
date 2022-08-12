import { devtools } from 'zustand/middleware'
import create from 'zustand'
import { faker } from '@faker-js/faker'

interface LifeState {
  random: string
  getRandom: () => void
}

export const useLifeStore = create<LifeState>()(
  devtools((set) => ({
    random: faker.datatype.uuid(),
    getRandom: () => set({ random: faker.datatype.uuid() }),
  })),
)
