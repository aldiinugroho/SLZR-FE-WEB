import { ModelCarList } from "../../pages/main/components/AllListCar/models/carlist";
import { storeAllListCar } from "../../pages/main/components/AllListCar/store";
import { requestCar } from "../requests"

export async function List(offset = 0) {
  try {
    storeAllListCar.getState().setLoading()
    const result = await requestCar.getCar({path: `/list/${offset}`})
    const mapped = result.data.map((i) => new ModelCarList({
      ...i,
      carImage: i?.msCarImages
    }))
    storeAllListCar.getState().setData(mapped)
  } catch (error) {
    storeAllListCar.getState().resetData()
    throw error
  }
}

export async function Detail(carId = "") {
  try {
    // storeAllListCar.getState().setLoading()
    const result = await requestCar.getCar({path: `/detail/${carId}`})
    console.log(result);
    // const mapped = result.data.map((i) => new ModelCarList({
    //   ...i,
    //   carImage: i?.msCarImages
    // }))
    // storeAllListCar.getState().setData(mapped)
  } catch (error) {
    // storeAllListCar.getState().resetData()
    throw error
  }
}