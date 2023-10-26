import * as React from "react";

export function rupiahFormat(params = "") {
  return params.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return screenWidth;
};