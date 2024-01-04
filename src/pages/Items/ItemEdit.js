import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const ItemEdit = () => {

  let { id } = useParams();
  const history = useNavigate();
  const [item , setItem] = useState([])

  console.log("ID" , id)

  useEffect(() => {
    axios.get(`http://127.0.0.1:8081/api/items/${id}`).then(res => {
        console.log(res)
        setItem(res.data.data);
    });
},[id])

console.log("Set Data",item)

const handleInput = (e) => { 
  e.persist();
  setItem({
      ...item,
      [e.target.name]: e.target.value
  })
}

const UpdateItem = (e) => {
  e.preventDefault();

  const data = {
      name:item.name,
      unitprice:item.unitprice,
      itemcategory:item.itemcategory,
  }

  axios.patch(`http://127.0.0.1:8081/api/items/${id}`,data)
  .then(() => {
    alert("Item Updated Successfully !");
  })
  .then(()=>  history("/items"))  
}

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>Edit Item </h4>
              <Link to="/items" className="btn btn-danger float-end ">
                Back
              </Link>
            </div>
            <div className='card-body'>
            <form onSubmit={UpdateItem}>
                <div className='mb-3'>
                    <label>Name</label>
                    <input type='text' name='name' onChange={handleInput} value={item.name} className='form-control'/>
                </div>
                <div className='mb-3'>
                    <label>Unit Price</label>
                    <input type='text' name='unitprice' onChange={handleInput} value={item.unitprice} className='form-control'/>
                </div>
                <div className='mb-3'>
                    <label>Item Category</label>
                    <input type='text' name='itemcategory' onChange={handleInput} value={item.itemcategory} className='form-control'/>
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

export default ItemEdit
