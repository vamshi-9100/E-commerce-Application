import axios from "axios";

export const saveProduct = async(jsonpayload) => {
    try{
    const promise=await
    axios.post("http://localhost:8888/api/v1/postdata",jsonpayload)
    console.log("promise returned by the axios.post ():",promise);
    }
   
    catch(error)
    {
        console.error("error saving product:",error);

    };

}




export const getproducts=async()=>
{
    try
    {
        const response=await
        axios.get('http://localhost:8888/api/v1/getall');
        console.log(response.data);
        return response.data;


    }
    catch(error)
    {
        console.error('error fetching products:',error);
        return [];
    }
    
};

export const deletebyid=async(id)=>
{
    try{

    
    const response=await axios.delete(`http://localhost:8888/api/v1/deletebyid/${id}`)
    return response;
    }
    catch(error){
        console.log("error deelting the product",error)

    }
}



export const updatebyid=async(id)=>
{
    try{
       const gotdata= await axios.get('http://localhost:8888/api/v1/getbyid');
    const response =await axios.put(`http://localhost:8888/api/v1/updatebyid/${id}`)
    return response,await gotdata.data;
    }
    catch(error)
    {
        console.log(error);
    }

}