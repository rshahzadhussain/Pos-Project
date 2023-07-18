import React from "react";

export default function Paymentmtd() {
  return (
    <>
      <div className="container">
        <div className="row" style={{ display: "block", marginTop: "20px" }}>
          <span>Payment Method:</span>
          <span>
            <input type="radio" name="" id="" />
            <label className="ms-1"> Cash </label>
          </span>
          <span>
            <input type="radio" name="" id="" />
            <label className="ms-1">Credit</label>
          </span>
          <span>
            <input type="radio" name="" id="" />
            <label className="ms-1">Card</label>
          </span>
        </div>
      </div>
      <div className="container my-4">
        <div className="row ">
          <div className="col">
            <button className="btn btn-primary">Collect Cash</button>
          </div>
          <div className="col">
            <button className="btn btn-primary">Print Invoice</button>
          </div>
          <div className="col">
            {" "}
            <button className="btn btn-primary">Cancel Order</button>
          </div>
          <div className="col">
            {" "}
            <button className="btn btn-primary">Hold Order</button>
          </div>
        </div>
      </div>
    </>
  );
}
