import React from "react";

function Banner({ isSucess, children }) {
  console.log(isSucess);
  const banner = (
    <div className={"banner" + (isSucess ? " happy" : " sad")}>{children}</div>
  );

  return <>{banner}</>;
}

export default Banner;
