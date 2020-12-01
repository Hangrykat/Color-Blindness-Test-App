import React from "react";

const TestCard = (props) => {
  return (
    <div className="test-cards">
      <div className="test-image">
        <img src={props.imgSrc} alt={props.alt} />{" "}
      </div>
    </div>
  );
};

export default TestCard;
