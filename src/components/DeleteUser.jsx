import axios from 'axios'
import React, { useState } from 'react'

const DeleteUser = () => {
const [datas,changedata]=useState(
  {
    "name":""
  }
)
  const [result,setData]=useState(
    []
  )
  const Inputhandler=(event)=>{
    changedata({...datas,[event.target.name]:event.target.value})
  
  }

  const deleteUser=()=>{
    axios.post("http://localhost:8087/search",datas).then(
      (response)=>{
        if (response.data) {
          axios.post("http://localhost:8087/delete",datas).then(
            (response)=>{
              if (response.data.status=="success") {
                alert("user successfully deleted")
              } else {
                alert("error while deleting")
              }
            }
          ).catch(
            (error)=>{
              console.log("error while deleting user",error)
            }
          )
        } else {
          alert("no user")
        }
      }
    ).catch(
      (error)=>{
        console.log("error while searching",error)
        alert("no such a user")
      }
    )
  }

 
  return (
   <div>
    <label htmlFor="" className="form-label">NAme</label>
    <input type="text" className="form-control" name="name" value={datas.name} onChange={Inputhandler} />
    <button className="btn btn-success" onClick={deleteUser}>delete</button>
   </div>
  )
}

export default DeleteUser