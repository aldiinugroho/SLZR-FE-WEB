import * as React from "react";
import { BodyTemplate, Customheader } from "../../components";
import { useParams } from "react-router-dom";
import { useCaseCar } from "../../services/usecase";

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
    </BodyTemplate>
  )
}

export default Index