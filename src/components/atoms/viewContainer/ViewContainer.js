import React from "react";


const ViewContainer = ({ platform, children, style, className }) => {
  

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

export default ViewContainer;
