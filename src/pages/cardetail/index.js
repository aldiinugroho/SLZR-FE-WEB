import * as React from "react";
import { BodyTemplate, Customheader } from "../../components";
import { useParams } from "react-router-dom";

function Index({
}) {
  const {carId} = useParams()

  React.useEffect(() => {
    getDetail(carId)
  },[])

  async function getDetail(params = "") {
    try {
      console.log(params);
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