import React, { useState, useEffect } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios'




const SpecificProduct = (props) => {

    const [prodInfo, setProdInfo] = useState({})
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${props.prodId}`)
        .then(res => {
            console.log('************')
            console.log(res)
            console.log('************')
            setProdInfo(res.data.results)
        })
        .catch(err=> console.log (err))

    }, []);

    const deleteProd = (e, id) =>{
        console.log('delete product number = ', id)
        axios.delete(`http://localhost:8000/api/products/delete/${props.prodId}`)
            .then(res => {
                console.log('*******DELETED*****')
                console.log(res)
                navigate("/")
            
            })
            .catch(err=> console.log (err))
    }

    return (
        <div>
            <br/>
            <Link to="/">Home</Link>
            <br/>
            <h1>Learn more about this wonderful:</h1>
            {prodInfo==null? <h3>Product Currently Unavailable</h3>:
            <>
            <br/>
            <h1 style={{color: "blue"}}>{prodInfo.title} </h1>
            <br/>
            <h3 style={{color: "grey"}}>At a very reasonable price of ${prodInfo.price}.99!</h3>
            <br/>
            <h2>{prodInfo.description}</h2>
            <br/>
            <button onClick={(e)=>deleteProd(e, prodInfo._id)} >Delete Product</button>
            <button><Link to={`/edit/${prodInfo._id}`}>Edit Product</Link></button>
            </>
            }   
        </div>
    );
};

export default SpecificProduct;