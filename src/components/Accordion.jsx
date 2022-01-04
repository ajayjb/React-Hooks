import React, { useState } from "react";
import Items from "./Items";
import List from "./List/List";

export default function Accordion() {
  const [currentIndex, setIndex] = useState(null);
  function onIndex(value) {
    if (value === currentIndex) {
      setIndex(null);
    } else {
      setIndex(value);
    }
  }
  const itemRender = Items.map((e, index) => {
    return (
      <div key={e.id}>
        <List
          title={e.title}
          content={e.content}
          index={index}
          onIndex={onIndex}
          currentIndex={currentIndex}
        />
      </div>
    );
  });
  return <div className="ui styled accordion">{itemRender}</div>;
}
