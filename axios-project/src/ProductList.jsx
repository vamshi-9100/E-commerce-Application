import axios from "axios";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// Assuming `getproducts` is an API call returning an array of products
import { deletebyid, getproducts, updatebyid } from "./ProductService";

export const ProductList = () => {
  const [products, setproducts] = useState([]);

  const listofitems = async () => {
    try {
      // Fetch products from the service
      const product = await getproducts();

      if (product) {
        setproducts(product); // Update state with the fetched products
      } 
      } 
     catch (error) {
      console.error("Error fetching products:", error);
    }
  };



  const handledelete=async(id)=>
  {
    try{
    await deletebyid(id)
    listofitems();
    }
    catch(error)
    {
      console.log(error);

    }
    


  }




  const handleupdate=async(id)=>
  {
    try{

    
    await updatebyid(id);
    listofitems();

    }
    catch(error)
    
    {
      console.log(error);
    }

  }

  return (
    <>
      <h2>Product List</h2>
      <table border="1" cellPadding="5" cellSpacing="0" className="table table-striped table-hover table-bordered" >
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Image</th>
            <th>id</th>
          </tr>
        </thead>
        <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.proName}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.category}</td>
                <td>
                  <img
                    src={`/images/${product.image}`}
                    alt={product.name}
                    style={{ width: "50px", height: "50px" }}
                  />
                </td>
                <td>{product.proId}</td>
                <td>
                  <button type="button" className="btn btn-danger" onClick={()=>handledelete(product.proId)}>DELETE</button>
                  <button className="btn btn-success" type="button"   onClick={()=>handleupdate(product.id)}>update</button>
                </td>
              </tr>
            ))
        }
        </tbody>
      </table>
      <button type="button" onClick={listofitems}>List of items</button>
    </>
  );
};

export default ProductList;
