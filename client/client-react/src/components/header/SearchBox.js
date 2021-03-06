import { useState } from "react";
import "react-widgets/dist/css/react-widgets.css";
import "react-datepicker/dist/react-datepicker.css";
import DropdownList from "react-widgets/lib/DropdownList";
import DatePicker from "react-datepicker";
import { categories } from "../utils";

function SerachBox(props) {
  const [title, setTitle] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <>
      {props.showSearch && (
        <>
          <input
            placeholder="Search"
            onChange={(event) => setTitle(event.target.value)}
            style={{ marginRight: "5px" }}
          />
          <div style={{ width: "250px", marginRight: "5px" }}>
            <DropdownList data={categories} />
          </div>
          <div style={{ zIndex: 100, marginRight: "5px" }}>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div style={{ zIndex: 100, marginRight: "5px" }}>
            <DatePicker
              selected={startDate}
              onChange={(date) => setEndDate(date)}
            />
          </div>
        </>
      )}
      <img
        src={"../../../public/img/core-img/magnifying-glass-search.png"}
        onClick={() => props.setShowSearch(!props.showSearch)}
      />
    </>
  );
}

export default SerachBox;
