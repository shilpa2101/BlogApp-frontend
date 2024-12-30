import axios from 'axios'
import React, { useState } from 'react'

const CreatePost = () => {
    const [datas,changedata]=useState(
        {
        "userId":sessionStorage.getItem("userId"),
        "Message":""
        }
    )
    const InputHandler=(event)=>{
        changedata({...datas,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(datas)
        axios.post("http://localhost:8087/create",datas,{headers:{"token":sessionStorage.getItem("token"),"Content-Type":"application/json"}}).then(
            (response)=>{
                console.log(response.data)
            if (response.data.status=="success") {
                alert("posted successfully")
            } else {
               alert("something went wrong") 
            }
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )

    }
  return (
    <div>
         <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Print  message</label>
                            <input type="text" name="Message" value={datas.Message} onChange={InputHandler}className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreatePost