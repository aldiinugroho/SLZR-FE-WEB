import { ModelCarDetail, ModelCarImage } from "../../pages/cardetail/models/cardetail";
import { storeDetailCar } from "../../pages/cardetail/store";
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
    storeDetailCar.getState().setLoading()
    const result = await requestCar.getCar({path: `/detail/${carId}`})
    const mapped = new ModelCarDetail({
      ...result.data,
      carImage: result.data.msCarImages.map((i) => new ModelCarImage({
        image: i?.carImage
      }))
    })
    storeDetailCar.getState().setData(mapped)
  } catch (error) {
    storeDetailCar.getState().resetData()
    throw error
  }
}