import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as Pages from "../pages";
import { ParentRouting } from "./modelParentRouting";

function Index() {
  return (
    <Router>
      <Routes>
        {Routing.map((i,r) => (
          <React.Fragment key={r}>
            <Route path={i.path} element={i.element} />
            {i?.childs.map((childs,ckey) => (
              <Route key={{ckey}} path={childs?.path} element={childs?.element} />
            ))}
          </React.Fragment>
        ))}
      </Routes>
    </Router>
  );
}

export  const  Routing = [
  new ParentRouting({
    name: "Main",
    path: "/",
    element: <Pages.Main />,
    showSideBar: false
  }),
  new ParentRouting({
    name: "Main",
    path: "/car/detail/:carId",
    element: <Pages.CarDetail />,
    showSideBar: false
  }),
]

export default Index;
