import { create } from 'zustand'
import { ModelCarList } from './models/carlist'

const storeAllListCar = create((set) => ({
  data: [],
  loading: false,
  setLoading: () => set({loading: true}),
  setData: (data = [new ModelCarList({})]) => {
    set({
      data: data,
      loading: false
    })
  },
  resetData: () => {
    set({ data: [], loading: false })
  },
}))

export {
  storeAllListCar
}