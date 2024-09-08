import React from "react";

function Logo({ width = "30px", children, height = "30px" }) {
  return <div className={`${width} ${height}`}>{children}</div>;
}

export default Logo;
