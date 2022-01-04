import React from "react";

export default function List({ title, content, index, onIndex, currentIndex }) {
  const clickHandler = (index) => {
    onIndex(index);
  };
  let active = "";
  if (index == currentIndex) {
    active = "active";
  }
  return (
    <React.Fragment>
      <div
        className={`${active} title`}
        onClick={() => {
          clickHandler(index);
        }}
      >
        <i className="dropdown icon"></i>
        {title}
      </div>
      <div className={`content ${active}`}>
        <p>{content}</p>
      </div>
    </React.Fragment>
  );
}
