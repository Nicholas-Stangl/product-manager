import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios'

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState ([])

    const [deleteClicked, setDeleteClicked] = useState(false)
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then(res => {
            console.log('*************')
            console.log(res)
            console.log('*************')
            setAllProducts(res.data.results)
        })
        .catch()

    }, [deleteClicked]);

    const deleteProd = (e, id) =>{
        console.log('delete product number = ', id)
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
            .then(res => {
                console.log('*******DELETED*****')
                console.log(res)
                setDeleteClicked(!deleteClicked)
            
            })
            .catch(err=> console.log (err))
    }

    return (
        <div>
            <br/>
            <h1>Welcome to NickCo.</h1>
            <h3>Veiw a selection of our exciting Products:</h3>
            {
                allProducts.map((product, idx)=>{
                    return <div key={idx}>
                        <Link style={{fontWeight: "bold", fontSize: "40px"}} to={`/products/${product._id}`}>{product.title}</Link>
                        <br/>
                        <button onClick={(e)=>deleteProd(e, product._id)} >Delete Product</button>
                        <button><Link to={`/edit/${product._id}`}>Edit Product</Link></button>
                        <br/>
                        <br/>
                    </div>
                })
            }
        </div>
    );
};

export default AllProducts;