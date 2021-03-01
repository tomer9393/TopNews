import { useState } from "react";

function SingleStockReport(props) {
  const [curr, setCurr] = useState();

  fetch(
    `https://api.exchangeratesapi.io/latest?base=ILS&symbols=${props.currSymbol}`
  )
    .then((res) => res.json())
    .then((res) => {
      setCurr(res.rates[props.currSymbol]);
    });

  return (
    <div className="single-stock-report">
      <div className="stock-values">
        <span>{props.currSymbol}</span>
        <span>{parseFloat(curr).toFixed(3)}</span>
      </div>
      {/* minus-index OR plus-index */}
      <div className="stock-index minus-index">
        <h4>0.19</h4>
      </div>
    </div>
  );
}

export default SingleStockReport;
