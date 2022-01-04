import React, { useState, useEffect } from "react";
import wikiApi from "../wikiApi";

export default function Search() {
  const [term, setTerm] = useState("Loki");
  const [result, setResult] = useState([]);

  useEffect(() => {
    const request = async () => {
      const { data } = await wikiApi.get("", {
        params: {
          srsearch: term,
        },
      });
      setResult(data.query.search);
    };
    console.log("I will run first");
    // if (term && !result.length) {
    //   request();
    // } else {
    //   let timeId;
    //   if (term) {
    //     timeId = setTimeout(request, 350);
    //   }
    return () => {
      // clearTimeout(timeId);
      console.log("I run second");
    };
    // }
  }, [term]);

  const list = result.map((e) => {
    return (
      <div key={e.pageid} className="item">
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org/?curid=${e.pageid}`}
            className="ui button"
          >
            GO
          </a>
        </div>
        <div className="content">
          <div className="header">{e.title}</div>
          <span dangerouslySetInnerHTML={{ __html: e.snippet }}></span>
        </div>
      </div>
    );
  });

  function onInputChange(e) {
    setTerm(e.target.value);
  }

  return (
    <div className="ui segment">
      <div className="ui form">
        <label htmlFor="Input">Search</label>
        <div className="field">
          <input
            id="Input"
            placeholder={term}
            type="text"
            onChange={onInputChange}
          />
        </div>
      </div>
      <div className="ui celled list">{list}</div>
    </div>
  );
}
