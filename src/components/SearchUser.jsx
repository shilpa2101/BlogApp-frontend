import axios from 'axios'
import React, { useState } from 'react'

const SearchUser = () => {
  const [datas,changedata]=useState(
    {
      "name":""
    }
  )

  const [result,setData]=useState(
    []
  )
  const InputHandler=(event)=>{
    changedata({...datas,[event.target.name]:event.target.value})
  }

  const readValue=()=>{
    console.log(datas)
    axios.post("http://localhost:8087/search",datas).then(
      (response)=>{
        if (response.data) {
          setData(response.data)
        } else {
          alert("no such a user")
        }
      }
    ).catch(
      (error)=>{
        console.log(error)
      }
    )
  }
  const deleteUser=(id)=>{
    let input={"_id" : id }
    axios.post("http://localhost:8087/delete",input).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
                alert("succesfully deleted")
            } else {
                alert("error")
            }
        }
    ).catch()
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">name</label>
                <input type="text" name="name" value={datas.name} onChange={InputHandler} className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={readValue}>Search</button>
              </div>
              <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
                <thead>
                    <tr>
                    <th scope="col">name</th>
                    <th scope="col">phone</th>
                    <th scope="col">email</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {result.map(
                        (value,index)=>{
                            return <tr>
                            <th >{value.name}</th>
                            <td>{value.phone}</td>
                            <td>{value.email}</td>
                            
                            <button className="btn btn-danger" onClick={()=>{deleteUser(value._id)}}>Delete</button>
                            </tr>
                        }
                    )}
                    
                    
                </tbody>
                </table>
                </div>
            </div>
        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchUser