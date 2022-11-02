import React, { useState } from "react";

const AddItem = ({ addItem }) => {
  const [name, setname] = useState("");
  const [address, setAddress] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!name || !address) {
      alert("please fill the requirments");
    } else {
      addItem(name, address);
      setname("");
      setAddress("");
    }
  };
  return (
    <div className="container my-3">
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
            id="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Address
          </label>
          <input
            type="text"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            className="form-control"
            id="address"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddItem;
