import React from "react";

export default function Customerdata() {
  return (
    <>
      <div className="container">
        <div className="card ">
          <div
            className="row"
            style={{ paddingTop: "10px", paddingBottom: "10px" }}
          >
            <div className="col">
              Customer ID:{" "}
              <select className="ms-2 ">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
              </select>
            </div>
            <div className="col">
              Customer : <input type="text" />
            </div>
            <div className="col">
              Mobile : <input type="tel" name="" id="" />
            </div>
            <div className="col">
              <button className="btn btn-primary">New Customer</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
