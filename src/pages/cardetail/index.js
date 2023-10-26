import * as React from "react";
import { BodyTemplate, Customheader } from "../../components";
import { useParams } from "react-router-dom";
import { useCaseCar } from "../../services/usecase";
import { DetailDisplayer, ImageDisplayer } from "./components";
import { ModelImageDisplayer } from "./components/ImageDisplayer";
import { storeDetailCar } from "./store";
import { ModelDetailDisplayer } from "./components/DetailDisplayer";
import { useScreenWidth } from "../../utils";

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
      display: "flex",
      flexDirection: "column"
    }}>
      {(
        <React.Fragment>
          <ImageDisplayer 
            loading={store.loading}
            data={store.data}
          />
          <div style={{padding: 2}}></div>
          <DetailDisplayer 
            loading={store.loading}
            data={store.data}
          />
        </React.Fragment>
      )}
    </div>
  )
}

export default Index