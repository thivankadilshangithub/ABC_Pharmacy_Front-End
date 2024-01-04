import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ItemCreate = () => {

  const history = useNavigate();
  const [items, setItems] = useState({
    name: "",
    unitprice: "",
    itemcategory: "",
  });

  const handleInput = (e) => {
    setItems((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value],
    }));
  };

  const sendRequest = async () => {
    await axios.post("http://127.0.0.1:8081/api/items", {
      name: String(items.name),
      unitprice: String(items.unitprice),
      itemcategory: String(items.itemcategory),
    });
  };

  const FormSubmit = async (e) => {
    e.preventDefault();
    sendRequest()
      .then(() => {
        alert("Item added Successfully !");
      })
      .then(() => history("/items"));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>Add Item </h4>
              <Link to="/items" className="btn btn-danger float-end ">
                Back
              </Link>
            </div>
            <div className="card-body">
              <form onSubmit={FormSubmit}>
                <div className="mb-3">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    onChange={handleInput}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label>Unit Price</label>
                  <input
                    type="text"
                    name="unitprice"
                    onChange={handleInput}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label>Item Category</label>
                  <input
                    type="text"
                    name="itemcategory"
                    onChange={handleInput}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <button type="submit" className="btn btn-primary">
                    Save Item
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCreate;
