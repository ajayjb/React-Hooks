import React, { useState } from "react";
import Items from "./Items";

export default function Accordion() {
  const [currentIndex, setIndex] = useState(null);

  const clickHandler = (index) => {
    if (index === currentIndex) {
      setIndex(null);
    } else {
      setIndex(index);
    }
  };

  const itemRender = Items.map((e, index) => {
    const active = index === currentIndex ? "active" : "";
    return (
      <React.Fragment key={e.id}>
        <div
          className={`${active} title`}
          onClick={() => {
            clickHandler(index);
          }}
        >
          <i className="dropdown icon"></i>
          {e.title}
        </div>
        <div className={`content ${active}`}>
          <p>{e.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{itemRender}</div>;
}
