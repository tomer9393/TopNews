import { useState } from "react";
import { categories } from "../utils";
import {
  TextField,
  Dropdown,
  DatePicker,
  mergeStyleSets,
} from "@fluentui/react";
import { homePageSearch } from "../../api/ArticleAPI";
import { useHistory } from "react-router-dom";

const MARGIN = "10px";

function SerachBox(props) {
  const [searchText, setSearchText] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const history = useHistory();

  const dropdownOptions = [
    { key: undefined, text: "" },
    ...categories.map((category) => ({
      key: category,
      text: category,
    })),
  ];

  const controlClass = mergeStyleSets({
    control: {
      maxWidth: "200px",
    },
  });

  return (
    <>
      {props.showSearch && (
        <>
          <div style={{ marginRight: MARGIN }}>
            <TextField
              placeholder="Search"
              onChange={(_, value) => setSearchText(value || "")}
              styles={{ fieldGroup: { width: 200 } }}
            />
          </div>
          <div style={{ marginRight: MARGIN }}>
            <Dropdown
              placeholder="Select a category"
              options={dropdownOptions}
              onChange={(_, item) => {
                setSelectedCategory(item.key);
              }}
              styles={{ dropdown: { width: 200 } }}
            />
          </div>
          <div style={{ marginRight: MARGIN }}>
            <DatePicker
              placeholder="Start date"
              className={controlClass.control}
              onSelectDate={(date) => setStartDate(date)}
              maxDate={new Date()}
            />
          </div>
          <div>
            <DatePicker
              placeholder="End date"
              className={controlClass.control}
              onSelectDate={(date) => setEndDate(date)}
              maxDate={new Date()}
            />
          </div>
        </>
      )}
      <i
        className="fa fa-search btn"
        aria-hidden="true"
        onClick={() =>
          !props.showSearch
            ? props.setShowSearch(true)
            : homePageSearch(
                selectedCategory,
                searchText,
                generateDate(startDate),
                generateDate(endDate)
              )
                .then((res) => res.data)
                .then((res) => {
                  clearFields(
                    setSearchText,
                    setSelectedCategory,
                    setStartDate,
                    setEndDate
                  );
                  props.setShowSearch(false);
                  history.push({
                    pathname: "/Search",
                    state: { articles: res },
                  });
                })
        }
        style={{ marginLeft: MARGIN }}
      />
      {props.showSearch && (
        <i
          class="fa fa-times btn"
          aria-hidden="true"
          onClick={() => props.setShowSearch(false)}
          style={{ marginLeft: MARGIN }}
        />
      )}
    </>
  );
}

const clearFields = (
  setSearchText,
  setSelectedCategory,
  setStartDate,
  setEndDate
) => {
  setSearchText(undefined);
  setSelectedCategory(undefined);
  setStartDate(undefined);
  setEndDate(undefined);
};

const generateDate = (date) =>
  date
    ? `${date.getFullYear()},${date.getMonth() + 1},${date.getDate()}`
    : undefined;

export default SerachBox;
