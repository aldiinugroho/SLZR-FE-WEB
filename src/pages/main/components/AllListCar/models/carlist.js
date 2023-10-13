export class ModelCarList {
  carBPKB = false
  carSTNK = false
  carDescription = ""
  carFuel = ""
  carId = ""
  carName = ""
  carSellPrice = ""
  carTax = new Date()
  carTransmission = ""
  carYear = ""
  carImage = ""
  constructor({
    carBPKB = false,
    carSTNK = false,
    carDescription = "",
    carFuel = "",
    carId = "",
    carName = "",
    carSellPrice = "",
    carTax = new Date(),
    carTransmission = "",
    carYear = "",
    carImage = []
  }){
    this.carBPKB = carBPKB
    this.carSTNK = carSTNK
    this.carDescription = carDescription
    this.carFuel = carFuel
    this.carId = carId
    this.carName = carName
    this.carSellPrice = carSellPrice
    this.carTax = carTax
    this.carTransmission = carTransmission
    this.carYear = carYear
    if (carImage.length != 0) {
      this.carImage = carImage[0]?.carImage
    }
  }
}