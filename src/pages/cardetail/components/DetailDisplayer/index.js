import * as React from "react";
import { rupiahFormat } from "../../../../utils";
import moment from "moment/moment";
import { ModelCarDetail } from "../../models/cardetail";

function Index({
  data = new ModelCarDetail({}),
  loading = false
}) {

  return(
    <div style={{
      flex: 1
    }}>
      {loading === true && (
        <React.Fragment>
          <CellTitleComponent 
            loading={true}
          />
          <div style={{padding: 2}}></div>
          <CellTitleComponent 
            loading={true}
          />
          <div style={{padding: 2}}></div>
          <CellTitleComponent 
            loading={true}
          />
        </React.Fragment>
      )}
      {loading === false && data !== null && (
        <React.Fragment>
          <CellTitleComponent 
            text={data.carName}
          />
          <div style={{padding: 2}}></div>
          <CellComponent 
            text={`Rp ${rupiahFormat(data.carSellPrice)}`}
          />
          <div style={{padding: 2}}></div>
          <CellCombinedComponent 
            data={data}
          />
          <div style={{padding: 2}}></div>
          <CellComponent 
            text={data.carDescription}
            fontSize={15}
          />
        </React.Fragment>
      )}
    </div>
  )
}

function CellCombinedComponent({
  data = new ModelCarDetail({})
}) {
  const tdStyle = {
    borderStyle: "solid",
    borderWidth: 0.5,
    borderColor: "gray",
    width: "20%",
    padding: 2
  }
  const tdValueStyle = {
    borderStyle: "solid",
    borderWidth: 0.5,
    borderColor: "gray",
    flex: 1,
    padding: 2
  }
  const trStyle = {
  }
  return(
    <div style={{
      backgroundColor: "#f5f5f5",
      padding: 5,
      fontSize: 15,
    }}>
      <table style={{
        borderCollapse: "collapse",
        width: "100%",
      }}>
        <tbody style={{
          width: "100%",
        }}>
          <tr style={trStyle}>
            <td style={tdStyle}>BPKB</td>
            <td style={tdValueStyle}>{data.carBPKB ? "Tersedia" : "Tidak Tersedia"}</td>
          </tr>
          <tr style={trStyle}>
            <td style={tdStyle}>STNK</td>
            <td style={tdValueStyle}>{data.carSTNK ? "Tersedia" : "Tidak Tersedia"}</td>
          </tr>
          <tr style={trStyle}>
            <td style={tdStyle}>Pajak mobil</td>
            <td style={tdValueStyle}>{moment(data.carTax).format("MMMM YYYY")}</td>
          </tr>
          <tr style={trStyle}>
            <td style={tdStyle}>Tahun mobil</td>
            <td style={tdValueStyle}>{data.carYear}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function CellComponent({
  text = "",
  fontSize = 20
}) {
  return (
    <div style={{
      whiteSpace: "pre-line",
      backgroundColor: "#f5f5f5",
      padding: 5,
      fontSize: fontSize
    }}>
      {text}
    </div>
  )
}

function CellTitleComponent({
  text = "",
  loading = false
}) {
  return (
    <div style={{
      backgroundColor: "#f5f5f5",
      padding: 5,
      fontSize: 20,
      fontWeight: "bold",
      height: loading ? "1rem" : null
    }}>
      {text}
    </div>
  )
}

export class ModelDetailDisplayer {
  title = ""
  description = ""
  price = ""
  fuelType = ""
  tax = new Date()
  transmission = ""
  year = ""
  stnk = false
  bpkb = false
  constructor({
    
  }) {
    
  }
}

export default Index