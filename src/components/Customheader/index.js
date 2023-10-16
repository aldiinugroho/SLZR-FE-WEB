import * as React from "react";
import { assetsImages } from "../../assets";

function Index() {
  return(
    <div style={{
      backgroundColor: "#B92929",
      padding: 10
    }}>
      <div style={{
        width: "10rem",
        height: 60,
        // backgroundColor: "pink"
      }}>
        <img 
          width={"100%"}
          height={"100%"}
          style={{
            objectFit: "cover"
          }}
          src={assetsImages.png.imgLzrAutos}
        />
      </div>
    </div>
  )
}

export default Index