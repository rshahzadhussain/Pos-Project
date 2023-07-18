import React from "react";

export default function Cartdata() {
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <table className="table">
            <thead>
              <tr className="table-design">
                <th scope="col" className="table-design-th">
                  <input type="checkbox" name="" id="" />
                </th>
                <th scope="col" className="table-design-th">
                  ID
                </th>
                <th scope="col" className="table-design-th">
                  Title
                </th>
                <th scope="col" className="table-design-th">
                  Quantity
                </th>
                <th scope="col" className="table-design-th">
                  Unit Price
                </th>
                <th scope="col" className="table-design-th">
                  Total
                </th>
                <th scope="col" className="table-design-th">
                  Action
                </th>
              </tr>
              <tr>
                <td
                  colSpan={7}
                  className="text-end text-success"
                  style={{ borderWidth: "1px" }}
                >
                  <h2>Grand Total</h2>
                </td>
                <td
                  colSpan={2}
                  className="text-end text-success bg-success rounded-pill text-white text-center"
                  style={{ borderWidth: "1px" }}
                >
                  <h2>Rs : 0</h2>
                </td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </>
  );
}
