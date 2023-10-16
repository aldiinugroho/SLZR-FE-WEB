import * as React from "react";
import { BodyTemplate, Customheader } from "../../components";
import { useParams } from "react-router-dom";
import { useCaseCar } from "../../services/usecase";
import { DetailDisplayer, ImageDisplayer } from "./components";
import { ModelImageDisplayer } from "./components/ImageDisplayer";
import { storeDetailCar } from "./store";
import { ModelDetailDisplayer } from "./components/DetailDisplayer";

function Index({
}) {
  const {carId} = useParams()

  React.useEffect(() => {
    getDetail(carId)
  },[])

  async function getDetail(params = "") {
    try {
      await useCaseCar.Detail(params)
    } catch (error) {
      
    }
  }

  return(
    <BodyTemplate>
      <Customheader />
      <ComponentBody />
    </BodyTemplate>
  )
}

function ComponentBody({}) {
  const store = storeDetailCar((state) => state)
  return(
    <div style={{
      padding: 10,
      display: "flex"
    }}>
      {store.data !== null && (
        <React.Fragment>
          <ImageDisplayer 
            data={store.data.carImage}
          />
          <div style={{padding: 2}}></div>
          <DetailDisplayer 
            data={store.data}
          />
        </React.Fragment>
      )}
    </div>
  )
}

export default Index