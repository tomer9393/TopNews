function SingleStockReport() {
  return (
    <div className="single-stock-report">
      <div className="stock-values">
        <span>eur/usd</span>
        <span>1.1862</span>
      </div>
      {/* minus-index OR plus-index */}
      <div className="stock-index minus-index">
        <h4>0.18</h4>
      </div>
    </div>
  );
}

export default SingleStockReport;
