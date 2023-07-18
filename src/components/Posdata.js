import React from "react";

export default function Posdata() {
  return (
    <>
      <div className="container">
        <div
          className="row"
          style={{ backgroundColor: "cyan", borderRadius: "15px" }}
        >
          <div className="col">
            <input
              //   type="select"
              id="selectnum"
              style={{
                height: "40px",
                marginTop: "10px",
                marginBottom: "10px",
                borderRadius: "10px",
                // width: "150px",
              }}
            />
          </div>
          <div className="col">
            <input
              type="text"
              placeholder="Product Title"
              style={{
                height: "40px",
                marginTop: "10px",
                marginBottom: "10px",
                borderRadius: "10px",
                textAlign: "center",
                fontSize: "20px",
              }}
            />
          </div>
          <div className="col">
            <input
              type="number"
              style={{
                height: "40px",
                marginTop: "10px",
                marginBottom: "10px",
                borderRadius: "10px",
              }}
            />
          </div>
          <div className="col">
            <input
              type="text"
              placeholder="Unit Price"
              style={{
                height: "40px",
                marginTop: "10px",
                marginBottom: "10px",
                borderRadius: "10px",
                textAlign: "center",
              }}
            />
          </div>
          <div className="col">
            <button
              className="btn btn-primary"
              style={{
                height: "40px",
                width: "150px",
                marginTop: "10px",
                marginBottom: "10px",
                borderRadius: "10px",
              }}
            >
              Add
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-warning"
              style={{
                height: "40px",
                width: "150px",
                marginTop: "10px",
                marginBottom: "10px",
                borderRadius: "10px",
              }}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
