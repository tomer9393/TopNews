import { useState } from "react";
import { DropdownList } from "react-widgets";

function SerachBox(props) {
  const [title, setTitle] = useState();
  let categories = ["orange", "red", "blue", "purple"];
  return (
    <>
      <input onChange={(event) => setTitle(event.target.value)} />
      <DropdownList data={categories} />
      <img
        src={"../../../public/img/core-img/magnifying-glass-search.png"}
        onClick={() => props.setShowSearch(!props.showSearch)}
      />
    </>
  );
}

export default SerachBox;
