import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const Create = () => {

    const [formInfo, setFormInfo] = useState({
        title: "",
        price: "",
        description: ""
    })

    const [errors, setErrors] = useState ({})

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
        axios.post('http://localhost:8000/api/products/create', formInfo)
            .then(res=>{
                console.log('***********')
                console.log(res)
                if(res.data.results){
                    navigate("/")
                }
                else{
                    setErrors(res.data.errors)
                }

            })
            .catch(err=> console.log (err))
    }


    return (
        <div>
            <Link to='/'>Home</Link>
            <h1>Add a new Product!</h1>
            <form onSubmit={submitHandler}>
                <p>Title: <input type="text" id="" name="title" onChange={changeHandler}/></p>
                <p style={{color:"red"}}>{errors.title? errors.title.message: ""}</p>
                <p>Price: <input type="number" id="" name="price" onChange={changeHandler}/></p>
                <p style={{color:"red"}}>{errors.price? errors.price.message: ""}</p>
                <p>Description: <input type="text" id="" name="description" onChange={changeHandler}/></p>
                <p style={{color:"red"}}>{errors.description? errors.description.message: ""}</p>
                <p><input type="submit" value="Submit Product"/></p>
            </form>
        </div>
    );
};

export default Create;