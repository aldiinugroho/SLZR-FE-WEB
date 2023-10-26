import * as React from "react";
import { ModelCarDetail, ModelCarImage } from "../../models/cardetail";
import { useScreenWidth } from "../../../../utils";

function Index({data = new ModelCarDetail({}), loading = false, width = 300}) {
  const [mainImageDisplay,setmainImageDisplay] = React.useState("")
  const [imageHolder,setimageHolder] = React.useState([])
  var screenwidth = useScreenWidth()

  React.useEffect(() => {
    setupdata(data)
  },[data])

  function setupdata(params = new ModelCarDetail({})) {
    if (params === null) return
    const mapped = params.carImage.map((i) => new ModelImageDisplayer(i))
    if (mapped.length === 0) return
    setmainImageDisplay(mapped[0]?.image)
    setimageHolder(mapped)
  }

  return(
    <div style={{
      width: "100%",
    }}>
      <div style={{
        backgroundColor: "#f5f5f5",
        width: "100%",
        height: 300,
      }}>
        <img 
        alt={mainImageDisplay}
        width={"100%"}
        height={"100%"}
        style={{
          display: loading === true ? "none" : "flex",
          objectFit: "contain"
        }}
        src={mainImageDisplay} />
      </div>
      <div style={{padding: 2}}></div>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        // height: 80,
        backgroundColor: "#f5f5f5",
        overflowX: "auto",
        overflowY: "hidden",
        whiteSpace: "nowrap",
      }}>
        {imageHolder.map((i,x) => (
          <div 
          onClick={() => setmainImageDisplay(i?.image)}
          key={x}
          style={{
            marginRight: x+1 === imageHolder.length ? 0 : 4,
            width: 80,
            height: "100%",
            // backgroundColor: "pink"
          }}>
            <img 
            alt={i?.image}
            width={"100%"}
            height={"100%"}
            style={{
              objectFit: "cover"
            }}
            src={i?.image} />
          </div>
        ))}
      </div>
    </div>
  )
}

export class ModelImageDisplayer {
  image = ""
  constructor({
    image = ""
  }) {
    this.image = image
  }
}

export default Index