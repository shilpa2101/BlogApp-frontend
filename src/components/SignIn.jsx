import axios from 'axios'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const SignIn = () => {
    const Navigate=useNavigate()
    const [datas,changedata]=useState(
        {
                 
            " email":"",
            " password":""
        }
    )
  
    const InputHandler=(event)=>{
        changedata({...datas,[event.target.name]:event.target.value})
    }
    const readValues=()=>{
        console.log(datas)
        axios.post("http://localhost:8087/signin",datas).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="incorrect password") {
                    alert("Incorrect Password")
                } else if(response.data.status=="invalid email id"){
                    alert("Invalid email id")
                }
                else {
                    let token=response.data.token
                    let userId=response.data.userId
                    console.log(token)
                    console.log(userId)

                    sessionStorage.setItem("userId",userId)
                    sessionStorage.setItem("token",token)
                    Navigate("/create")
                }
            }
        ).catch()
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">email</label>
                            <input type="email" className="form-control" name="email" value={datas.email} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">password</label>
                        <input type="password" className="form-control" name="password" value={datas.password} onChange={InputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValues}>Login</button>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <a href="/signup" className="btn btn-primary">new user registration</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn