import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Invoice = () => {

  const [invoices, setInvoices] = useState([]);

  const Load = async () => {
    const res = await axios.get("http://127.0.0.1:8081/api/invoices");
    const result = await res.data.data.items;
    return result;
  };

  const res1 = axios.get("http://127.0.0.1:8081/api/invoices");
  console.log("All output res",res1)

  useEffect(() => {
    Load().then((data) => setInvoices(data));
  }, []);
console.log("outputs",invoices)


  const deleteInvoice = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://127.0.0.1:8081/api/invoices/${id}`)
      .then(() => {
        alert("Invoices delete successsfully !");
        window.location.reload();
      })
      .catch((err) => console.error("Error deleting Invoice:", err));
  };

  return (
    <div className="container mt-5">
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h4>Invoices List</h4>
            <Link
              to="/invoices/add"
              className="btn btn-primary float-end "
            >
              Add Invoices
            </Link>
          </div>
          <div className="card-body">
            <table className="table table-stripes">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Mobile No</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Billing Type</th>
                </tr>
              </thead>
              <tbody>
                {invoices &&
                  invoices.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.mobileno}</td>
                      <td>{item.email}</td>
                      <td>{item.address}</td>
                      <td>{item.bilingtype}</td>

                      <td>
                        <Link
                          to={`/invoices/${item.ID}`}
                          className="btn btn-success"
                        >
                          Edit
                        </Link>
                      </td>
                      <td>
                        <button
                          type="button"
                          onClick={(e) => deleteInvoice(e, item.ID)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Invoice