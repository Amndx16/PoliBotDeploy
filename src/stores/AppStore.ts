import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    user: null as string | null,
  }),
  actions: {
    setUser(name: string) {
      this.user = name
    },
  },
})
