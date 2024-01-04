import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Item = () => {
  const history = useNavigate();
  const [items, setItems] = useState([]);

  const Load = async () => {
    const res = await axios.get("http://127.0.0.1:8081/api/items");
    const result = await res.data.data.items;
    return result;
  };

  useEffect(() => {
    Load().then((data) => setItems(data));
  }, []);

console.log("outputs",items)

  const deleteStudent = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://127.0.0.1:8081/api/items/${id}`)
      .then(() => {
        alert("Item delete successsfully !");
        window.location.reload();
      })
      .catch((err) => console.error("Error deleting Item:", err));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>Items List</h4>
              <Link
                to="/items/add"
                className="btn btn-primary float-end "
              >
                Add Item
              </Link>
            </div>
            <div className="card-body">
              <table className="table table-stripes">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Unit Price</th>
                    <th>Item Category</th>
                  </tr>
                </thead>
                <tbody>
                  {items &&
                    items.map((item, index) => (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.unitprice}</td>
                        <td>{item.itemcategory}</td>
                        <td>
                          <button
                            type="button"
                            onClick={() => history("/invoices")}
                            className="btn btn-warning"
                          >
                            Invoice
                          </button>
                        </td>
                        <td>
                          <Link
                            to={`/items/${item.ID}`}
                            className="btn btn-success"
                          >
                            Edit
                          </Link>
                        </td>
                        <td>
                          <button
                            type="button"
                            onClick={(e) => deleteStudent(e, item.ID)}
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
  );
};

export default Item;
