import React from "react";

const Content = ({ children, onClose }) => {
  return (
    <div className="content" onClick={onClose}>
      {children}
    </div>
  );
};

export default Content;
