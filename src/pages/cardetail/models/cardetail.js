class ModelCarImage {
  image = ""
  constructor({
    image
  }) {
    this.image = image
  }
}

class ModelCarDetail {
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
  carImage = []
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
  }) {
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
    this.carImage = carImage.map((i) => new ModelCarImage(i))
  }
}

export {
  ModelCarDetail,
  ModelCarImage
}