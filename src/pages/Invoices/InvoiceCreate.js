import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const InvoiceCreate = () => {

  const history = useNavigate();
  const [invoice, setInvoice] = useState({
    name: "",
    mobileno: "",
    email: "",
    address: "",
    bilingtype: ""
  });

  const handleInput = (e) => {
    setInvoice((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value],
    }));
  };

  const sendRequest = async () => {
    await axios.post("http://127.0.0.1:8081/api/invoices", {
      name: String(invoice.name),
      mobileno: String(invoice.mobileno),
      email: String(invoice.email),
      address: String(invoice.address),
      bilingtype: String(invoice.bilingtype),
    });
  };

  const FormSubmit = async (e) => {
    e.preventDefault();
    sendRequest()
      .then(() => {
        alert("Invoice added Successfully !");
      })
      .then(() => history("/invoices"));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>Add Invoice </h4>
              <Link to="/invoices" className="btn btn-danger float-end ">
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
                  <label>Mobile No</label>
                  <input
                    type="text"
                    name="mobileno"
                    onChange={handleInput}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleInput}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    onChange={handleInput}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label>Billing Type</label>
                  <input
                    type="text"
                    name="bilingtype"
                    onChange={handleInput}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <button type="submit" className="btn btn-primary">
                    Save Invoice
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

export default InvoiceCreate;
