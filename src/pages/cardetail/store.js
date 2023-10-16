import { create } from 'zustand'
import { ModelCarDetail } from './models/cardetail'

const storeDetailCar = create((set) => ({
  data: null,
  loading: false,
  setLoading: () => set({loading: true}),
  setData: (data = new ModelCarDetail({})) => {
    set({
      data: data,
      loading: false
    })
  },
  resetData: () => {
    set({ data: null, loading: false })
  },
}))

export {
  storeDetailCar
}