import React, { useEffect, useState } from "react";
import "./styles/searchAutocomplete.css";

function SearchAutocomplete({ url, inpStyle, inpHeight, inpWidth, delimiter }) {
  const [localUrl, setLocalUrl] = useState(url);
  const [data, setData] = useState("");
  const [index, setIndex] = useState(0);
  const [ui, setUi] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(localUrl);
        const data = await res.json();
        setData(data);
        const splittedUrl = url.split("");
        const splittedUi = ui.split("");
        splittedUrl.map((val, ind) => {
          if (val === delimiter) {
            setIndex((prev) => {
              return ind + 1;
            });
          }
        });
        splittedUrl.splice(index, 0, ...splittedUi);
        setLocalUrl((prev) => {
          return splittedUrl.join("");
        });
        if (ui === "") {
          setLocalUrl(url);
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, [data]);

  function handleChange(e) {
    setUi((prev) => {
      return e.target.value;
    });
  }

  return (
    <div className="autocomplete">
      <input
        type="search"
        placeholder="Search"
        style={inpStyle ? inpStyle : { height: inpHeight, width: inpWidth }}
        onChange={handleChange}
      />
      <div className="results">
        {data?.recipes?.map((val) => {
          return <h1>{val.name}</h1>;
        })}
      </div>
    </div>
  );
}

export default SearchAutocomplete;
