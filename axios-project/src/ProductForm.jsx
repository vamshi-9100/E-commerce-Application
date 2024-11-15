import { useRef } from "react";
import { saveProduct } from "./ProductService";
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>

function ProductForm()
{   
     const nameRef=useRef();
     const categoryRef=useRef();
     const priceRef=useRef();
     const quantityRef=useRef();
     const imageRef=useRef();

     const handlesubmit =async(e)=>{
        e.preventDefault();
     const jsonpayload=
     {
        proName:nameRef.current.value,
        category:categoryRef.current.value,
        price:parseFloat(priceRef.current.value),
        quantity:parseInt(quantityRef.current.value,10),
        image:imageRef.current.files[0].name

     }
       

        saveProduct(jsonpayload);
     }

    return (
        <>
        <form onSubmit={handlesubmit}encType="multipart/form-data">
        <label>product name:</label>
        <input type = "text"ref={nameRef} required />
        <br/><br/><br/>
        <label>product price:</label>
        <input type = "number"ref={priceRef} required />
        <br/><br/><br/>
        <label>product quantity:</label>
        <input type = "number"ref={quantityRef} required /> 
        <br/><br/><br/>  
        <label>product category:</label>
        <input type = "text"ref={categoryRef} required /> 
        <br/><br/><br/>
        <label>product image:</label>
        <input type = "file"ref={imageRef} required />
        <br/><br/><br/>
        <button type="submit">submit</button>

        </form>

        </>
    )
}
export default ProductForm;