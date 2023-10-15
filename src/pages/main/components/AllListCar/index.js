import * as React from "react";
import { styleTruncate } from "../../../../style";
import { useCaseCar } from "../../../../services/usecase";
import { storeAllListCar } from "./store";
import { ModelCarList } from "./models/carlist";
import { rupiahFormat } from "../../../../utils";

function Index({}) {
  const storeCarList = storeAllListCar((state) => state)

  React.useEffect(() => {
    fetchData()
  },[])

  async function fetchData() {
    try {
      await useCaseCar.List()
    } catch (error) {
      
    }
  }

  return(
    <div style={{
      padding: 10,
      display: "flex",
      flexWrap: "wrap"
    }}>
      {storeCarList.data.map((i = new ModelCarList({}),x) => (
        <CellDetail 
          key={x}
          img={i.carImage}
          title={i.carName}
          price={i.carSellPrice}
          loading={storeCarList.loading}
        />
      ))}
    </div>
  )
}

function CellDetail({
  img = "",
  title = "",
  price = "",
  loading = false
}) {
  return(
    <div style={{
      display: "flex",
      flexDirection: "column",
      borderRadius: 5,
      width: 180,
      height: 200,
      backgroundColor: "#f5f5f5",
      padding: 5
    }}>
      <div style={{
        display: loading ? "none" : "flex",
        flexDirection: "column",
        flex: 1
      }}>
        <div style={{
          width: "100%",
          height: "50%",
          backgroundColor: "gray"
        }}>
          <img 
          alt={img}
          width={"100%"}
          height={"100%"}
          style={{
            objectFit: "cover"
          }}
          src={img} />
        </div>
        <div style={{
          padding: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
          // width: "100%",
          backgroundColor: "white",
        }}>
          <div style={{
            fontSize: 15,
            fontWeight: "bold",
            ...styleTruncate(2)
          }}>{title}</div>
          <div style={{
            fontSize: 15,
            ...styleTruncate(1)
          }}>Rp {rupiahFormat(price)}</div>
        </div>
      </div>
    </div>
  )
}

export default Index