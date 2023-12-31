import * as React from "react";
import { styleTruncate } from "../../../../style";
import { useCaseCar } from "../../../../services/usecase";
import { storeAllListCar } from "./store";
import { ModelCarList } from "./models/carlist";
import { rupiahFormat, useScreenWidth } from "../../../../utils";
import { useNavigate } from "react-router-dom";

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
      // padding: 10,
      display: "flex",
      flexWrap: "wrap"
    }}>
      {storeCarList.loading && (
        <CellDetail 
          loading={true}
        />
      )}
      {!storeCarList.loading && storeCarList.data.map((i = new ModelCarList({}),x) => (
        <CellDetail 
          key={x}
          carId={i.carId}
          img={i.carImage}
          title={i.carName}
          price={i.carSellPrice}
        />
      ))}
    </div>
  )
}

function CellDetail({
  carId = "",
  img = "",
  title = "",
  price = "",
  loading = false
}) {
  const navigate = useNavigate()
  var widthscreen = useScreenWidth()

  function goToDetail(carId = "") {
    if (loading) return
    navigate(`/car/detail/${carId}`)
  }

  React.useEffect(() => {
    console.log(widthscreen);
  },[widthscreen])

  return(
    <div 
    onClick={() => goToDetail(carId)}
    style={{
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      borderRadius: 5,
      width: widthscreen < 500 ? (widthscreen/2)-20 : 180,
      height: 200,
      backgroundColor: "#f5f5f5",
      padding: 5,
      margin: 5
    }}>
      <div style={{
        width: "100%",
        height: "100%",
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