import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const InvoiceEdit = () => {

    let { id } = useParams();
  const history = useNavigate();
  const [invoice , setInvoice] = useState([])

  console.log("ID" , id)

  useEffect(() => {
    axios.get(`http://127.0.0.1:8081/api/invoices/${id}`).then(res => {
        console.log(res)
        setInvoice(res.data.data);
    });
},[id])

console.log("Set Data",invoice)

const handleInput = (e) => { 
  e.persist();
  setInvoice({
      ...invoice,
      [e.target.name]: e.target.value
  })
}

const UpdateItem = (e) => {
    e.preventDefault();
  
    const data = {
        name:invoice.name,
        mobileno:invoice.mobileno,
        email:invoice.email,
        address: invoice.address,
        bilingtype: invoice.bilingtype
    }
  
    axios.patch(`http://127.0.0.1:8081/api/invoices/${id}`,data)
    .then(() => {
      alert("Invoice Updated Successfully !");
    })
    .then(()=>  history("/invoices"))  
  }

  return (
    <div className="container mt-5">
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h4>Edit Invoice </h4>
            <Link to="/invoices" className="btn btn-danger float-end ">
              Back
            </Link>
          </div>
          <div className='card-body'>
          <form onSubmit={UpdateItem}>
              <div className='mb-3'>
                  <label>Name</label>
                  <input type='text' name='name' onChange={handleInput} value={invoice.name} className='form-control'/>
              </div>
              <div className='mb-3'>
                  <label>Mobile No</label>
                  <input type='text' name='mobileno' onChange={handleInput} value={invoice.mobileno} className='form-control'/>
              </div>
              <div className='mb-3'>
                  <label>Email</label>
                  <input type='text' name='email' onChange={handleInput} value={invoice.email} className='form-control'/>
              </div>
              <div className='mb-3'>
                  <label>Address</label>
                  <input type='text' name='address' onChange={handleInput} value={invoice.address} className='form-control'/>
              </div>
              <div className='mb-3'>
                  <label>Billing Type</label>
                  <input type='text' name='bilingtype' onChange={handleInput} value={invoice.bilingtype} className='form-control'/>
              </div>
              <div className='mb-3'>
                  <button type='submit' className='btn btn-primary'>Save Item</button>
              </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default InvoiceEdit