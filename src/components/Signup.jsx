import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Signup = () => {
    const [data,changedata]=useState(
        {
       " name":"",
       " phone":"",         
       " email":"",
       " password":"",
       "confirmpassword":""
        }
        )
        const InputHandler=(event)=>{
            changedata({...data,[event.target.name]:event.target.value})
        }
        const Readvalue=()=>{
            if (data.password==data.confirmpassword) {
                let newUserdata={"name":data.name,"phone":data.phone,"email":data.email,"password":data.password}
                console.log(newUserdata)
                axios.post("http://localhost:8087/signup",newUserdata).then(
                    (response)=>{
                        if (response.data.status=="success") {
                            alert("registration success")
                        } else {
                            alert("email already exists")
                        }
                    }
                )
            } else {
                alert("password mismatch")
            }
        }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name="name" value={data.name} onChange={InputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">phone</label>
                        <input type="number" className="form-control" name="phone" value={data.phone} onChange={InputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">email</label>
                        <input type="email" className="form-control" name="email" value={data.email} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">passsword</label>
                        <input type="password" className="form-control" name="password" value={data.password} onChange={InputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">confirm passsword</label>
                        <input type="password" className="form-control" name="confirmpassword" value={data.confirmpassword} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={Readvalue}>register</button>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <a href="/" className="btn btn-primary">sign in</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup