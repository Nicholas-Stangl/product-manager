import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const EditProduct = (props) => {

    const [formInfo, setFormInfo] = useState({
        title: "",
        price: "",
        description: ""
    })

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${props.prodId}`)
        .then(res => {
            console.log('************')
            console.log(res)
            console.log('************')
            setFormInfo(res.data.results)
        })
        .catch(err=> console.log (err))

    }, []);




    const changeHandler = (e) =>{
        console.log("********CHANGING********")
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        console.log("getting ready to submit", formInfo)
        axios.put(`http://localhost:8000/api/products/update/${props.prodId}`, formInfo)
            .then(res=>{
                console.log('***********')
                console.log(res)
                navigate(`/products/${props.prodId}`)
            })
            .catch(err=> console.log (err))
    }


    return (
        <div>
            <Link to='/'>Home</Link>
            <h1>Edit Product Attributes</h1>
            <form onSubmit={submitHandler}>
                <p>Title: <input type="text" id="" name="title" value={formInfo.title} onChange={changeHandler}/></p>
                <p>Price: <input type="number" id="" name="price" value={formInfo.price} onChange={changeHandler}/></p>
                <p>Description: <input type="text" id="" name="description" value={formInfo.description} onChange={changeHandler}/></p>
                <p><input type="submit" value="Edit Product"/></p>
            </form>
        </div>
    );
};

export default EditProduct;