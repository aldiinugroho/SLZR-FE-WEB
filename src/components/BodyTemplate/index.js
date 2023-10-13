import * as React from "react";

function Index({
  children = <div></div>
}) {
  return(
    <div 
    style={{
      display: "flex",
      justifyContent: "center",
      // backgroundColor: "pink",
      width: "100%"
    }}>
      <div 
      style={{
        // backgroundColor: "yellow",
        width: "100rem"
      }}>
        {children}
      </div>
    </div>
  )
}

export default Index