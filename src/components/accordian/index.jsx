import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordion({ singleSelection = true }) {
  const [selected, setSelected] = useState(null);

  const handleSelection = (id) => {
    if (singleSelection) {
      setSelected(selected === id ? null : id);
    }
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        {data.length > 0 ? (
          data.map((item) => (
            <div className="item" key={item.id}>
              <div className="title" onClick={() => handleSelection(item.id)}>
                <h3>{item.question}</h3>
                <span className={`arrow ${selected === item.id ? "open" : ""}`}>▶</span>
              </div>
              {selected === item.id && (
                <div className="content">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
