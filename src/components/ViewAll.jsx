import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    const [token,setToken]=useState(sessionStorage.getItem("token"))
    const [data, changedata] = useState(
        
    [
     
    ]
    

    )
    const fetchdata = () =>{
        console.log(token)
        axios.post("http://localhost:8087/viewall", {},{
            headers: { "token":token , "Content-Type": "application/json"}
        }).then(
            (response) => {
                console.log(response.data)
                changedata(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }
    
    useEffect(()=>{fetchdata()},[])
  return (
    <div>
        <div>
            <Navbar/>
        <div className="container">
            {data.map((value,index)=>{
                return  <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                       
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                   <div class="card mb-3" >
                       <div class="row g-0">
                           <div class="col-md-4">
                               <img src="..." class="img-fluid rounded-start" alt="..." />
                           </div>
                           <div class="col-md-8">
                               <div class="card-body">
                                   <h5 class="card-title">{value.name}</h5>
                                   <p class="card-text">{value.Message}</p>
                                   <p class="card-text"><small class="text-body-secondary">{value.postedDate}</small></p>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
               
               </div>
               
                </div>
            </div>
              })}
            </div>
    </div>
    </div>
  )
}

export default ViewAll